import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

interface ScrollLinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
}

export const ScrollLink = ({ to, className, children }: ScrollLinkProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        if (to.includes('#')) {
            const [, hash] = to.split('#');
            const isHomePage = location.pathname === '/' || location.pathname === '/home';
            
            const scrollToElement = () => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Actualizar la URL sin causar recarga
                    window.history.pushState({}, '', `/${hash ? '#' + hash : ''}`);
                }
            };

            if (!isHomePage) {
                // Si no estamos en la página principal, primero navegamos y luego hacemos scroll
                navigate('/home', { replace: true });
                // Esperamos a que la navegación se complete y los componentes se monten
                setTimeout(scrollToElement, 300);
            } else {
                // Si ya estamos en la página principal, solo hacemos scroll
                scrollToElement();
            }
        }
    }, [to, location.pathname, navigate]);

    return (
        <Link to={to} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
};