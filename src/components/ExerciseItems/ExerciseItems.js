
import React from 'react';
import './ExerciseItems.css'
import { Button } from 'react-bootstrap';

const ExerciseItems = (props) => {
    const { exercise, handleAddToCart } = props;
    const { name, img, age, time } = exercise;

    return (
        <div className='card' style={{ backgroundColor: "white" }}>
            <div className='inner-card my-3'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>For Age: {age}</p>
                <p>Time: {time}s</p>
                <Button onClick={() => handleAddToCart(exercise)} className='bg-primary mb-2 px-5 w-100'>Add to list</Button>
            </div>
        </div >
    );
};

export default ExerciseItems;