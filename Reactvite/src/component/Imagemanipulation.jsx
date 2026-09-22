import React, { useState } from 'react'
import cat from "../images/catimage.jpg"

function Imagemanipulation() {
    const [height, setheight] = useState(200);
    const [width, setwidth] = useState(200);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);

    function enhanceheight() {
        setheight(height + 10)
    }

    function enhancewidth() {
        setwidth(width + 10)
    }
    function changebgcolor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);

    }
    function rotateImage(){

    }
    return (
        <div>
            <h2 style={{ color: 'white', backgroundColor: 'brown' }}>
                Image Manipulation using React
            </h2>

            <div
                style={{
                    border: '2px solid red',
                    height: '300px',
                    width: '400px',
                    marginLeft: '100px'
                }}
            >
                <img src={cat} height={height} width={width}  style={{backgroundColor:`rgb(${red},${green},${blue})`,transform: `rotate(45deg)`}}></img>

                <div>
                    <h2>Cat height: {height}</h2>
                    <h2>Cat width: {width}</h2>
                </div>
            </div>

            <div>
                <button onClick={enhanceheight}>Enhance height</button>
                <button onClick={enhancewidth}>Enhance width</button>
                <button onClick={changebgcolor}>Change BG Color</button>
            </div>
        </div>
    )
}

export default Imagemanipulation