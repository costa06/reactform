import React from 'react';
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";

const Contentcontact = () => {
    return (
        <>
        <div className='Container'>
        <div className="title-h1">
            <h1>Nos <br/>coordonnées</h1>    
        </div>
        <div className="contact-address">
            <div className="col-lg-4 col-md-6 col-12 block-address">
                <div className="rn-address">
                    <div className="icon">
                        <FiHeadphones />
                    </div>
                    <div className="inner">
                        <h4 className="title">Numéro de téléphone</h4>
                        <p><a href="tel:+216 20 973 072">+216 20 973 072</a></p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 block-address">
                <div className="rn-address">
                    <div className="icon">
                        <FiMail />
                    </div>
                    <div className="inner">
                        <h4 className="title">Adresse e-mail</h4>
                        <p><a href="mailto:admin@gmail.com">tarektouati50@gmail.com</a></p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 block-address">
                <div className="rn-address">
                    <div className="icon">
                        <FiMapPin />
                    </div>
                    <div className="inner">
                        <h4 className="title">Notre addresse</h4>
                        <p>Slimen kehya 8136 manouba tunis</p>
                    </div>
                </div>
            </div>    
            </div>
            </div>
        </>
    );
}

export default Contentcontact;
