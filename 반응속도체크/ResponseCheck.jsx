// 제로초 코드
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

import React, { useRef, useState } from "react";

const ResponseCheck = () => {
  const [result, setResult] = useState([]);
  const [state, setState] = "waiting";
  const [message, setMessage] = "클릭해서 시작하게";
  const setTime = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClick = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이면 누르삼");
      setTime.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭하삼!!!!");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      clearTimeout(setTime.current);
      setState("waiting");
      setMessage("성급하시구만 클릭해서 다시 시작하게");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭해서 시작하게");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const onAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClick}>
        {message}
      </div>
      {onAverage()}
    </>
  );
};

export default ResponseCheck;

// 연습코드
// class ResponseCheck extends Component {
//   state = {
//     state: "waiting",
//     message: "클릭해서 시작하세요!",
//     result: [],
//   };

//   setTime;
//   startTime;
//   endTime;

//   onClick = () => {
//     const { result, state, message } = this.state;
//     if (state === "waiting") {
//       this.setState({
//         state: "ready",
//         message: "초록색이면 눌러주세요!",
//       });
//       this.setTime = setTimeout(() => {
//         this.setState({
//           state: "now",
//           message: "지금 클릭!!!!",
//         });
//         this.startTime = new Date();
//       }, Math.floor(Math.random() * 1000) + 2000);
//     } else if (state === "ready") {
//       clearTimeout(this.setTime);
//       this.setState({
//         state: "waiting",
//         message: "성급하시군요! 클릭해서 다시 시작하세요!",
//       });
//     } else if (state === "now") {
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

//   onReset = () => {
//     this.setState({
//       result: [],
//     });
//   };

//   onAverage = () => {
//     const { result } = this.state;
//     return result.length === 0 ? null : (
//       <>
//         <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
//         <button onClick={this.onReset}>리셋</button>
//       </>
//     );
//   };

//   render() {
//     return (
//       <>
//         <div id="screen" className={this.state.state} onClick={this.onClick}>
//           {this.state.message}
//         </div>
//         {this.onAverage()}
//       </>
//     );
//   }
// }

// export default ResponseCheck;
