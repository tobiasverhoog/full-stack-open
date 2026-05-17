import { useState } from 'react'

const StatisticsLine = (props) => {
  return (
      <div>
        {props.text} {props.value}
      </div>
  )
}

const Button = (props) => {
  return (
      <button onClick={props.function}>
        {props.text}
      </button>
  )
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let average = (props.good - props.bad) / all
  let positive = props.good / all * 100

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <>
      <h1>
        statistics
      </h1>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <div>
        all {all}
      </div>
      <div>
        average {average}
      </div>
      <div>
        positive {positive} %
      </div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <>
      <h1>
        give feedback
      </h1>
      <Button text="good" function={() => setGood(good + 1)} />
      <Button text="neutral" function={() => setNeutral(neutral + 1)} />
      <Button text="bad" function={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>

  )
}

export default App