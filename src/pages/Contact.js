import React from 'react';
import ContactForm from '../component/formulaire/ContactForm';
import Contentcontact from '../component/formulaire/ContentContact';
import GoogleMap from '../component/formulaire/GoogleMap';

const Contact = () => {
    return (
        <>
            <div className="main-content">
                <div className="contact-block">
                    <div className="row">
                        <Contentcontact/>
                        <div className='Container'>
                            <div className="col-lg-12 coords_contact">
                                <div className='col-md-7 formulaire'>
                                    <ContactForm/>
                                </div>
                                <div className='col-md-5 googleMap'>
                                    <GoogleMap/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
