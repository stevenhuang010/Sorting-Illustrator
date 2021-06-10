const Button = ({clickable, clickFunction, text}) => {
    return (
        <button className = {clickable ? "clickable" : ""} onClick = {clickFunction}>{text}</button>
    )
}

export default Button
