import { useState } from 'react'

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
      <div>
        good {props.good}
      </div>
      <div>
        neutral {props.neutral}
      </div>
      <div>
        bad {props.bad}
      </div>
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
      <button onClick={() => setGood(good + 1)}>
        good
      </button>

      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>

  )
}

export default App