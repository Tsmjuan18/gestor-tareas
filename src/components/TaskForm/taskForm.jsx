import { useState } from "react";
import "./taskForm.css";

export const TaskForm = ({ addTask }) => {

  const [text, setText] = useState("");

  const handleAdd = () => {

    if (text.trim() === "") return;

    addTask(text);

    setText("");
  };

  return (
    <div className="task-form">

      <input
        type="text"
        placeholder="Ingrese una tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>
        Agregar
      </button>

    </div>
  );
};