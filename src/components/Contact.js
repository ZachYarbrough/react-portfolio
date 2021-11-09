import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className='font-size-24 font-weight-bold border-bottom'>Contact Me</h2>

            <div className='d-md-flex d-none justify-content-between'>
                <a href='https://github.com/ZachYarbrough' target='_' className='btn btn-primary font-weight-bold'>
                    <i className='fa-brands fa-github mr-5'></i>
                    <span>@ZachYarbrough</span>
                </a>
                <a href='https://www.linkedin.com/in/zachary-yarbrough-7518351a2/' target='_' className='btn btn-primary font-weight-bold'>
                    <i className='fa-brands fa-linkedin mr-5'></i>
                    <span>@ZachYarbrough</span>
                </a>
                <a href='mailto:zachyarbro@gmail.com' target='_' className='btn btn-primary font-weight-bold'>
                    <i className='fa-regular fa-envelope mr-5'></i>
                    <span>zachyarbro@gmail.com</span>
                </a>
            </div>

            <div className='d-md-none d-flex flex-column'>
                <div className='mt-20 mb-10'>
                    <a href='https://github.com/ZachYarbrough' target='_' className='btn btn-block btn-primary font-weight-bold'>
                        <i className='fa-brands fa-github mr-5'></i>
                        <span>@ZachYarbrough</span>
                    </a>
                </div>
                <div className='mt-20 mb-10'>
                    <a href='https://www.linkedin.com/in/zachary-yarbrough-7518351a2/' target='_' className='btn btn-block btn-primary font-weight-bold'>
                        <i className='fa-brands fa-linkedin mr-5'></i>
                        <span>@ZachYarbrough</span>
                    </a>
                </div>
                <div className='mt-20 mb-10'>
                    <a href='mailto:zachyarbro@gmail.com' target='_' className='btn btn-block btn-primary font-weight-bold'>
                        <i className='fa-regular fa-envelope mr-5'></i>
                        <span>@ZachYarbrough</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;