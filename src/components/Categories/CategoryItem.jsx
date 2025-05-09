import { Link } from "react-router-dom";
export default function CategoriesItem({ name, img, description, path }) {

    return (
        <li className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img
                    className="activator"
                    alt={`Photo of ${name}`}
                    src={img}
                    width={320}
                    height={200} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    <Link to={`categories/${name}`}>{name}</Link>
                    <i className="material-icons right">more_vert</i>
                </span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>
                <p>{description}</p>
            </div>
        </li>
    )
}