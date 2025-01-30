import { useEffect, useState } from 'react';
import { getAllCategories } from '../api/api';
import Preloader from './Preloader';
import CategoriesList from './Categories/CategoriesList';

export default function Home() {

    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllCategories()
            .then((data) => {
                setCatalog(data.categories);
                setLoading(false)
            });
    }, [])

    return (
        <div className="content">
            {loading ? (
                <Preloader />
            ) : (
                <CategoriesList catalog={catalog} />
            )}
        </div>
    )
}