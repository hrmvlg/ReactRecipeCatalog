export default function Header() {

    return (
        <nav className=" yellow darken-2">
            <div className="nav-wrapper">
                <a
                    className="brand-logo left"
                    href="https://github.com/hrmvlg/ReactRecipeCatalog"
                >
                    React Recipe Catalog
                </a>
                <ul id="nav-mobile" className="right">
                    <li>
                        <a href="">GitHub Repository</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}