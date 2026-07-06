// src/App.tsx

import { AddTodoFormInteraction } from "./interactions/AddTodoFormInteraction";

export default function App() {
  function onAdd() {
    console.log("Incluyendo Task")
  }
  return (
    <main>
      <h1>Todo App</h1>
      {/* Iremos montando aquí TodoApp, LoginForm, etc. en los próximos módulos */}
      <AddTodoFormInteraction onAdd={onAdd} />
    </main>
  );
}