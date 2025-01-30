/* eslint-disable react/prop-types */
import MealItem from "./MealItem";

export default function MealsByCategoryList({ meals }) {
    return (
        <ul className="categories categories-list">
            {
                meals.map(el => (
                    <MealItem
                        key={el.idMeal}
                        id={el.idMeal}
                        name={el.strMeal}
                        img={el.strMealThumb}
                    />
                ))
            }
        </ul>
    )
}