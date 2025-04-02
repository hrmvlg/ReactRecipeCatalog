import { useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

export default function Header() {

    const { pathname } = useLocation();
    
    return (
        <header>
            <nav className="yellow darken-2">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo left">React Recipe Catalog</a>
                    <ul id="nav-mobile" className="right">
                        <li>
                            <a href="https://github.com/hrmvlg/ReactRecipeCatalog">
                                GitHub Repository
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {
                (pathname === '/') ||
                    pathname === ('/categories/') ||
                    pathname === ('/categories')
                    ? '' : <Breadcrumbs pathname={pathname} />
            }
        </header>
    )
}