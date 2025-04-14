import { useState } from "react";
import { Checkbox } from "~/components/days/three/checkbox";

export default function Three() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish new Challenge", completed: true },
    { id: 3, text: "Look at da boi", completed: false },
  ]);

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <h1 className="text-xl font-medium tracking-wide">My Todo list</h1>
      <div className="p-6 w-full">
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id}>
              <Checkbox
                id={String(todo.id)}
                label={todo.text}
                size={20}
                iconSize={10}
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
