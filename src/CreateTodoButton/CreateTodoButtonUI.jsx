function CreateTodoButtonUI({ newTodoText, onChange, onClick }) {
    return (
      <div className="todo-container">
        <input
          type="text"
          placeholder="Nuevo TODO"
          value={newTodoText}
          onChange={onChange} 
          className="input"
        />
        <button
          className="button"
          onClick={onClick} 
        >
          +
        </button>
      </div>
    );
  }
  export { CreateTodoButtonUI };