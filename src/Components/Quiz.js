import { useContext, useEffect, useState } from "react"
import QuestionsData from "../data/QuestionsData"
import { DataContext } from "../App"


const Quiz=()=>{

    const [count,setcount] = useState(0)
    const [choices,setchoices] = useState("")
    const{Score,setScore,setAppState}=useContext(DataContext)
    
    useEffect(()=>{
        checkAnswer()
        //eslint-disable-next-lin
    },[choices])

    const checkAnswer=()=>{
        if(choices!==""){
            if(choices === QuestionsData[count].answer){
                setScore(Score+1)
                nextQuestion()
            }else{
                console.log("ตอบผิดไม่ได้คะนแนน")
                nextQuestion()
            }
        }
    }
     const nextQuestion=()=>{
        setchoices("")
        if(count === QuestionsData.length-1){
            setAppState("NumScore")
        }else{
            setcount(count+1)
        }
        
     }

    return(
        <div className="Quiz">
            <h1>{QuestionsData[count].question}</h1>
            <div className="choices">
                    <button on onClick={()=>setchoices("A")}>{QuestionsData[count].A}</button>
                    <button on onClick={()=>setchoices("B")}>{QuestionsData[count].B}</button>
                    <button on onClick={()=>setchoices("C")}>{QuestionsData[count].C}</button>
                    <button on onClick={()=>setchoices("D")}>{QuestionsData[count].D}</button>
            </div>
            <p>{`${count+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz