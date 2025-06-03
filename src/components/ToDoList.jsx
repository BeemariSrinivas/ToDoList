import ToDoItem from "./ToDoItem";
import { useState } from "react";
import "../index.css";

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
        if(itemName===""){
            alert("Empty Values are invalid");
        }
        else{
            setItemList((prevValue)=>{
            return [...prevValue,itemName];
        });
        setItemName("");
        }
    }

    function updateItem(index, newValue) {
  setItemList(prevList => {
    const newList = [...prevList];
    newList[index] = newValue;
    return newList;
  });
}

    function deleteItem(delIndex){
        const updatedList = itemList;
        const newList = updatedList.filter((item,index)=>index!==delIndex);
        setItemList(newList);
    }


    return(
        <div id="form">
            <form onSubmit={handelSubmit}>
                <div>
                    <label>Enter Item : </label>
                <input onChange={handleChange} className="item" value={itemName} type="text"></input><br/>
                </div>
                <button onClick={handelClick}>Submit</button>
            </form>
            <ToDoItem items = {itemList} updateItem={updateItem} deleteItem={deleteItem}/>
        </div>
    );
}

export default ToDoList;