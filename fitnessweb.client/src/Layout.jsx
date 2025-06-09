
import HeaderComponent from './Componenten/HeaderComponent';

import './Layout.css';
import Footer from './Componenten/Footer';

export default function Layout({ children }) {
    return (
        <>
            <div className="layout-header-wrapper">
                <HeaderComponent />
            </div>
            <main className="layout-main">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
            
        </>
    );
}
