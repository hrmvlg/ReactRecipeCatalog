import { Link } from "react-router-dom";

export default function MealItem({ mealId, name, img }) {
    return (
        <li className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img
                    className="activator"
                    src={img}
                    alt={`Photo of ${name}`}
                    width={320}
                    height={200} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    <Link to={`${mealId}`}>{name}</Link>
                </span>
            </div>
        </li>
    )
}