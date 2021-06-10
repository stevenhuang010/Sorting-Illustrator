import Bar from './Bar.js'

const Histogram = ({pxHeightList}) => {
    return (
        <div className = "barContainer">
            {pxHeightList.map((height, index) => (
                <Bar key = {index} height = {height}></Bar>
            ))}
        </div>
    )
}

export default Histogram
