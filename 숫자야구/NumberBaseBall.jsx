const React = require("react");
const { Component } = React;

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
          {[
            { fruit: "배", taste: "맛없다" },
            { fruit: "바나나", taste: "맛있다" },
            { fruit: "사과", taste: "달다" },
          ].map((v) => (
            <li key={v.fruit + v.taste}>
              <b>{v.fruit}</b> - {v.taste}
            </li>
          ))}
          {/* <li>
            <b>배</b> - 맛없다
          </li>
          <li>
            <b>바나나</b> - 맛있다
          </li>
          <li>
            <b>사과</b> - 달다
          </li> */}
        </ul>
      </>
    );
  }
}

module.exports = NumberBaseBall;
