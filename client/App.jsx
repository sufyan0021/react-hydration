import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const todos = useSelector((s) => s.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((t) => (
        <li
          key={t.id}
          onClick={() =>
            dispatch({ type: "todos/todoToggled", payload: t.id })
          }
        >
          {t.completed ? "✅" : "⬜"} {t.text}
        </li>
      ))}
    </ul>
  );
}