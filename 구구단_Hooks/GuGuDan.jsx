const React = require("react");
const { useState, useRef } = React;

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(value + "정답! 축하합니다!");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡! 다시 풀어보세요!");
      setValue("");
      inputRef.current.focus();
    }
  };

  console.log("render");
  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          type="number"
        />
        <button>입력</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = Gugudan;
