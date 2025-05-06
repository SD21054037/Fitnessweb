
import './Homepagina.css';
import Footer from '../Componenten/Footer';
import HeroSection from '../Componenten/HeroSection';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import MusclePreview from '../Componenten/MusclePreview';


const Homepagina = () => {
    const navigate = useNavigate();
   
    const benefits = [
        {
            icon: "🧬",
            title: "Supports Disease Prevention",
            text: "Muscle mass helps regulate inflammation and has been linked to better cancer outcomes and metabolic health."
        },
        {
            icon: "🦴",
            title: "Protects As You Age",
            text: "Maintaining muscle reduces the risk of falls, frailty, and bone loss — keeping you independent for longer."
        },
        {
            icon: "❤️",
            title: "Boosts Your Whole Body",
            text: "Muscles improve circulation, blood sugar regulation, posture, energy levels, and mental health."
        }
    ];



    const kaartVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };

    const kaartFade = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };


   

    return (
        <div className="homepagina">

            <HeroSection />

            <main className="main-content">

                    {/*<motion.div*/}
                    {/*    className="Introductie"*/}
                    {/*    initial={{ opacity: 0, y: 40 }}*/}
                    {/*    whileInView={{ opacity: 1, y: 0 }}*/}
                    {/*    viewport={{ once: true, amount: 0.3 }}*/}
                    {/*    transition={{ duration: 0.6, delay: 0.3 }}*/}
                    {/*>*/}

       
                   
                    {/*    <h3>The Muscular System</h3>*/}
                    {/*    <p>*/}
                    {/*        The muscular system is essential for everything from movement to posture and even body temperature.*/}
                    {/*        Your body has over <strong>600 muscles</strong>, each working together to support strength, flexibility, and control.*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        There are <strong>three types of muscles</strong>:*/}
                    {/*    </p>*/}
                    {/*        <ul>*/}
                    {/*            <li><strong>Skeletal muscles</strong> – responsible for voluntary movement</li>*/}
                    {/*            <li><strong>Cardiac muscle</strong> – found only in the heart</li>*/}
                    {/*            <li><strong>Smooth muscles</strong> – found in organs and blood vessels, working involuntarily</li>*/}
                    {/*        </ul>*/}
                    {/*    <p>*/}
                    {/*        Understanding how your muscles work can help improve your training, prevent injuries, and boost your overall health.*/}
                    {/*    </p>*/}
                        
                    {/*</motion.div>*/}
              
                <section className="spiergroepen">
                    <h2>Explore Muscle Groups</h2>
                    <div className="spiergroep-grid">
                        {[
                            { name: 'Chest', model: '/chest.glb' },
                            { name: 'Back', model: '/back.glb' },
                            { name: 'Legs', model: '/legs.glb' },
                            { name: 'Schoulders', model: '/schoulders.glb' },
                            { name: 'Arms', model: '/arms.glb' },
                            { name: 'Core', model: '/core.glb' }
                        ].map((group, index) => (
                            <motion.div
                                key={group.name}
                                className="spiergroep-card"
                                variants={kaartVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => navigate(`/spiergroep/${group.name.toLowerCase()}`)}
                            >
                                <MusclePreview
                                    modelPath={group.model}
                                    scale={group.scale}
                                    position={group.position}
                                />
                                <h3>{group.name}</h3>
                            </motion.div>
                        ))}

                    </div>
                </section>

                <section className="spieren-uitleg">
                    <h2>The Health Benefits of Muscle</h2>
                    <div className="info-kaarten">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="kaart"
                                variants={kaartFade}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <span className="icoon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}

                    </div>
                </section>
                <section className="call-to-action">
                    <h2>Ready to Take the Next Step?</h2>
                    <p>Start learning, training, and improving today. Your muscles will thank you.</p>
                    <button onClick={() => navigate('/muscles')}
                    className="cta-button">Explore Muscle Groups</button>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Homepagina;
