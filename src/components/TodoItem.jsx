/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext } from "react";
import CheckIcon from "../assets/images/icon-check.svg";
import CrossIcon from "../assets/images/icon-cross.svg";
import { themeContext } from "../App";

export default function TodoItem({
  index,
  todo,
  deleteItem,
  updateTodo,
  dragElement,
}) {
  const mode = useContext(themeContext);
  let cible;
  let source;
  const borderBg = {
    bg:
      mode === "dark"
        ? "border-todoColor hover:border-grayishBlue "
        : "border-grayishBlue hover:border-textDark",
  };
  return (
    <li
      key={index}
      className={
        (todo.completed == true ? "line-through text-todoColor" : "") +
        " p-4 list-none border-gray-300 border-b flex justify-between items-center"
      }
      draggable
      onDragStart={(e) => {
        source = document.elementFromPoint(e.clientX, e.clientY);
      }}
      onDragEnd={(e) => {
        // e.clientY = e.clientY > 405 ? 405 : e.clientY;
        cible = document.elementFromPoint(e.clientX, e.clientY);
        dragElement(source, cible);
      }}
      // onDragEnd={() => console.log("end", cible, "debu", source)}
    >
      <div className="flex items-center justify-between gap-4">
        <img
          src={todo.completed === true ? CheckIcon : ""}
          className={
            (todo.completed == true && "bg-checkColor ") +
            " " +
            borderBg.bg +
            " rounded-full border w-4 h-4"
          }
          onClick={() => {
            updateTodo(index);
          }}
        />
        <p>{todo.title}</p>
      </div>
      <img
        src={CrossIcon}
        className={"w-4 h-4 "}
        onClick={() => deleteItem(index)}
      />
    </li>
  );
}
