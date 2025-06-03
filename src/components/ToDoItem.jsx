import { useState } from "react";

function ToDoItem(props) {
  const { items, updateItem , deleteItem} = props;
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

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

  }

  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          {editIndex === index ? (
            <>
              <input type="text" value={name} onChange={handleChange} />
              <button type="button" onClick={() => handleSave(index)}>
                Save
              </button>
            </>
          ) : (
            <div>{item}
              <button type="button" onClick={() => handleClick(index)}>
                Edit
              </button>
              <button onClick={()=>handleDelete(index)}>Delete</button>
              <button onClick={()=>handleCompleted(index)}>Mark As Completed</button>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export default ToDoItem;
