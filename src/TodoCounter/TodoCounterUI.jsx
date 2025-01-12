function TodoCounterUI({ styles, total, completed }) {
  return (
    <h2 className="counter">
        Has completado <span className="completed">{completed}</span> de{' '}
        <span className="total">{total}</span> TODOs
    </h2>
  )
}

export { TodoCounterUI };