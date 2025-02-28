
import './Homepagina.css';
import HeaderComponent from '../Componenten/HeaderComponent';

const Homepagina = () => {
    return (
        <div className="homepagina">
                <HeaderComponent />
            <div className="spacer layer1"></div>
            <main className = 'main-content'>
            
            </main>
            <div className="spacer layer1 flip"></div>
            <footer>
            </footer>

        </div>
    );
};

export default Homepagina;
