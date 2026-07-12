import { ReferralEventPayload } from "../components/ReferralWidget/types";
import { ITransport } from "./BaseTransport";

export class SelfHostedTransport implements ITransport {
  private onEvent?: (payload: ReferralEventPayload) => Promise<void> | void;

  constructor(onEvent?: (payload: ReferralEventPayload) => Promise<void> | void) {
    this.onEvent = onEvent;
  }

  async send(payload: ReferralEventPayload): Promise<void> {
    if (this.onEvent) {
      await this.onEvent(payload);
    } else {
      console.warn("Self-hosted transport is missing an onEvent handler.");
    }
  }
}
