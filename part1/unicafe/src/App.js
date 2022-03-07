import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const Button = ({clickEvent, text}) => {
  return (
    <button onClick={clickEvent}>{text}</button>
  )
} 

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value}</td>
    </tr>
  )
}
  
const Statistics = ({count}) => {
  const all = count.good+count.neutral+count.bad;
  if (all===0) {
    return <div>No feedback given.</div>

  } else {
    const average = count.good-count.bad;
    let positive;
    if (all===0) {
      positive = 0;
    } else {
      positive = count.good/all;
    }
    return (
      <table>
        <tbody>
        <StatisticLine text='good' value={count.good}></StatisticLine>
        <StatisticLine text='neutral' value={count.neutral}></StatisticLine>
        <StatisticLine text='bad' value={count.bad}></StatisticLine>
        <StatisticLine text='all' value={all}></StatisticLine>
        <StatisticLine text='average' value={average}></StatisticLine>
        <StatisticLine text='positive' value={positive*100 + '%'}></StatisticLine>
        </tbody>
      </table>   
    );
  }

}


const App = () => {

  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleGood = () => {
    setCount({
      ...count,
      good: count.good + 1
    })
  }

  const handleNeutral = () => {
    setCount({
      ...count,
      neutral: count.neutral + 1
    })
  }

  const handleBad = () => {
    setCount({
      ...count,
      bad: count.bad + 1
    })
  }

  return (
    <div className="App">
      <h1>give feedback</h1>
      <div className="buttons">
        <Button clickEvent={handleGood} text='good'></Button>
        <Button clickEvent={handleNeutral} text='neutral'></Button>
        <Button clickEvent={handleBad} text='bad'></Button>
      </div>
      <h1 id="statistics"> statistics </h1>
      <Statistics count={count}></Statistics>
    </div>
  );
}

export default App;
