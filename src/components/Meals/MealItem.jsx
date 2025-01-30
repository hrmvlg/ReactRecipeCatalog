import { Link } from "react-router-dom";

export default function MealItem({ id, name, img }) {
    return (
        <li className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={img} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    <Link to={`/meal/${id}`}>{name}</Link>
                </span>
            </div>
        </li>
    )
}