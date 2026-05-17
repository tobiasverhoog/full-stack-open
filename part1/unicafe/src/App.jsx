import { useState } from 'react'

const StatisticsLine = (props) => {
  return (
    <>
      <td style={{width: '100px'}}>{props.text}</td>
      <td>{props.value}</td>
    </>
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
      <table>
        <tbody>
          <tr>
            <StatisticsLine text="good" value={props.good} />
          </tr>
          <tr>
            <StatisticsLine text="neutral" value={props.neutral} />
          </tr>
          <tr>
            <StatisticsLine text="bad" value={props.bad} />
          </tr>
          <tr>
            <td style={{width: '100px'}}>all</td><td>{all}</td>
          </tr>
          <tr>
            <td style={{width: '100px'}}>average</td><td>{average}</td>
          </tr>
          <tr>
            <td style={{width: '100px'}}>positive</td><td>{positive} %</td>
          </tr>
        </tbody>
      </table>
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