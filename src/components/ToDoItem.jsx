import {useState} from "react";

function ToDoItem (props){
    const itemList= props.items;
    const [name,setName]= useState("");
    const [item,setItemName] = useState("");

    function handleChange(event){
        const {value} = event.target;
        setName(value);
    }

    function handelClick(event){
        const {value} = event.target;
        setItemName(name);
    }


    return <ol>
                {itemList.map(item=>{
                    return(<>
                        <li name={item} onChange={handleChange}>{item}</li>
                        <button onClick={handelClick}>Edit</button>
                    </>)
                }
                )}
            </ol>
}

export default ToDoItem;