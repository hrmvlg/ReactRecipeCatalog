/* eslint-disable react/prop-types */
import MealItem from "./MealItem";
import { useLocation } from "react-router-dom";

export default function MealsByCategoryList({ meals }) {

    const { pathname } = useLocation();

    return (
        <ul className="categories categories-list">
            {
                meals.map(el => (
                    <MealItem
                        key={el.idMeal}
                        mealId={el.idMeal}
                        name={el.strMeal}
                        img={el.strMealThumb}
                        path={pathname}
                    />
                ))
            }
        </ul>
    )
}