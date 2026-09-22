import React from 'react'
import ICard from './ICard'

function Gallery() {
    const student={
        pic:'',
        name: "Aditi Singh",
        roll:"2400320100069",
        branch:"CSE-AIML",
        college:"ABES Engineering College"
    }
    
  return (
    <div style={{border:'2px solid red', display :'flex'}}>

       {/* <ICard name="Aditi Singh " roll="2400320100069" branch="CSE" college="ABES Engineering College"/>
      <ICard name="Chhavi" roll="123 " branch="CSE" college="ABES Engineering College"/>
      <ICard name="Yash"  roll="456" branch="CSE" college="ABES Engineering College"/>
      <ICard name="Happy " roll ="789" branch="CSE-AIML" college="ABES Engineering College" />  */}
      <ICard data={student}/>
    </div>
  )
}

export default Gallery
