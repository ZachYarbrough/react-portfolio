import React from 'react';
import FadeIn from 'react-fade-in';

const Footer = () => {
    return (
        <FadeIn className='content'>
            <div className='content d-flex justify-content-between'>
                <p className='text-muted mt-20'>© 2021 Zach Yarbrough. All Rights Reserved.</p>
                <ul className='mt-15 font-size-18 text-muted'>
                    <a href='https://github.com/ZachYarbrough' target='_' className='mr-5 text-muted' data-toggle="tooltip" data-title="Github">
                        <i className='fa-brands fa-github-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/zachary-yarbrough-7518351a2/' target='_' className='mr-5 text-muted' data-toggle="tooltip" data-title="LinkedIn">
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a href='mailto:zachyarbro@gmail.com' target='_' className='mr-5 text-muted' data-toggle="tooltip" data-title="Email">
                        <i className='fa fa-envelope-square'></i>
                    </a>
                </ul>
            </div>
        </FadeIn>
    );
}

export default Footer;