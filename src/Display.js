import React from "react";

//data received here as props
const Display = (props) => {
    // props = {
    //     displayData : {
    // firstName: 'alina',
    // lastName: 'joe',
    // age: 20,
    // city: 'pune'
    //     }
    // }

    console.log(props);//is object

    const { displayData } = props;//destructuring of objects //const displayData = props.displayData;
    console.log(displayData);

    return (
        <div>
            <p>My name is {displayData.firstName} and age is {displayData.age}, lives in {displayData.city}.</p>
        </div>
    )
}

export default Display;

// destructuring of object
// const user = {
//     id: 20,
//     verified: true
// }

// const {id, verified} = user;
// console.log(id);
// console.log(verified);