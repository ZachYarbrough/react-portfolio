import React from 'react';
import FadeIn from 'react-fade-in';

const Contact = () => {
    return (
        <FadeIn className='content'>
            <h2 className='font-size-24 font-weight-bold border-bottom'>Contact Me</h2>
            <div className='d-flex justify-content-between'>
                <div>
                    <p className='font-size-18 border-bottom'>Social Media Links</p>
                    <div className='d-md-flex d-none justify-content-between'>
                        <button href='https://github.com/ZachYarbrough' target='_' className='btn btn-primary font-weight-bold mr-5' aria-label='github'>
                            <i className='fa-brands fa-github'></i>
                        </button>
                        <button href='https://www.linkedin.com/in/zachary-yarbrough-7518351a2/' target='_' className='btn btn-primary font-weight-bold mr-5' aria-label='linkedin'>
                            <i className='fa-brands fa-linkedin'></i>
                        </button>
                        <button href='mailto:zachyarbro@gmail.com' target='_' className='btn btn-primary font-weight-bold mr-5' aria-label='email'>
                            <i className='fa-regular fa-envelope'></i>
                        </button>
                    </div>
                </div>
                <form action="..." method="..." class="w-500 card mw-full">
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" placeholder="name" required="required" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="email" placeholder="email" required="required" />
                    </div>
                    <div class="form-group">
                        <textarea type="text" class="form-control" id="message" placeholder="message" required="required" />
                    </div>
                    <input class="btn btn-primary" type="submit" value="Send Message" />
                </form>
            </div>
        </FadeIn>
    );
}

export default Contact;