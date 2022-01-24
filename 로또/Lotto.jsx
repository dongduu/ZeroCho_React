import React, { useState, useRef, useEffect, useMemo } from "react";
import Ball from "./Ball";

const getNumbers = () => {
  console.log("getNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
};

const Lotto = () => {
  const lottoNumbers = useMemo(() => getNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000); // componentDidMount
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); // input이 빈 배열이면 componentDidMount와 같음
  // 배열에 요소가 있으면 componentDidMount와 componentDidUpdate 모두 수행

  const onClickRedo = () => {
    setWinNumbers(getNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  };

  return (
    <>
      <div>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={onClickRedo}>한 번 더!</button>}
      </div>
    </>
  );
};

// class Lotto extends PureComponent {
//   state = {
//     winNumbers: getNumbers(),
//     winBalls: [],
//     bonus: null,
//     redo: false,
//   };

//   timeouts = [];

//   runTimeouts = () => {
//     const { winNumbers } = this.state;
//     for (let i = 0; i < winNumbers.length - 1; i++) {
//       this.timeouts[i] = setTimeout(() => {
//         this.setState((prevState) => {
//           return {
//             winBalls: [...prevState.winBalls, winNumbers[i]],
//           };
//         });
//       }, (i + 1) * 1000);
//     }
//     this.timeouts[6] = setTimeout(() => {
//       this.setState({
//         bonus: winNumbers[6],
//         redo: true,
//       });
//     }, 7000);
//   };

//   componentDidMount() {
//     this.runTimeouts();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.winBalls.length === 0) {
//       this.runTimeouts();
//     }
//   }

//   componentWillUnmount() {
//     this.timeouts = clearTimeout();
//   }

//   onClickRedo = () => {
//     this.setState({
//       winNumbers: getNumbers(),
//       winBalls: [],
//       bonus: null,
//       redo: false,
//     });
//   };

//   render() {
//     const { winBalls, bonus, redo } = this.state;
//     return (
//       <>
//         <div>
//           <div>당첨 숫자</div>
//           <div id="결과창">
//             {winBalls.map((v) => (
//               <Ball key={v} number={v} />
//             ))}
//           </div>
//           <div>보너스</div>
//           {bonus && <Ball number={bonus} />}
//           {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
//         </div>
//       </>
//     );
//   }
// }

export default Lotto;
