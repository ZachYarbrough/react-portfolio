import React, { useEffect } from 'react';

const Footer = () => {
    return (
        <div className='content d-flex justify-content-between'>
            <p className='text-muted mt-20'>© 2021 Zach Yarbrough. All Rights Reserved.</p>
            <ul className='mt-15 font-size-18 text-muted'>
                    <a className='mr-5 text-muted' data-toggle="tooltip" data-title="Github" href='#'>
                        <i className='fa-brands fa-github-square'></i>
                    </a>
                    <a className='mr-5 text-muted' data-toggle="tooltip" data-title="LinkedIn" href='#'>
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a className='mr-5 text-muted' data-toggle="tooltip" data-title="Email" href='#'>
                        <i className='fa fa-envelope-square'></i>
                    </a>
            </ul>
        </div>
    );
}

export default Footer;