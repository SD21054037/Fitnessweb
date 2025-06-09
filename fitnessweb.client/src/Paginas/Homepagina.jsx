
import './Homepagina.css';

import HeroSection from '../Componenten/HeroSection';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { useMuscle } from '../hooks/MuscleContext';
import MusclePreview from '../Componenten/MusclePreview';
import muscleGroups from '../data/muscleGroupsData';


const Homepagina = () => {
    const navigate = useNavigate();
    const contextMuscle = useMuscle();
   
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

                  
              
                <section className="spiergroepen">
                    <h2>Explore Muscle Groups</h2>
                    <div className="spiergroep-grid">
                        {[
                            { name: 'Chest', model: '/chest.glb', position: [0, -1.5, 0] },
                            { name: 'Back', model: '/back.glb', position: [0, -1.4, 0] },
                            { name: 'Legs', model: '/legs.glb', position: [0, -0.5, 0], scale: 0.7 },
                            { name: 'Schoulders', model: '/schoulders.glb', position: [0, -1.5, 0] },
                            { name: 'Arms', model: '/arms.glb', position: [0, -1.2, 0] },
                            { name: 'Core', model: '/core.glb', position: [0, -1.4, 0] }
                        ].map((group, index) => (
                            <motion.div
                                key={group.name}
                                className="spiergroep-card"
                                variants={kaartVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => {
                                    const clickedName = group.name;
                                 
                                   
                                        const [groepNaam] = clickedName;
                                        
                                        contextMuscle.selectMuscleGroup(groepNaam);
                                        navigate('/spierpagina');
                                    }
                                }
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
            
        </div>
    );
};

export default Homepagina;
