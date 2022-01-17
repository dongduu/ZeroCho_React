const React = require("react");
const { Component } = React;
import Try from "./Try";

function getNumbers() {}

class NumberBaseBall extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  onChangeInput = (e) => {
    this.state.value = e.target.value;
  };

  fruits = [
    { fruit: "배", taste: "맛없다" },
    { fruit: "바나나", taste: "맛있다" },
    { fruit: "사과", taste: "달다" },
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            value={this.state.value}
            type="string"
            onChange={this.onChangeInput}
            maxLength={4}
          />
          <button>입력</button>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((v, i) => {
            return <Try value={v} index={i} />;
          })}
        </ul>
      </>
    );
  }
}

module.exports = NumberBaseBall;
