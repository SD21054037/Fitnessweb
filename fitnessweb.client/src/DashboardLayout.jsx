import Sidebar from './Componenten/Sidebar';
import HeaderComponent from './Componenten/HeaderComponent';
import Footer from './Componenten/Footer';

import './DashboardLayout.css';



export default function DashboardLayout({ children }) {
    return (
        <>
            <div className="Dashboardlayout-header-wrapper">
                <HeaderComponent />
            </div>
            <main className="Dashboardlayout-main">
                <Sidebar />
                {children}
            </main>
            <footer className="Dashboardlayout-footer">
                <Footer />
            </footer>

        </>
    );
}
