import CategoriesItem from './CategoryItem';

export default function CategoriesList({ catalog }) {


    return (
        <ul className="categories categories-list">
            {
                catalog.map(el => (
                    <CategoriesItem
                        key={el.idCategory}
                        id={el.idCategory}
                        name={el.strCategory}
                        img={el.strCategoryThumb}
                        description={el.strCategoryDescription}
                    />
                ))
            }
        </ul>
    )
}