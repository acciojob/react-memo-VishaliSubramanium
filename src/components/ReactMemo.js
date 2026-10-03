import React from "react";

function ReactMemo({ count }) {
  return (
    <div>
      <h2>React.memo Component</h2>
      <p>Current Counter: {count}</p>
    </div>
  );
}

export default React.memo(ReactMemo);
