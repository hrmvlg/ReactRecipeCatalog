import CategoriesItem from './CategoryItem';
import { useLocation } from 'react-router-dom';

export default function CategoriesList({ catalog }) {

    const { pathname } = useLocation();

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
                        path={pathname}
                    />
                ))
            }
        </ul>
    )
}