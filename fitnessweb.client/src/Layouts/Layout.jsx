
import HeaderComponent from '../Componenten/Headers/HeaderComponent';

import './Layout.css';
import Footer from '../Componenten/Footers/Footer';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <div className="layout-header-wrapper">
                <HeaderComponent />
            </div>
            <main className="layout-main">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
            
        </div>
    );
}
