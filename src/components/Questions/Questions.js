import React from 'react';

const Questions = () => {
    return (
        <div className='mt-5 container'>
            <h2>Questions:</h2>
            <div>
                <h3>How does react work?</h3>
                <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p>
            </div>
            <div>
                <h3>What is the difference between props and state in React component?</h3>
                <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div>
                <h3>UseEffect without use load api another work item?</h3>
                <p>Fetching data
                    Reading from local storage
                    Registering and deregistered event listeners.
                    With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you'll eventually learn everything makes a lot of sense.</p>
            </div>
        </div>
    );
};

export default Questions;