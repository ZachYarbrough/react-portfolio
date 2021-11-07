import React from 'react';
import FadeIn from 'react-fade-in';
import halfmoon from 'halfmoon';

const Header = () => {
    return (
        <FadeIn className='content'>
            {/* Header */}
            <div className='d-sm-flex d-none'>
                <div>
                    <h1 className='mb-0'>Zach Yarbrough</h1>
                    <a href="assets/zach-yarbrough-resume.pdf" download onClick={() => halfmoon.toastAlert('precompiled-alert-resume', 5000)} className="download-resume badge-group mt-5" role="group" aria-label="...">
                        <span className="badge">Full Stack Developer based in Austin</span>
                        <span className="badge badge-primary">
                            <i className='fa fa-download mr-5'></i>
                            <span>Download Resume</span>
                        </span>
                    </a>
                </div>
                <img src='assets/images/profile-image.jpeg' className="ml-auto mr-20 img-fluid border rounded-circle w-100 h-100" alt="Profile" />
            </div>

            {/* Header - Small */}
            <div className='d-sm-none d-flex flex-column'>
                <div>
                    <h1 className='mb-0'>Zach Yarbrough</h1>
                    <a href="assets/zach-yarbrough-resume.pdf" download onClick={() => halfmoon.toastAlert('precompiled-alert-resume', 5000)} className="download-resume badge-group mt-5" role="group" aria-label="...">
                        <span className="badge">Full Stack Developer based in Austin</span>
                        <span className="badge badge-primary">
                            <i className='fa fa-download mr-5'></i>
                            <span>Download Resume</span>
                        </span>
                    </a>
                </div>
                <img src='assets/images/profile-image.jpeg' className="mx-auto mt-20 mb-0 img-fluid border rounded-circle w-100 h-100" alt="Profile" />
            </div>
        </FadeIn>
    );
}

export default Header;