/* eslint-disable no-unused-vars */
// import React from 'react'
import { useContext, useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import { themeContext } from "../App";

export default function Todolist() {
  const mode = useContext(themeContext);

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  let [filteredTodos, setFilteredTodos] = useState([]);

  const [lenght, setLength] = useState(0);

  useEffect(() => {
    filteredTodos.length > 0
      ? setLength(
          filteredTodos.filter((data) => {
            return data.completed === false;
          }).length
        )
      : setLength(0);
  }, [filteredTodos]);

  useEffect(filterTodo, [todos]);

  function addTodo(title) {
    if (title == "") {
      return;
    }
    setTodos([...todos, { title, completed: false }]);
    setTitle("");
  }

  function deleteItem(index = "") {
    if (index !== "") {
      setTodos(todos.filter((todo, tindex) => index !== tindex));

      setFilteredTodos(
        filteredTodos.filter((todo, tindex) => index !== tindex)
      );
    } else {
      setTodos(todos.filter((todo) => todo.completed !== true));
      setFilteredTodos(filteredTodos.filter((todo) => todo.completed !== true));
    }
  }

  function updateTodo(index) {
    filteredTodos.map((todo, tindex) => {
      if (tindex === index) {
        todo.completed = !todo.completed;

        setFilteredTodos(filteredTodos.splice(index, 1, todo));
      }
    });
  }

  function filterTodo(filtre = "all") {
    filtre === "all"
      ? setFilteredTodos(todos)
      : setFilteredTodos(
          todos.filter((todo) => {
            return todo.completed === filtre;
          })
        );
  }

  function drag(cible, source) {
    let ul = document.querySelector("ul");
    ul.insertBefore(cible, source);
  }

  return (
    <section
      className={
        (mode === "light" ? "bg-lightBg" : "bg-darkBg") +
        " relative flex justify-center px-16 h-full "
      }
    >
      <div className="absolute -top-20 bg-transparent px-16 flex flex-col justify-between gap-4 w-full sm:w-3/4 sm:px-8">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onDoubleClick={() => {
            addTodo(title);
          }}
          className={
            (mode === "light"
              ? "bg-white text-textDark"
              : "bg-todoDarkBg text-grayText") +
            " p-4 rounded placeholder:text-textDark outline-none"
          }
          placeholder="Add new todo..."
        />
        <ul
          className={
            (mode === "light"
              ? "bg-white text-textDark"
              : "bg-todoDarkBg text-grayText") +
            " rounded max-h-92 overflow-scroll"
          }
        >
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo, index) => {
              return (
                <TodoItem
                  key={index}
                  index={index}
                  todo={todo}
                  deleteItem={deleteItem}
                  updateTodo={updateTodo}
                  dragElement={drag}
                />
              );
            })
          ) : (
            <p className="p-4 list-none  flex justify-between items-center">
              it{`'`}s quite here...
            </p>
          )}
          {todos.length > 0 && (
            <li className="flex md:px-4 md:py-0 p-4 text-center justify-between items-center ">
              <p className="text-todoColor">
                {lenght}
                items
              </p>
              <div
                className={
                  (mode === "light" ? "bg-white" : "bg-todoDarkBg ") +
                  " flex justify-around sm:gap-8 position absolute -bottom-20 left-0 right-0 mx-16 sm:mx-8 py-4 rounded md:relative md:bottom-0"
                }
              >
                <button
                  className="focus:text-blue-500 hover:text-todoColor"
                  onClick={(e) => {
                    e.preventDefault();
                    filterTodo("all");
                  }}
                >
                  all
                </button>
                <button
                  className="focus:text-blue-500 hover:text-todoColor"
                  onClick={(e) => {
                    e.preventDefault();
                    filterTodo(false);
                  }}
                >
                  active
                </button>
                <button
                  className="focus:text-blue-500 hover:text-todoColor"
                  onClick={(e) => {
                    e.preventDefault();
                    filterTodo(true);
                  }}
                >
                  completed
                </button>
              </div>
              <button
                className=" hover:text-todoColor"
                onClick={() => {
                  deleteItem();
                }}
              >
                clear complete
              </button>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
