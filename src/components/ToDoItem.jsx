import { useState } from "react";
import { GrCompliance } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";

function ToDoItem(props) {
  const { items, updateItem , deleteItem} = props;
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [completed , setComplted] = useState([]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(index) {
    setEditIndex(index);
    setName(items[index]);
  }

  function handleSave(index) {
    if(name===""){
      alert("Empty Values are Invalid");
    }
    else{
      updateItem(index, name);
    setEditIndex(null);
    }
  }

  function handleDelete(index){
    deleteItem(index);
  }

  function handleCompleted(index){
    setComplted(prevItems=>{
      if(prevItems.includes(index)){
        return prevItems.filter((i)=>i!==index)}
        else{
          return[...prevItems,index];
        }
    });
  }

  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          {editIndex === index ? (
            <>
              <input type="text" value={name} onChange={handleChange} />
              <button type="button" onClick={() => handleSave(index)}>
                <FaSave size={20}/>
              </button>
            </>
          ) : (
            <div style={{textDecoration : completed.includes(index)?"line-through":"none"}}>{item}
              <button type="button" onClick={() => handleClick(index)}>
                <FaEdit size={20}/>
              </button>
              <button onClick={()=>handleDelete(index)}><MdDelete size={20}/></button>
              <button onClick={()=>handleCompleted(index)}>{completed.includes(index)?<FaUndo size={20}/>:<GrCompliance size={20}/>}</button>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export default ToDoItem;
