
import React from 'react';
import './ExerciseItems.css'

const ExerciseItems = (props) => {
    const { name, img, age, time } = props.exercise;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>For Age: {age}</p>
            <p>Time: {time}</p>
        </div>
    );
};

export default ExerciseItems;