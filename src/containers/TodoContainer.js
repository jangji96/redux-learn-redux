import React, { useCallback } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { addTodo, toggleTodo } from "../modules/totods";
import Todos from '../components/Todos';

// function TodosContainer() {
//     // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
//     // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
//     const todos = useSelector(state => state.todos);
//     const dispatch = useDispatch();

//     const onCreate = text => dispatch(addTodo(text));
//     const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

//     return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
// }

// export default TodosContainer;

function TodosContainer({ todos, addTodo, toggleTodo }) {
    const onCreate = text => addTodo(text);
    const onToggle = useCallback(id => toggleTodo(id), [toggleTodo]); // 최적화를 위해 useCallback 사용
  
    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
  }
  
  export default connect(
    state => ({ todos: state.todos }),
    {
      addTodo,
      toggleTodo
    }
  )(TodosContainer);
  