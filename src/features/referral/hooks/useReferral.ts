import { useState, useEffect } from "react";
import { ReferralConfig, ReferralData, ConversionEvent, QueuedEvent } from "../components/ReferralWidget/types";
import { ReferralAPI } from "../ReferralAPI";

let apiInstance: ReferralAPI | null = null;

export function initializeReferralAPI(config: ReferralConfig) {
  if (!apiInstance || apiInstance.getConfig().projectId !== config.projectId) {
    apiInstance = ReferralAPI.create(config);
    apiInstance.initialize();
  }
}

/**
 * Main headless hook for open-source users to manage referral state and tracking.
 */
export function useReferral() {
  const [referralData, setReferralData] = useState<ReferralData | null>(apiInstance?.get() || null);
  const [isTracking, setIsTracking] = useState(false);
  const [queuedEvents, setQueuedEvents] = useState<QueuedEvent[]>(apiInstance?.getQueuedEvents() || []);

  // Subscribe to changes if we had an event emitter, but for now we'll sync on mount
  useEffect(() => {
    if (apiInstance) {
      setReferralData(apiInstance.get());
      setQueuedEvents(apiInstance.getQueuedEvents());
    }
  }, []);

  const trackConversion = async (event: ConversionEvent) => {
    if (!apiInstance) {
      console.warn("Roastnest: ReferralAPI not initialized. Ensure ReferralWidget is rendered.");
      return;
    }
    setIsTracking(true);
    try {
      await apiInstance.trackConversion(event);
    } finally {
      setIsTracking(false);
      setQueuedEvents(apiInstance.getQueuedEvents());
    }
  };

  const clearReferral = () => {
    if (apiInstance) {
      apiInstance.clear();
      setReferralData(null);
    }
  };

  const retryQueue = async () => {
    if (apiInstance) {
      await apiInstance.retryQueue();
      setQueuedEvents(apiInstance.getQueuedEvents());
    }
  };

  return {
    referralCode: referralData?.code || null,
    referralData,
    hasReferral: !!referralData,
    visitorId: apiInstance?.getVisitorId() || "",
    sessionId: apiInstance?.getSessionId() || "",
    projectId: apiInstance?.getProjectId() || "",
    isTracking,
    queuedEvents,
    trackConversion,
    clearReferral,
    retryQueue,
    getConfig: () => apiInstance?.getConfig(),
  };
}
