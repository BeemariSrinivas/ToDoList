import ToDoItem from "./ToDoItem";
import { useState } from "react";


function ToDoList(){

    const [itemName,setItemName] = useState("");
    const [itemList, setItemList] = useState([]);

    function handleChange(event){
        const {value} = event.target;
        setItemName(value);
    }

    function handelSubmit(event){
        event.preventDefault();
    }

    function handelClick(event){
        setItemList((prevValue)=>{
            return [...prevValue,itemName];
        });
    }

    return(
        <>
            <form itemID="form" onSubmit={handelSubmit}>
                <label>Enter Item : </label>
                <input onChange={handleChange} className="item" value={itemName} type="text"></input><br/>
                <button onClick={handelClick}>Submit</button>
            </form>
            <ToDoItem items = {itemList}/>
        </>
    );
}

export default ToDoList;