import './Statistics.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if (total === 0) {
        return <Notification message="There is no feedback"></Notification>
    } else {
        return <div className="statistics">
            <ul className='listItems'>
                <li className='item' title='good'>good:
                    <span>{good}</span>
                </li>
                <li className='item' title='neutral'>neutral:
                    <span>{neutral}</span>
                </li>
                <li className='item' title='bad'>bad:
                    <span>{bad}</span>
                </li>
            </ul>
            <div className='moreSatistics'>
                <p>total: </p>
                <span>{total}</span>
            </div>
            <div className='moreSatistics'>
                <p>positivePercentage:</p>
                <span>{positivePercentage}%</span>
            </div>
        </div>
    }
}

const Notification = ({message}) => {
    return message
}