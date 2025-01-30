import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getMealsByCategory } from "../api/api";
import MealsByCategoryList from "./Meals/MealsByCategoryList";
import Preloader from "./Preloader";

export default function Category() {
    const [mealsByCategory, setMealsByCategory] = useState([]);
    const { category } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMealsByCategory(category)
            .then((data) => {
                setMealsByCategory(data.meals);
                setLoading(!loading);
            })
    }, []);

    return (
        <div className="content">
            {loading ? (
                <Preloader />
            ) : (
                <MealsByCategoryList meals={mealsByCategory} />
            )}
        </div>
    )
}