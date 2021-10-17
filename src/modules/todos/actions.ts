import { createAction} from "typesafe-actions";


// 액션 타입 선언
export const ADD_TODO = 'todos/ADD_TODO' as const;//createAction 사용 안할 경우 as const 필수
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1; // 새로운 항목을 추가 할 때 사용 할 고유 ID 값

// 액션 생성 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text
  }
});

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();