import StatisticLine from "./StatisticLine"

const Statistics = ({ goodVote, badVote, neutralVote, clickHistory }) => {
    if (clickHistory.length === 0) {
        return <p>No feedback given.</p>
    } else {
        return (
            <table>
                <tbody>
                    <tr><StatisticLine text="Good" value={goodVote} /></tr>
                    <tr><StatisticLine text="Good" value={goodVote} /></tr>
                    <tr><StatisticLine text="Neutral" value={neutralVote} /></tr>
                    <tr><StatisticLine text="Bad" value={badVote} /></tr>
                    <tr><StatisticLine text="All" value={clickHistory.length} /></tr>
                    <tr><StatisticLine text="Average" value={(goodVote - badVote) / clickHistory.length} /></tr>
                    <tr><StatisticLine text="Percentage" value={goodVote / clickHistory.length * 100 + '%'} /></tr>
                </tbody>
            </table>
        )
    }
}


export default Statistics