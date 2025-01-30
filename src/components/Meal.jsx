import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getDetailsById } from "../api/api";
import Preloader from "./Preloader";
import IngredientsList from "./Ingredients/IngredientsList";
import MeasuresList from "./Ingredients/MeasuresList";

export default function Meal() {

    const { mealId } = useParams();
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        getDetailsById(mealId)
            .then((data) => {
                if (data.meals && data.meals.length > 0) {
                    setMeal(data.meals[0]);
                }
                else {
                    setMeal(null);
                }
            })
    }, [])

    if (!meal) {
        return <Preloader />;
    }

    const mealIngredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) mealIngredients.push(ingredient)
    }

    const mealMeasures = [];
    for (let i = 1; i <= 20; i++) {
        const measure = meal[`strMeasure${i}`];
        if (measure) mealMeasures.push(measure);
    }

    const {
        strMeal,
        strInstructions,
        strMealThumb,
        strYoutube,
        strSource,
    } = meal;

    const vidUrlToEmbed = (videoUrl) => {
        console.log(videoUrl, videoUrl.replace("watch?v=", "embed/"));
        return (videoUrl.replace("watch?v=", "embed/"));
    }

    return (

        <div className="content meal">
            <h1 className="meal__title">{strMeal}</h1>
            <div className="meal__img-and-ingredients">
                <div className="meal__image-wrapper">
                    <img
                        src={strMealThumb}
                        alt={`Photo of meal named ${strMeal}`}
                        className="meal__image"
                        height={500}
                        width={500}
                    />
                </div>
                <div className="meal__ingredients">
                    <h2 className="meal__ingredients-title">Ingredients</h2>
                    <IngredientsList ingredients={mealIngredients} />
                    <MeasuresList measures={mealMeasures} />
                </div>
            </div>

            <div className="meal__information">
                <h2 className="meal__instructions-title">Instructions</h2>
                <div className="meal__instructions">
                    {strInstructions}
                </div>
            </div>
            {
                strSource ?
                    <div className="meal__source">
                        <a className="waves-effect waves-light btn orange darken-4" href={strSource}> Recipe source </a>
                    </div> : ""
            }
            {
                strYoutube ?
                    <div className="meal__vid">
                        <div className="video-container">
                            <iframe width="560" height="315" src={vidUrlToEmbed(strYoutube)} />
                        </div>
                    </div> : ""
            }

        </div >
    )
}