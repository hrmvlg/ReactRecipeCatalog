import IngredientsItem from "./IngredientsItem"

export default function IngredientsList({ ingredients }) {

    return (
        <ul className="ingredients__list">
            {
                ingredients.map((item, index) => (<IngredientsItem key={index} name={item} />))
            }
        </ul>
    )
}