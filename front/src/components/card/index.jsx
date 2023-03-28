import React from "react"

const DataCard = fetch("https://api.gwent.one/")
DataCard
.then(async (resData)=>{
    const response = await resData.json()
    console.log(response);
})
export default DataCard