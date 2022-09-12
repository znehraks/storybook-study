interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface IProps {
  todos: ITodo[];
}

const TodoItem = ({ todos }: IProps) => {
  console.log(todos);
  return (
    <>
      {todos.map((item) => (
        <span>{item.title}</span>
      ))}
    </>
  );
};

export default TodoItem;
