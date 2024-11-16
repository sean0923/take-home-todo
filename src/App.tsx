import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { orderBy } from 'lodash';
import { FETCH_TODOS, fetchTodos } from './api/todo';
import { TodoItem } from './components/TodoItem';

const targetDate = new Date('2023-06-24');

export const App = () => {
  const { data: todosResp } = useQuery({ queryKey: [FETCH_TODOS], queryFn: fetchTodos });
  const todos = todosResp || [];

  // Add `isOverdue` property
  const todosWithOverdue = todos.map((todo) => {
    if (!todo.dueDate || todo.isComplete) return { ...todo, isOverdue: false };
    return { ...todo, isOverdue: dayjs(todo.dueDate).isAfter(targetDate) };
  });

  const sortedTodos = orderBy(
    todosWithOverdue,
    [
      (todo) => todo.isOverdue,
      (todo) => todo.isComplete,
      (todo) => new Date(todo.dueDate || 0).valueOf(),
    ],
    ['desc', 'asc', 'desc']
  );

  return (
    <div>
      <div className="bg-[#383E54] px-6 py-4 font-bold text-white">Todo App</div>

      <div className="mx-auto my-8 max-w-xl px-4">
        <div className="space-y-2">
          {sortedTodos.map((todoWithOverdue) => {
            return <TodoItem key={todoWithOverdue.id} todoWithOverdue={todoWithOverdue} />;
          })}
        </div>
      </div>
    </div>
  );
};
