import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { todoDelete } from "../actions";
import { selectTodos } from "../selectors";

function mapStateToProps(state) {
  return {
    todos: selectTodos(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoDelete(payload) {
      dispatch(todoDelete(payload));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
