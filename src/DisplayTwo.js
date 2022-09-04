import React, { useState } from 'react';

const DisplayTwo = () => {
    //state variable, method to update it
    const [firstName, setFirstName] = useState('alina');
    const [lastName, setLastName] = useState('joe');
    const [age, setAge] = useState(20);

    const [person, setPerson] = useState({
        name: 'alex',
        designation: 'developer'
    });

    const [arr, setArr] = useState([90, 79, 78]);

    const [employeeData, setEmployeeData] = useState([{
        name: 'harry',
        age: 25,
        designation: 'developer'
    }, {
        name: 'alina',
        age: 20,
        designation: 'tester'
    }, {
        name: 'alex',
        age: 24,
        designation: 'HR'
    }]);

    return (
        <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{age}</p>
            <p>Name: {person.name}</p>
            <p>Designation: {person.designation}</p>
            <p>{arr.map(ele => {
                return (<p>{ele}</p>)
            })}</p>

            <h4>Displaying array of object</h4>
            <p>
                {employeeData.map((ele) => {
                    return (
                        <div>
                            <p>{ele.name}</p>
                            <p>{ele.designation}</p>
                        </div>
                    )
                })}
            </p>

        </div>
    )
}

export default DisplayTwo;


// function add() {
//     var x = 20;
//     console.log(x);
//     function subtract() {
//         console.log(x);
//     }
// }


// arr.map(ele => {
//     return ele
// })