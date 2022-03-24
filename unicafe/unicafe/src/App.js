import { useState } from 'react'
import Statistics from './Statistics'
import Buttons from './Buttons'

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const [clickHistory, setClickHistory] = useState([]);
  const handleClick = (typeClick) => {
    setClickHistory([...clickHistory, typeClick]);
    switch (typeClick) {
      case 'GOOD':
        setFeedback({ ...feedback, good: feedback.good + 1 })
        break;
      case 'NEUTRAL':
        setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
        break;
      case 'BAD':
        setFeedback({ ...feedback, bad: feedback.bad + 1 })
        break;
      default:
        break;
    }
  }

  const reset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    setClickHistory([]);
  }

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Buttons onClick={() => handleClick('GOOD')} text="GOOD" />
      <Buttons onClick={() => handleClick('NEUTRAL')} text="NEUTRAL" />
      <Buttons onClick={() => handleClick('BAD')} text="BAD" />
      <Buttons onClick={() => reset()} text="RESET" />
      <h1>Statistics</h1>
      <Statistics goodVote={feedback.good} neutralVote={feedback.neutral} badVote={feedback.bad} clickHistory={clickHistory} />
    </div>
  )
}

export default App