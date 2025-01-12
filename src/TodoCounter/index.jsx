import { TodoCounterUI } from "./TodoCounterUI";
import './index.css';
function TodoCounter({ total, completed }) {
    return (
      <TodoCounterUI
        total={total}
        completed={completed}
      />
    );
  }

  export { TodoCounter };