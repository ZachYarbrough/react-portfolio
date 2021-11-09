import React from 'react';

const StickyAlerts = () => {

    return (
        <div className="sticky-alerts z-40">
            <div className="alert text-wrap" role="alert" id="precompiled-alert-resume">
                    <h4 className="alert-heading">Resume Downloaded</h4>
                    <p>You have sucessfully downloaded my resume.</p>
                </div>
        </div>
    );
}

export default StickyAlerts;