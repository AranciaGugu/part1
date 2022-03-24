import Part from './Part'

const Content = (props) => {
    const parts = props.parts;
    //    [{name: 'Fundamentals of React', exercises: 10},{name: 'Using props to pass data', exercises: 7}, {name: 'State of a component', exercises: 14}]
    return parts.map(part => (
         <Part part={part} key={part.name} />
    ))
}

export default Content