import React, { useRef, useState, useEffect } from "react";

// 컴포넌트의 라이프 사이클 (클래스의 경우)
// consturctor -> render -> ref -> componentDidMount
// (setState, props 바뀔 때) => shouldComponentUpdate(true) -> render -> componentDidUpdate
// (부모가 나를 없앴을 때) => componentWillUnmount -> 소멸

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

function computerChoice(imgCoord) {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
}

const RSP = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    interval.current = setInterval(changeHand, 100);
    return () => {
      // componentWilUnmount 역할
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult("비겼습니다~");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다!!!");
      setScore((prevScore) => [...(prevScore + 1)]);
    } else {
      setResult("졌네요 풉킥ㅋㅎ");
      setScore((prevScore) => [...(prevScore - 1)]);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 2000);
  };

  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      ></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn("바위")}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={onClickBtn("가위")}>
          가위
        </button>
        <button id="paper" className="btn" onClick={onClickBtn("보")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RSP;

// class component
// import React, { PureComponent } from "react";

// // 컴포넌트의 라이프 사이클 (클래스의 경우)
// // consturctor -> render -> ref -> componentDidMount
// // (setState, props 바뀔 때) => shouldComponentUpdate(true) -> render -> componentDidUpdate
// // (부모가 나를 없앴을 때) => componentWillUnmount -> 소멸

// const rspCoords = {
//   바위: "0",
//   가위: "-142px",
//   보: "-284px",
// };

// const scores = {
//   가위: 1,
//   바위: 0,
//   보: -1,
// };

// const computerChoice = (imgCoord) => {
//   return Object.entries(rspCoords).find(function (v) {
//     return v[1] === imgCoord;
//   })[0];
// };

// class RSP extends PureComponent {
//   state = {
//     result: "",
//     imgCoord: rspCoords.바위,
//     score: 0,
//   };

//   interval;

//   componentDidMount() {
//     this.interval = setInterval(this.changeHand, 100);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   changeHand = () => {
//     const { imgCoord } = this.state; // 클로저 문제 주의!
//     if (imgCoord === rspCoords.바위) {
//       this.setState({
//         imgCoord: rspCoords.가위,
//       });
//     } else if (imgCoord === rspCoords.가위) {
//       this.setState({
//         imgCoord: rspCoords.보,
//       });
//     } else if (imgCoord === rspCoords.보) {
//       this.setState({
//         imgCoord: rspCoords.바위,
//       });
//     }
//   };

//   onClickBtn = (choice) => () => {
//     const { imgCoord } = this.state;
//     clearInterval(this.interval);
//     const myScore = scores[choice];
//     const cpuScore = scores[computerChoice(imgCoord)];
//     const diff = myScore - cpuScore;
//     if (diff === 0) {
//       this.setState({
//         result: "비겼습니다~",
//       });
//     } else if ([-1, 2].includes(diff)) {
//       this.setState((prevState) => {
//         return {
//           result: "이겼습니다!!!",
//           score: prevState.score + 1,
//         };
//       });
//     } else {
//       this.setState((prevState) => {
//         return {
//           result: "졌네요 풉킥ㅋㅎ",
//           score: prevState.score - 1,
//         };
//       });
//     }
//     setTimeout(() => {
//       this.interval = setInterval(this.changeHand, 100);
//     }, 2000);
//   };

//   render() {
//     const { result, score, imgCoord } = this.state;
//     return (
//       <>
//         <div
//           id="computer"
//           style={{
//             background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
//           }}
//         ></div>
//         <div>
//           <button id="rock" className="btn" onClick={this.onClickBtn("바위")}>
//             바위
//           </button>
//           <button
//             id="scissor"
//             className="btn"
//             onClick={this.onClickBtn("가위")}
//           >
//             가위
//           </button>
//           <button id="paper" className="btn" onClick={this.onClickBtn("보")}>
//             보
//           </button>
//         </div>
//         <div>{result}</div>
//         <div>현재 {score}점</div>
//       </>
//     );
//   }
// }

// export default RSP;
