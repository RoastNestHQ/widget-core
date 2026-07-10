import { CLASS_NAMES } from '../../../../utils/classNames';
import React from "react";
import "./styles.css";

const ReferralForm: React.FC = () => {
    return (
        <div className={CLASS_NAMES.referral.form}>
            <h3>Referral Program</h3>
            <p>Invite friends and earn rewards!</p>
            {/* Form logic here */}
        </div>
    );
};

export default ReferralForm;
