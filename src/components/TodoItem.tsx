import dayjs from 'dayjs';
import { FETCH_TODOS, Todo, TodoWithOverdue, updateTodo } from '../api/todo';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { useState } from 'react';
import { LoadingSvg } from './LoadingSvg';
import { queryClient } from '../providers/ReactQueryProvider';

interface Props {
  todoWithOverdue: TodoWithOverdue;
}

export const TodoItem = (props: Props) => {
  const { todoWithOverdue } = props;
  const { description, dueDate, isComplete, isOverdue, id } = todoWithOverdue;
  const [isLoading, setIsLoading] = useState(false);

  let bg = `bg-[#F3F3F3]`;
  if (isComplete) bg = `bg-[#CFC]`;
  if (isOverdue) bg = `bg-[#F9CCCC]`;

  const asyncToggleIsComplete = async () => {
    try {
      setIsLoading(true);
      const resp = await updateTodo({ todoId: id, partialTodo: { isComplete: !isComplete } });
      if (resp.status === 'success') {
        queryClient.setQueryData([FETCH_TODOS], (prevTodos: Todo[]) => {
          return prevTodos.map((prevTodo) => {
            if (id === prevTodo.id) return { ...prevTodo, isComplete: !isComplete };
            return prevTodo;
          });
        });
      } else {
        throw new Error('status was not success');
      }
    } catch (error) {
      console.error('error: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* row */}
      <div className={`px-2 py-1 ${bg}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div onClick={asyncToggleIsComplete}>
              {isComplete ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>
            <div className={isComplete ? 'line-through' : ''}>{description}</div>
          </div>

          {!!dueDate && (
            <div className="border border-gray-500 p-1 font-mono leading-none">
              {dayjs(dueDate).format('MM/DD/YYYY')}
            </div>
          )}
        </div>
      </div>

      {/* overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-end bg-black px-1 opacity-50">
          <LoadingSvg />
        </div>
      )}
    </div>
  );
};
