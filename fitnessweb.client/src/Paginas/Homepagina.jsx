
import './Homepagina.css';
import HeaderComponent from '../Componenten/HeaderComponent';
import Cubemodel from '../Componenten/CubeModel';
import LineModel from '../Componenten/LineModel';

const Homepagina = () => {
    return (
        <div className="homepagina">
                <HeaderComponent />
            <div className="spacer layer1"></div>
            <main className='main-content'>
                <div className='model'>
                    <Cubemodel/>
                </div>
                <div className='model-uitleg'>

                </div>
            </main>
            <div className="spacer layer1 flip"></div>
            <footer>
            </footer>

        </div>
    );
};

export default Homepagina;
