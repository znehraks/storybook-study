import { ComponentMeta, ComponentStory } from '@storybook/react';

import TodoItem from './TodoItem';

export default {
  title: 'Loaders/TodoItem',
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args, { loaded: { todos } }) => (
  <TodoItem {...args} todos={todos} />
);

export const TodoItemStory = Template.bind({});

TodoItemStory.loaders = [
  async () => ({
    todos: await (await fetch('https://jsonplaceholder.typicode.com/todos')).json(),
  }),
];
