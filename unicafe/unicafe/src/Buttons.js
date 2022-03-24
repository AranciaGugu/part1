const Buttons = ({ onClick, text }) => {
    return (
        <button onClick={onClick} style={{marginRight: '5px'}}>
            {text}
        </button>
    )
}

export default Buttons