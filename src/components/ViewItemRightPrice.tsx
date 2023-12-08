import React, { useState } from "react"
import './RightPriceGame.css'
import questionMark from "../assets/pt_interrogation.png"

const correctResponse = "Bravo ! C'était la bonne réponse !"
const higherResponse = "La valeur recherchée est plus grande."
const lowerResponse = "La valeur recherchée est plus petite."
const falseValueResponse = "Il faut entrer un nombre."

const ViewRightPriceComponent: React.FC<ViewRightPriceComponentProps> = ({ item, displayNextQuestion, callBackData }) => {

    const [inputValue, setInputValue] = useState("")
    const [response, setResponse] = useState("")
    // const [data, setData] = useState<DataType>()
    const [counter, setCounter] = useState(0)
    const [delta, setDelta] = useState(-1)

    const handleInputChange = (event: any) => {
        setInputValue(event?.target.value)
    }

    const displayResponse = () => {
        if (item) {
            if (inputValue === "un nombre") {
                // 🥚2🐇 <- Opaline
                setResponse("Haha petit rigolo");
                return;
            }
            const userValue = parseFloat(inputValue)
            if (isNaN(userValue)) {
                setResponse(falseValueResponse)
            }
            else if (userValue === item.value) {
                setResponse(correctResponse)
            }
            else if (userValue > item.value) {
                setResponse(lowerResponse)
                setCounter((old) => old + 1)
            }
            else if (userValue < item.value) {
                setResponse(higherResponse)
                setCounter((old) => old + 1)
            }
            if (delta === -1 ){
                setDelta(Math.abs(userValue-item.value))
            }
        }
        console.log(counter)
       

    }

    const handleEnterPressed = (event: any) => {
        if (event.key === "Enter") {
            displayResponse()
        }
    }

    const displayAndResetOnNext = () => {
        setResponse("")
        setInputValue("")
        callBackData(counter, delta)
        setCounter(0)
        setDelta(-1)
        displayNextQuestion()
    }


    return (
            <div className="center">
            <h2 className="question">{item.question}</h2>
            {
                item.unit !== "" ?
                <p className="unit">(en {item.unit})</p> :null
            }
            
            <input className="input" placeholder={item.placeholder} value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterPressed}></input>
            <button className="buttonValidation" onClick={displayResponse}>Valider</button>
            {response !== "" ?
            <>
                <div className="response-source">
                    <p className="hintResponse">{response}</p>
                    {
                        response === correctResponse ?
                            <div className="tooltip">
                                <button className="tooltip-button" onClick={() => window.open(item.sources)}> <img className="question-mark" src={questionMark} alt="questionMark" />
                                </button>
                                <span className="tooltiptext">{item.sources}</span>
                            </div> : null
                    }
                </div>
                <div>
{
                response === correctResponse ?

                    <button className="buttonValidation" onClick={displayAndResetOnNext}>Suivant</button>

                    : null
            }
            </div>
            </>

            : null
            }
            </div>
    )

}

export default ViewRightPriceComponent