import Part from './Part'

const Content = (props) => {
    return props.parts.map(part => {
        return <Part part={part} key={part.name} />
    })
}

export default Content