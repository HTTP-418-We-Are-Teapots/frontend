
import React, { ReactEventHandler, useEffect, useState } from "react"
import right_price from "../assets/right-price.json"
import './RightPriceGame.css'
import questionMark from "../assets/pt_interrogation.png"
import ViewRightPriceComponent from "./ViewItemRightPrice";





const RightPriceComponent: React.FC<RightPriceComponentProps> = ({ isSolution }) => {

    const [endOfQuestions, setEndOfQuestions] = useState(false)
    const [questions, setQuestions] = useState<Array<ItemType>>([])
    const [counterQuestion, setCounterQuestion] = useState(0)
    const [item, setItem] = useState(questions[counterQuestion])
    const [dataQuestion, setDataQuestion] = useState<Array<DataType>>([])

    // const eventDisaster = "justPriceDisasterFinished"
    // const eventSolution = "justPriceSolutionFinished"

    // const eventDisasterStarted = "justPriceDisasterStarted"
    // const eventSolutionStarted = "justPriceSolutionStarted"

    useEffect(() => {
        const nbQuestion = 7

        const allQuestions = right_price.filter((item) => {
            return item.isSolution === isSolution
        })
        const allQuestionsSorted = allQuestions.slice(0, nbQuestion);
        setQuestions(allQuestionsSorted)
        setItem(allQuestionsSorted[counterQuestion])
    }, [])

    const displayNextQuestion = () => {
        if (counterQuestion + 1 < questions.length) {
            setItem(questions[counterQuestion + 1])
            setCounterQuestion(counterQuestion + 1)

        } else {
            setEndOfQuestions(true)
        }
    }

    const callBackData = (counter: number, delta: number) => {
        const data = { "questionId": counterQuestion, "score": counter, "delta": delta }
        setDataQuestion((old) => [...old, data])
        console.log(counter)
        console.log(dataQuestion)
    }

    // const publishResult = () => {
    //     const event = isSolution ? eventSolution : eventDisaster
    //     fetch('https://api.we-are-teapots.fr/stat', {
    //         method: 'post',
    //         body: JSON.stringify({ 'event': event, 'data': dataQuestion })
    //     })
    //     .then((res) => res.text()
    //     .then((text) => console.log(text)))
    // }

    // const publishStart = () => {
    //     const event = isSolution ? eventSolutionStarted : eventDisasterStarted
    //     fetch('https://api.we-are-teapots.fr/stat', {
    //         method: 'post',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify({ 'event': event })
    //     })
    //     .then((res) => res.text())
    //     .then((text) => console.log(text))
    // }


    return (
        <>
            {item && !endOfQuestions ?
                <ViewRightPriceComponent item={item} displayNextQuestion={displayNextQuestion} callBackData={callBackData} />
                : null
            }
            <div className="progress" >{counterQuestion + 1}/{questions.length}</div>

            {
                endOfQuestions ?
                    <>
                        <p>Vous avez atteint la fin des questions ! </p>
                        <button onClick={() => {/*TO DO */console.log("retour menu"); console.log(dataQuestion)}}>Retour Menu</button>
                    </>
                    : null
            }
        </>

    )
}

export default RightPriceComponent