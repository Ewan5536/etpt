// import {Link} from "react-router-dom"


// function Contact() {
//     return (
//       <div>
  
  
  
//       </div>
//     );
//   }
//     export default Contact ;

import React from 'react';

// formspree.io

export default function Contact() {
    return (
        <div className='contact'>
            <h3 className='title'>Contact Us</h3>
            <div className='contact-search-input'>
                <form action="https://formspree.io/ewan5536@gmail.com" method="POST">
                    <div><p/>
                        <label for="full-name">Full Name</label><br />
                        <input
                            type='text'
                            name='full-name'
                            placeholder='Required'
                            className='contact-search-input-box'
                            required
                        />
                    </div><p/>
                    <div>
                        <label for="email">Email Address</label><br />
                        <input
                            type='email'
                            name='email'
                            placeholder='Required'
                            className='contact-search-input-box'
                            required
                        />
                    </div><p/>
                    <div>
                        <label for="subject">Subject</label><br />
                        <input
                            type='text'
                            name='subject'
                            placeholder='Required'
                            className='contact-search-input-box'
                            required
                        />
                    </div><p/>
                    <div>
                        <label for="message">Message</label><br />
                        <textarea
                            name='message'
                            placeholder='Your message goes here'
                            rows='10'
                            className='contact-search-input-box contact-search-input-message'
                        />
                    </div><p/>
                    <button type="submit" className='contact-search-input-btn btn-default'>Submit</button>
                </form>
            </div>
        </div>
    )
}
