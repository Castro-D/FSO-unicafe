import React, { useState } from 'react'

const Title = (props) => (
  <h1>{props.title}</h1>
);

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
);

const StatisticsLine = (props) => {
  return <p>{props.text} {props.data}</p>
}

const Statistics = ({good, bad, neutral}) => {
  if (good + bad + neutral === 0 ) {
    return <p>No Feedback given</p>
  }
  return (
    <div>
      <StatisticsLine text='good' data={good}/>
      <StatisticsLine text='neutral' data={neutral}/>
      <StatisticsLine text='bad' data={bad}/>
      <StatisticsLine text='all' data={good + bad + neutral} />
      <StatisticsLine text='average' data={(good - bad) / (good + bad + neutral)} />
      <StatisticsLine text='positive' data={(good / (good + bad + neutral)) * 100} />
    </div>
  )
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title title='give feedback' />
      <Button text='good' onClick={() => setGood(good + 1)}/>
      <Button text='neutral' onClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' onClick={() => setBad(bad + 1)} />
      <Title title='statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
