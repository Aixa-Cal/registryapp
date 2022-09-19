import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Registry() {
    const [RegistryData, serRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();

        const tempData = [...RegistryData];
        tempData.push(textInput)
        serRegistryData(tempData)
        setTextInput("")

    }

    useEffect(() => {
        if(textInput.length > 10) setError(true);
        else setError(false)

    }, [textInput])
    
    const removeItem = (index) => {
        let newData = [...RegistryData]
        newData.splice(index, 1)
        serRegistryData(newData)
    }

    const editItem = (index) =>
{
    let newData = [...RegistryData]
    newData[index] = textInput;

    serRegistryData(newData)
}
    console.log(RegistryData)

    return (
        <div>
            <h1>Registry</h1>
            <Link to='/'>Clic here to go to home</Link>
            <form onSubmit={addItem}>
                <label> Text input:
                    <input type={textInput} onChange={(e) => setTextInput(e.target.value)}></input>
                </label>

                <input type={"submit"}></input>


            </form>
            {error? <span style={{color:"red"}}>Error ocurred</span> : null}
            {
                RegistryData.map((item, index) => {
                    return(
                        <li key={index}>{item} <button onClick={() => removeItem(index)}>Remove</button> <button onClick={() => editItem(index)}>Update</button></li>
                    )
                })
            }
        </div>
    )
}

export default Registry;