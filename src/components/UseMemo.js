import React, { useMemo } from "react";

function UseMemo({ todos }) {
  const totalTodos = useMemo(() => {
    return todos.length;
  }, [todos]);

  return (
    <div>
      <h2>Memoized Todo Count</h2>
      <p>Total Todos: {totalTodos}</p>
    </div>
  );
}

export default React.memo(UseMemo);
