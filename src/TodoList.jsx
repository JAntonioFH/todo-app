function TodoList(props) {
  return (
    <section style={styles.container}>
      <ul style={styles.list}>
        {props.children}
      </ul>
    </section>
  );
}

const styles = {
  container: {
    margin: '20px 20px', // Espaciado alrededor del contenedor
    padding: '20px', // Relleno interno
    backgroundColor: '#f9f9f9', // Fondo sutil
    borderRadius: '10px', // Bordes redondeados
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra ligera
  },
  list: {
    listStyleType: 'none', // Eliminar viñetas de la lista
    padding: 0, // Eliminar margen interno
    margin: 0, // Eliminar margen externo
  },
};

export { TodoList };