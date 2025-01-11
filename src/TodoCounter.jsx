function TodoCounter({ total, completed }) {
    return (
      <h2 style={styles.counter}>
        Has completado <span style={styles.completed}>{completed}</span> de{' '}
        <span style={styles.total}>{total}</span> TODOs
      </h2>
    );
  }
  
  const styles = {
    counter: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '20px 0',
      color: '#333',
    },
    completed: {
      color: '#4caf50', // Verde para tareas completadas
    },
    total: {
      color: '#007bff', // Azul para el total de tareas
    },
  };
  
  export { TodoCounter };