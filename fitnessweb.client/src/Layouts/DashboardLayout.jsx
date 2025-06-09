import Sidebar from '../Componenten/Sidebar';
import HeaderComponent from '../Componenten/Headers/HeaderComponent';
import Footer from '../Componenten/Footers/Footer';

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
