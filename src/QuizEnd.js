import React, {Component} from 'react'

class QuizEnd extends Component {
    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a onClick={this.handlerResetClick.bind(this)} href=''>Reset Quiz</a>
            </div>
        )
    }

    handlerResetClick() {

    }
}

export default QuizEnd