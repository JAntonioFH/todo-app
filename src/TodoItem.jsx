function TodoItem({ text, isCompleted, onComplete, onDelete }) {
  return (
    <li style={styles.container}>
      <button
        style={{
          ...styles.completeButton,
          backgroundColor: isCompleted ? '#4caf50' : '#ccc', // Verde si está completado, gris si no
        }}
        onClick={onComplete}
      >
        ✔
      </button>
      <p
        style={{
          ...styles.text,
          textDecoration: isCompleted ? 'line-through' : 'none', // Tachado si está completado
          color: isCompleted ? '#999' : '#333', // Texto atenuado si está completado
        }}
      >
        {text}
      </p>
      <button style={styles.deleteButton} onClick={onDelete}>
        ✖
      </button>
    </li>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    listStyle: 'none',
  },
  completeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#fff',
    transition: 'background-color 0.3s',
  },
  deleteButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  text: {
    flex: 1,
    margin: '0 10px',
    fontSize: '16px',
  },
};
export {TodoItem}