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
          {
            (["배", "바나나", "사과"].map = (v) => {
              return <li>{v}</li>;
            })
          }
        </ul>
      </>
    );
  }
}

module.exports = NumberBaseBall;
