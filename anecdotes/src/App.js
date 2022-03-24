import { useState } from "react"
import Anecdote from "./Anecdote";

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [anecdoteWithMostVotes, setAnecdoteWithMostVotes] = useState(null);
  const copyVotes = [...votes]

  const voteAnecdote = (key) => {
    copyVotes[key] += 1
    setVotes(copyVotes)
    setAnecdoteWithMostVotes(getAnectodeWithMostVote());
  }

  const generateRandomAnecdote = (key) => {
    let newIndex = Math.floor(Math.random() * anecdotes.length)
    // check if the same anecdote to avoid render same anecdote
    if (newIndex === key) {
      generateRandomAnecdote(Math.floor(Math.random() * anecdotes.length))
    } else {
      setAnecdoteWithMostVotes(getAnectodeWithMostVote());
      setSelected(newIndex);
    }
  }

  const getAnectodeWithMostVote = () => {
    const index = Math.max(...copyVotes) === 0 ? null : copyVotes.findIndex(vote => vote === Math.max(...copyVotes))
    return index !== null ? { anecdote: anecdotes[index], votes: copyVotes[index] } : null
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={() => generateRandomAnecdote(selected)}>next anecdote</button>
      <button onClick={() => voteAnecdote(selected)}>Vote this anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdoteWithMostVotes?.anecdote} votes={anecdoteWithMostVotes?.votes} />
    </>
  )
}


export default App;
