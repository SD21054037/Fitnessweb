
import './HeaderComponent.css';
function HeaderComponent() {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <img src="/logo.png" alt="Fitness & Education Logo" />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#muscles">Spieren</a></li>
                    <li><a href="#exercises">Oefeningen</a></li>
                    <li><a href="#calculator">Calorie Calculator</a></li>
                </ul>
            </nav>
            <div className="user-interactions">
                <a href="#login" className="button">Login</a>
                <a href="#start-training" className="button button-highlight">Start Training</a>
            </div>
        </header>
    );
}

export default HeaderComponent;
