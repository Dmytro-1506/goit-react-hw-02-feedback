import './FeedbackOptions.css';
import { App } from 'components/App';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const onLeave = (event) => {
        const btnName = event.target.title;
        App.setState({ good: 3 })
}

    return <div className="buttons">
        <button type="button" onClick={onLeave} title="good">good</button>
        <button type="button" onClick={onLeave} title="neutral">neutral</button>
        <button type="button" onClick={onLeave} title="bad">bad</button>
    </div>
}

