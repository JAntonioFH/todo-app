import './index.css';

function TodoList(props) {
  return (
    <section className='container-list'>
      <ul className='list'>
        {props.children}
      </ul>
    </section>
  );
}
export { TodoList };