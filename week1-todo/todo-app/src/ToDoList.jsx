import {useState} from "react";
import './ToDoList.css'

export default function ToDoList() {
    function ToDoList() {
        const [count, setCount] = useState(0)
    }

    return (
        <>
            <h1 style={{textAlign: "left"}}>My most excellent wonderful To-Do </h1>
            <ul style={{textSize: 'left'}}>
                <li>Get lunch</li>
                <li>3D model some physical stuff</li>
                <li>Go to work</li>
                <li>Pick up tiny person</li>
            </ul>
        </>
    )

}