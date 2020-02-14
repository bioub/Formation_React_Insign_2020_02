import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";
import { todoAdd, todoChange } from "../actions";
import { selectNewTodo } from "../selectors";

function mapStateToProps(state) {
  return {
    newTodo: selectNewTodo(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoChange(payload) {
      dispatch(todoChange(payload));
    },
    onTodoAdd(payload) {
      dispatch(todoAdd(payload));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
