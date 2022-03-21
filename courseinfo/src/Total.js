const Total = (props) => {
    const totalExercises = props.parts
        .map((parts) => { return parts.exercises })
        .reduce((initial, accumulator) => { return initial + accumulator })
    return <>
        <p>Number of exercises {totalExercises}</p>
    </>
}

export default Total