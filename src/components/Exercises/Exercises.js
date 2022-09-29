import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import ExerciseItems from '../ExerciseItems/ExerciseItems';
import './Exercises.css'

const Exercises = () => {
    const [exercisesLists, setExercisesLists] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercisesLists(data))
    }, [])

    return (
        <div className='exercise-container container my-5'>
            <div className='exercise-course-container container'>
                {
                    exercisesLists.map(exercise => <ExerciseItems
                        key={exercise.id}
                        exercise={exercise}

                    ></ExerciseItems>)
                }
            </div>
            
            <div className='exercise-details-container container'>
                <Details></Details>
            </div>

        </div>
    );
};

export default Exercises;
