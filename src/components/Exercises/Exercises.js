import React, { useEffect, useState } from 'react';
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
                <h2>Exercise Details</h2>
            </div>

        </div>
    );
};

export default Exercises;
