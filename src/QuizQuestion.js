import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = { incorrectAnswer: false }
    }

    render() {
        return (
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                  {this.props.quiz_question.answer_options.map((answer_option, index) => {
                  return <QuizQuestionButton clickHandler={this.handleClick.bind(this)} 
                  key={index} button_text={answer_option} />
                })}
              </ul>
            </section>
            {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> :
            null}
          </main>
        )
    }

    handleClick(buttonText) {
        let isCorrectAnswer = (buttonText === this.props.quiz_question.answer)

        if(isCorrectAnswer) {
            this.props.showNextQuestionHandler()
        }

        this.setIncorrectAnswerState(!isCorrectAnswer);
    }

    setIncorrectAnswerState(newIncorrectAnswerValue) {
        this.setState(() => {
            return {incorrectAnswer: newIncorrectAnswerValue}
        })
    }
}

export default QuizQuestion
