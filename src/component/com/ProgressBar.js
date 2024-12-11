import React from 'react';
import '../css/ProgressBar.css';

const ProgressBar = ({ currentStep }) => {
    const steps = ['Work Status', 'UG Details', 'PG Details', 'SSLC Details', 'HSC Details', 'Explain', 'Personal Survey', 'Employment Survey', 'Video Upload'];

    return (
        <div className="progress-container">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`progress-circle ${index <= currentStep ? 'active' : ''}`}
                    ></div>
                    {index < steps.length - 1 && (
                        <div className={`progress-line ${index < currentStep ? 'active' : ''}`} ></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProgressBar;
