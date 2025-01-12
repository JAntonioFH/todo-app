import './TodoItem.css';

function TodoItem({ text, isCompleted, onComplete, onDelete }) {
  return (
    <li className="container-item">
      <button
        className={`completeButton ${isCompleted ? 'completed' : 'incomplete'}`}
        onClick={onComplete}
      >
        ✔
      </button>
      <p className={`text ${isCompleted ? 'completed' : 'incomplete'}`}>
        {text}
      </p>
      <button className="deleteButton" onClick={onDelete}>
        ✖
      </button>
    </li>
  );
}

export { TodoItem };
