const Bar = ({height}) => {
    const rectangleStyling = {
        height: `${height}px`
    }
    return (
        <div style = {rectangleStyling} className = "bar" />
    )
}

export default Bar
