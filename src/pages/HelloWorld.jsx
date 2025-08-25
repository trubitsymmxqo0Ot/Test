import { useState } from "react";

export const HelloWorld = () => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    value === "hello" && setVisible((prev) => !prev);
  };

  return (
    <div>
      <input
        type="text"
        id="search"
        onChange={(e) => setValue(e.target.value)}
      />
      <button id="toggle" onClick={toggle}>
        HELLO WORLD
      </button>
      {visible && <h1 id="title">Hello world</h1>}
    </div>
  );
};

//Этот компонент мы добавляем в AppRouter для того, чтобы мы смогли его потыкать и после чего создаем файлик в page, чтобы начать получать какие-то элементы DOM дерева