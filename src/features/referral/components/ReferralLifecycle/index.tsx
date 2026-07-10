import { CLASS_NAMES } from '../../../../utils/classNames';
import React from 'react';
import './styles.css';
import { useReferralLifecycle } from '../../hooks/useReferralLifecycle';

export const ReferralLifecycle: React.FC = () => {
  const { stages, isRunning, isComplete, runSimulation, reset, goToStage } = useReferralLifecycle();

  return (
    <div className={CLASS_NAMES.referral.lifecycleContainer}>
      <div className={CLASS_NAMES.referral.lifecycleHeader}>
        <h3 className={CLASS_NAMES.referral.lifecycleTitle}>Referral Lifecycle Simulation</h3>
        <div className={CLASS_NAMES.referral.lifecycleActions}>
          <button 
            className="rrn-lifecycle-btn rrn-lifecycle-btn-secondary" 
            onClick={reset}
            disabled={isRunning}
          >
            Reset
          </button>
          <button 
            className="rrn-lifecycle-btn rrn-lifecycle-btn-primary" 
            onClick={runSimulation}
            disabled={isRunning || isComplete}
          >
            {isRunning ? 'Running...' : 'Run Simulation'}
          </button>
        </div>
      </div>

      <div className={CLASS_NAMES.referral.stagesList}>
        {stages.map((stage, index) => (
          <div 
            key={stage.id} 
            className={`${CLASS_NAMES.referral.stageItem} rrn-stage-${stage.status}`}
            onClick={() => !isRunning && goToStage(index)}
            style={{ cursor: !isRunning ? 'pointer' : 'default' }}
          >
            <div className={CLASS_NAMES.referral.stageConnector} />
            <div className={CLASS_NAMES.referral.stageIndicator} />
            
            <div className={CLASS_NAMES.referral.stageContent}>
              <h4 className={CLASS_NAMES.referral.stageTitle}>Stage {stage.id}: {stage.title}</h4>
              <p className={CLASS_NAMES.referral.stageDesc}>{stage.description}</p>
              
              {/* Stages 1-5 have snippet/code payload */}
              {stage.payload && stage.id < 6 && (
                <pre className={CLASS_NAMES.referral.stageSnippet}>
                  {stage.payload.snippet 
                    ? stage.payload.snippet as string
                    : JSON.stringify(stage.payload, null, 2)}
                </pre>
              )}

              {/* Stage 6 special rendering */}
              {stage.id === 6 && (
                <div className={CLASS_NAMES.referral.splitCards}>
                  <div className={CLASS_NAMES.referral.subcard}>
                    <h4>Roastnest Cloud</h4>
                    <p>Validate / Fraud check / Auto reward</p>
                  </div>
                  <div className={CLASS_NAMES.referral.subcard}>
                    <h4>Self-hosted</h4>
                    <p>Validate / Custom logic / Own database</p>
                  </div>
                </div>
              )}

              {/* Stage 7 special rendering */}
              {stage.id === 7 && (
                <>
                  <div className={CLASS_NAMES.referral.splitCards}>
                    <div className={CLASS_NAMES.referral.subcard}>
                      <h4>Referrer</h4>
                      <p>AYUSH123 (+₹500)</p>
                    </div>
                    <div className={CLASS_NAMES.referral.subcard}>
                      <h4>Referee</h4>
                      <p>New User (+₹500)</p>
                    </div>
                  </div>
                  {stage.status === 'complete' && (
                    <div className={CLASS_NAMES.referral.successBanner}>
                      Referral Complete! AYUSH123 earned ₹500
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
