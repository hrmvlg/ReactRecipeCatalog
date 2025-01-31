import { Link, useLocation } from "react-router-dom"

export default function Breadcrumbs() {

    // const { pathname } = useLocation();
    // const pathnames = pathname.split("/").filter((x) => x)

    return (
        <nav>
            <div className="nav-wrapper">
                <div className="col s12">
                    <Link to="/"></Link>
                </div>
            </div>
        </nav>
    )
}