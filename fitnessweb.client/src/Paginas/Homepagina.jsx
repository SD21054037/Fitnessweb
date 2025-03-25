import React from 'react';
import './Homepagina.css';
import CubeModel from '../Componenten/CubeModel';
import Footer from '../Componenten/Footer';
import Musclemodel from '../Componenten/Model';
import LineModel from '../Componenten/LineModel';

const Homepagina = () => {
    return (
        <div className="homepagina">
            <main className="main-content">

               
                <div className="welkom">
                    <h2>Welcome to Fitness & Education!</h2>
                    <p>
                        This website is designed to help you learn more about the human body and how to take care of it.
                        
                    </p>
                </div>
                <div className="midsection"> 
                <div className="model">
                    <p>Select a muscle to learn more about it.</p>
                    <Musclemodel />
                </div>

                <div className="Introductie">
                    <h3>the Muscular System</h3>
                    <p>
                        The muscular system is essential for everything from movement to posture and even body temperature.
                        Your body has over <strong>600 muscles</strong>, each working together to support strength, flexibility, and control.
                    </p>
                    <p>
                        There are <strong>three types of muscles</strong>:
                        <ul>
                            <li><strong>Skeletal muscles</strong> – responsible for voluntary movement</li>
                            <li><strong>Cardiac muscle</strong> – found only in the heart</li>
                            <li><strong>Smooth muscles</strong> – found in organs and blood vessels, working involuntarily</li>
                        </ul>
                    </p>
                    <p>
                        Understanding how your muscles work can help improve your training, prevent injuries, and boost your overall health.
                    </p>
                </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Homepagina;
