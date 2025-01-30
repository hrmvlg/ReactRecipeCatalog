export default function Header() {

    return (
        <nav className=" yellow darken-2">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo left">React Recipe Catalog</a>
                <ul id="nav-mobile" className="right">
                    <li>
                        <a href="">GitHub Repository</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}