import { useEffect, useState } from 'react';
import { getAllCategories } from '../api/api';
import Preloader from './Preloader';
import CategoriesList from './Categories/CategoriesList';
import Search from './Search/Search';
import { useSearchParams } from 'react-router-dom';

export default function Home() {

    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        setSearchParams({ search: str });
    }

    useEffect(() => {
        getAllCategories()
            .then((data) => {
                setCatalog(data.categories);
                setFilteredCatalog(data.categories.filter((item) =>
                    item.strCategory
                        .toLowerCase()
                        .includes(searchParams.get("search"))
                ));
                setLoading(false)
            });
    }, [])

    return (
        <div className="content">
            <Search cb={handleSearch} />
            {loading ? (
                <Preloader />
            ) : (
                <CategoriesList catalog={filteredCatalog} />
            )}
        </div>
    )
}