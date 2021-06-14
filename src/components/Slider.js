const Slider = ({changeable, label, min, max, stateVariable, alterState}) => {
    const handleChange = (event) => {
        alterState(event);
    }
    
    return (
        <div className = "sliderContainer">
            <input disabled = {changeable ? false : true} type="range" min={min} max={max} defaultValue = {stateVariable} onChange = {handleChange}/>
            <label>{label}</label>
        </div>
    )
}

export default Slider
