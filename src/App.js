import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [bcolor, setBcolor] = useState({});
  const handleClick = () => {
    setTodoArr([...todoArr, todoText]);
    setTodoText("");
    setBcolor({ [todoText]: false });
  };
  const removeTodo = (todoValuesInArray) => {
    // let newArr = [...todoArr];
    // newArr.splice(id, 1);
    let newArr = todoArr.filter((data) => data !== todoValuesInArray);
    setTodoArr([...newArr]);
  };
  const completed = (id) => {
    todoArr.map((value) => {
      if (value == id) {
        setBcolor({ ...bcolor, [value]: true });
      }
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleClick}>Add todo</button>
      {todoArr.map((value, index) => (
        <>
          {/* {console.log(value, "value")}
          {console.log(bcolor[value], "bcolor.value")} */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: bcolor[value] ? "green" : ""
            }}
          >
            <li key={index}>{value}</li>
            <button onClick={() => removeTodo(value)}>Delete</button>
            <button onClick={() => completed(value)}>Complete</button>
          </div>
        </>
      ))}
    </div>
  );
}
