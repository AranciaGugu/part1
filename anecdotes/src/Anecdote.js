const Anecdote = ({ anecdote, votes }) => {
    return anecdote ? (
        <>
            <div>
                {anecdote}
            </div>
            <div>
                has {votes} votes
            </div>
        </>
    ) : <>No votes yet</>
}


export default Anecdote