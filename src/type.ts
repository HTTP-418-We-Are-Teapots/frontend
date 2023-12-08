interface RightPriceComponentProps {
    isSolution: boolean;
}

interface ItemType {
    question: string,
    value: number,
    unit: string,
    sources: string,
    isSolution: boolean,
    placeholder: string

}

interface ViewRightPriceComponentProps {
    item: ItemType,
    displayNextQuestion: () => void,
    callBackData: (counter: number, delta: number) => void
}

interface DataType {
    questionId : number,
    score: number,
    delta: number
}