import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [empty, setEmpty] = useState(false);
  const [send, setSend] = useState(false);
  const [blur, setBlur] = useState(false);

  const handleClick = () => {
    console.log(text);
    setEmpty(false);
  };
  const handleChange = (e) => {
    setText(e.target.value);
    setEmpty(false);
    setSend(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    setEmpty(false);
    setSend(true);
    setBlur(false);
    console.log(text);
  };

  const handleBlur = (e) => {
    setBlur(true);
    setEmpty(true);
    e.target.value ? setEmpty(false) : setEmpty(true);
    // console.log("asd");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          className={blur && !text ? "is-error" : null}
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button disabled={!text} onClick={handleClick}>
          click
        </button>
        <div>{text}</div>
      </form>
      {empty && blur ? <div>Поле не должно быть пустым</div> : null}
      {send ? <div>Отправлено</div> : null}
    </div>
  );
}

export default App;
