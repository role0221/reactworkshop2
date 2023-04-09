import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const NumScore=()=>{
    const {Score,setAppState,setScore} = useContext(DataContext)
    const Reset=()=>{
        setScore(0)
        setAppState("Menu")
        }

    return(
        <div className="NumScore">
            <h1>คะแนน</h1>
            <h2>{Score} / {QuestionsData.length}</h2>
            <button on onClick={()=>Reset()}>ทำอีกครั้ง</button>


        </div>
        
    )
}

export default NumScore