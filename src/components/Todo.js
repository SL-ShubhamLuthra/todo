import React from "react";
import "../App.css";
import "./todo.css";
import { useState } from "react";
import { addTodo, deleteTodo } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

function Todo() {
  const [inputData, setInputdata] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todoReducers.list);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo-List App</h2>
        <div>
          <input
            type="text"
            placeholder="Enter a Todo..."
            className="inputTodo"
            value={inputData}
            onChange={(event) => {
              setInputdata(event.target.value);
            }}
          />
          <button
            className="goBtn"
            onClick={() => dispatch(addTodo(inputData), setInputdata(""))}
          >
            Go
          </button>
        </div>
        <ul className="allTodos">
          {selector.map((elem) => {
            return (
              <li key={elem.id} className="singleTodo">
                <span className="todoText">{elem.data}</span>
                <button
                  className="deleteBtn"
                  onClick={() =>
                    dispatch(deleteTodo(elem.id), setInputdata(""))
                  }
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default Todo;
