import React from "react"
import styled from 'styled-components'

const WrapperCard= styled.div`
width: 500px;
background-color:red;
`
const CoverCard= styled.img`
width: 200px;
`
const TitleCard= styled.h1`
width: 150px;
background-color: blue;
`
function Card({title, id}){
    return(
    <WrapperCard key={id}>
        
        <TitleCard>{title}</TitleCard>
    </WrapperCard>)
}
export default Card