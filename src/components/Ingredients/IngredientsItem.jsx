export default function IngredientsItem({ name }) {

    return (
        <>
            {
                name !== " " ?
                    (<li className="ingredients__item" >
                        {name}
                    </li>
                    ) : ""
            }
        </>

    )
}