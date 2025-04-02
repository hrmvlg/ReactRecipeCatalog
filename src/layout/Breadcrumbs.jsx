import { Link } from "react-router-dom"

export default function Breadcrumbs({ pathname }) {

    const pathnames = pathname.split("/").filter((x) => x);

    return (
        <nav className="orange accent-1">
            <div className="nav-wrapper">
                <div className="col s12">
                    {
                        pathnames.map((item, index) => {
                            let link = pathnames.slice(0, index + 1).join("/");
                            return (
                                <Link to={link === 'categories' ? '/' : link} key={index} className="breadcrumb">
                                    {item === 'categories' ? 'Categories' : item}
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </nav>
    )
}