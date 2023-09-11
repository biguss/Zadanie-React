import { useState } from "react";

function Todo({ task }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      <input type="checkbox" checked={isCompleted} onChange={toggleCompleted} />
      <span
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
        }}>
        {task}
      </span>
    </div>
  );
}
export default Todo;
