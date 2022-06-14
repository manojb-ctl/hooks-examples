import React, { useState, useEffect } from "react";

const UseEffectExmp = () => {
  const [content, setContent] = useState("posts");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Components did mount");
  }, []);

  useEffect(() => {
    console.log("Components did update", content);

    fetch(`https://jsonplaceholder.typicode.com/${content}`)
      .then((response) => response.json())
      .then((json) => console.log(content, json));

    // cleanup...
    return () => {
      console.log("Components unmount");
    };
  }, [content]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <button onClick={() => setContent("posts")}>Posts</button>
      <button onClick={() => setContent("users")}>Users</button>
      <button onClick={() => setContent("comments")}>Comments</button>
      <h1>{content}</h1>
    </div>
  );
};

export default UseEffectExmp;
