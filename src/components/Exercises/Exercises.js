import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import ExerciseItems from '../ExerciseItems/ExerciseItems';
import Questions from '../Questions/Questions';
import './Exercises.css'

const Exercises = () => {
    const [exercisesLists, setExercisesLists] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercisesLists(data))
    }, []);

    const handleAddToCart = (exercise) => {
        console.log(exercise);
        const newCart = [...cart, exercise];
        setCart(newCart);
    }
    console.log(cart.length);

    return (
        <div className='exercise-container container my-5'>
            <div className='exercise-course-container container'>
                {
                    exercisesLists.map(exercise => <ExerciseItems
                        key={exercise.id}
                        exercise={exercise}
                        handleAddToCart={handleAddToCart}
                    ></ExerciseItems>)
                }
            </div>

            <div className='exercise-details-container container'>
                <Details cart={cart}></Details>
            </div>
            <Questions></Questions>

        </div>
    );
};

export default Exercises;
