
import HeaderComponent from './Componenten/HeaderComponent';
import './Layout.css';

export default function Layout({ children }) {
    return (
        <>
            <div className="layout-header-wrapper">
                <HeaderComponent />
            </div>
            <main className="layout-main">
                {children}
            </main>
        </>
    );
}
