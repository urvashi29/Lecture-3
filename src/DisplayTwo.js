import React, { useState } from 'react';

const DisplayTwo = () => {
    //[state variable, method to update it]
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

    const handleUpdate = () => {
        setFirstName('harry');
        setLastName('j');
        setAge(25);

        setPerson({
            ...person, name: 'harry'
        });

        // setArr([...arr, 100]);

        //to change particular value of an array of number
        const updatedArray = [...arr];
        updatedArray[1] = 102;
        setArr(updatedArray);

        //to change particular value of an array of object
        const updateArrOfObj = [...employeeData];
        updateArrOfObj[0].age = 22;
        setEmployeeData(updateArrOfObj);

    }

    return (
        <div>
            <h3>Displayed Data</h3>
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
                            <p>{ele.age}</p>
                            <p>{ele.designation}</p>
                        </div>
                    )
                })}
            </p>

            <h4>Updation</h4>
            {/* creating a callback function  */}
            <button onClick={() => setFirstName('harry')}>Update String</button>
            <button onClick={() => setLastName('j')}>Update Str</button>
            <button onClick={() => setAge(25)}>Update Number</button>

            {/* using spread operator */}
            <button onClick={() => setPerson({
                ...person, name: 'harry'
            })}>Update Object</button>

            <button onClick={() => setArr([...arr, 100])}>Update Array</button>

            <h4>Updating all one one click</h4>
            <button onClick={handleUpdate}>Update</button>

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



// {
//     firstName: 'alina',
//     age: 20
// }

//update
// {
//     firstName: 'harry',
//     age: 20
// }

//replace
// {
// name: 'harry'
// }


//in ES6
//spread operator (...)

// let objTwo = {
//     A: 20,
//     B: 30
// }
// let obj = objTwo; //shallow copy
// obj.A = 90

// let obj = {...objTwo, Z: 100};//deep copy
// obj.A = 90
// obj ={
//     A: 90,
//     B: 30,
//     Z: 100
// }

// let objThree = obj;
// obj.A = 30;


// objTwo = {
//     A: 20,
//     B: 30
// }

// let one = [90, 870, 79];
// let two = [...one, 100, 89];