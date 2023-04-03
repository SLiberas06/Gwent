import React from "react";
import Card from "../../components/Card"
import Data from "../../data/data.json"
import { useParams } from "react-router-dom"

function Home(){
    const {id}= useParams()
    const card = Data.find((card)=> card.id === id)
    if (!card){
        return (
        <div>Erreur</div>)
    }
  
return (<div>
        <p>Hello Gwent</p>
       
            <div key={index}>
             <Card
             id={card.id}
             title={card.name}
             />
             </div>
        
       
    </div>
    )
}
export default Home