import React, { Component } from "react";

// 컴포넌트의 라이프 사이클 (클래스의 경우)
// consturctor -> render -> ref -> componentDidMount
// (setState, props 바뀔 때) => shouldComponentUpdate(true) -> render -> componentDidUpdate
// (부모가 나를 없앴을 때) => componentWillUnmount -> 소멸

class RSP extends Component {
  state = {
    result: "",
    imgCoord: 0,
    score: 0,
  };

  componentDidMount() {
    // 컴포넌트가 첫 랜더링된 후
  }

  shouldComponentUpdate(nextProps, nextState, nextContent) {
    // 리랜더링 바로 직전
    return true;
  }

  componentDidUpdate() {
    // 리랜더링 후
  }

  componentWillUnmount() {
    // 컴포넌트가 제거되기 직전
  }

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        ></div>
        <div>
          <button
            id="rock"
            className="btn"
            onClick={() => {
              onClickBtn("바위");
            }}
          >
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={() => {
              onClickBtn("가위");
            }}
          >
            가위
          </button>
          <button
            id="paper"
            className="btn"
            onClick={() => {
              onClickBtn("보");
            }}
          >
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
