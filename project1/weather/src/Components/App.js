import React, { useState } from 'react';
const App = () => {
    const [city,setCity]=useState("");
    const [res,setRes]=useState("");
    const [tem,setTem]=useState("");
    const changeValue =(e)=>{
        const value=e.target.value
        setCity(value);
    }
    const submitValue=(e)=>{
        e.preventDefault();
        //open weather app api key
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            response=>response.json()
        ).then(data=>{
            console.log(data)
            const kel = data.main.temp;
            const cel = kel-273.15;
            const detail = data.weather[0].description;
            setRes(data.name+" \n "+Math.round(cel)+"°C");
            setTem(detail);
            // console.log(cel)
            setCity("");
        }).catch((err)=>{
            alert("Please enter valid name...!")
            setCity("")
        })
        // console.log(city);
    }
    return (
        <div className='code'>
            <div className='background'>
             <center>
                <div className="card">
                    <div className='card-body'>
                        <h4 className='card-title'>WEATHER APP</h4>
                        <form onSubmit={submitValue}>
                            <input type="text" name="city" value={city} onChange={changeValue}/><br /><br />
                            <input type="submit" value="Get Temperature"/>
                        </form><br /><br />
                        <i className="big thermometer half icon"></i><i><h2>{res}</h2></i>
                        <i className="huge cloud icon"></i><h4>{tem}</h4>
                    </div>
                </div>
             </center>
             </div>
        </div>
    );
};

export default App;

