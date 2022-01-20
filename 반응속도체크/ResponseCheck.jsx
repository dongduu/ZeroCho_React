// import React, { Component } from "react";

// class ResponseCheck extends Component {
//   state = {
//     state: "waiting",
//     message: "클릭해서 시작하세요!",
//     result: [],
//   };

//   timeout;
//   startTime;
//   endTime;

//   onClickScreen = () => {
//     const { state, message, result } = this.state;
//     if (state === "waiting") {
//       this.setState({
//         state: "ready",
//         message: "초록색이 되면 클릭하세요!",
//       });
//       this.timeout = setTimeout(() => {
//         this.setState({
//           state: "now",
//           message: "지금 클릭",
//         });
//         this.startTime = new Date();
//       }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
//     } else if (state === "ready") {
//       // 성급하게 클릭
//       clearTimeout(this.timeout);
//       this.setState({
//         state: "waiting",
//         message: "성급하시군요! 클릭해서 다시 시작하세요!",
//       });
//     } else if (state === "now") {
//       // 반응속도 체크
//       this.endTime = new Date();
//       this.setState((prevState) => {
//         return {
//           state: "waiting",
//           message: "클릭해서 시작하세요!",
//           result: [...prevState.result, this.endTime - this.startTime],
//         };
//       });
//     }
//   };

//   renderAverage = () => {
//     const { result } = this.state;
//     return result.length === 0 ? null : (
//       <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
//     );
//   };

//   render() {
//     return (
//       <>
//         <div
//           id="screen"
//           className={this.state.state}
//           onClick={this.onClickScreen}
//         >
//           {this.state.message}
//         </div>
//         {this.renderAverage()}
//       </>
//     );
//   }
// }

// export default ResponseCheck;

import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요!",
    result: [],
  };

  setTime;
  startTime;
  endTime;

  onClick = () => {
    const { result, state, message } = this.state;
    if (state === "waiting") {
      this.setState({
        state: "ready",
        message: "초록색이면 눌러주세요!",
      });
      this.setTime = setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭!!!!",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      clearTimeout(this.setTime);
      this.setState({
        state: "waiting",
        message: "성급하시군요! 클릭해서 다시 시작하세요!",
      });
    } else if (state === "now") {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: "waiting",
          message: "클릭해서 시작하세요!",
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };

  onAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <>
        <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={this.onReset}>리셋</button>
      </>
    );
  };

  render() {
    return (
      <>
        <div id="screen" className={this.state.state} onClick={this.onClick}>
          {this.state.message}
        </div>
        {this.onAverage()}
      </>
    );
  }
}

export default ResponseCheck;
