import axios from 'axios';

const BASE_URL = 'https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io';
const headers = { 'X-Api-Key': import.meta.env.VITE_PUBLIC_API_KEY };

export const FETCH_TODOS = 'FETCH_TODOS';

export const fetchTodos = async () => {
  const resp = await axios.get(`${BASE_URL}/get`, { headers });
  return resp.data as Todo[];
};

export const updateTodo = async (props: { todoId: string; partialTodo: Partial<Todo> }) => {
  const { todoId, partialTodo } = props;
  const resp = await axios.patch(`${BASE_URL}/patch/${todoId}`, partialTodo, { headers });
  return resp.data;
};

export interface Todo {
  id: string; // "1",
  description: string; // "File 2023 Taxes",
  isComplete: boolean; //  true,
  dueDate: string | null; //  "2023-03-10T17:50:44.673Z"
}

export interface TodoWithOverdue extends Todo {
  isOverdue: boolean;
}
