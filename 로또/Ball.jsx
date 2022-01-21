import React, { memo } from "react";

// 함수 컴포넌트 (hook 아님!)
const Ball = memo(({ number }) => {
  // 하이오더(고차) 컴포넌트?? 컴포넌트를 다른 컴포넌트로 감싸는 것
  let background;
  if (number <= 10) {
    background = "red";
  } else if (number <= 20) {
    background = "orange";
  } else if (number <= 30) {
    background = "yellow";
  } else if (number <= 40) {
    background = "green";
  } else {
    background = "blue";
  }
  return (
    <div className="ball" style={{ background }}>
      {number}
    </div>
  );
});

// class Ball extends PureComponent {
//   render() {
//     const { number } = this.state;
//     let background;
//     if (number <= 10) {
//       background = "red";
//     } else if (number <= 20) {
//       background = "orange";
//     } else if (number <= 30) {
//       background = "yellow";
//     } else if (number <= 40) {
//       background = "green";
//     } else {
//       background = "blue";
//     }
//     return (
//       <div className="ball" style={{ background }}>
//         {number}
//       </div>
//     );
//   }
// }

export default Ball;
