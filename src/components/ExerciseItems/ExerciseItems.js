
import React from 'react';
import './ExerciseItems.css'
import { Button } from 'react-bootstrap';

const ExerciseItems = (props) => {
    const { name, img, age, time } = props.exercise;
    return (
        <div className='card' style={{ backgroundColor: "white" }}>
            <div className='inner-card my-3'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>For Age: {age}</p>
                <p>Time: {time}</p>
                <Button className='bg-primary mb-2 px-5 w-100'>Add to list</Button>
            </div>
        </div>
    );
};

export default ExerciseItems;