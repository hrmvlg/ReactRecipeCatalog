import IngredientsItem from "./IngredientsItem"

export default function MeasuresList({ measures }) {
    return (
        <ul className="measures__list">
            {
                measures.map((item, index) => (<IngredientsItem key={index} name={item} />))
            }
        </ul>
    )
}