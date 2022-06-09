import React, { useState } from 'react';

const app = () => {
    const [city,setCity]=useState("");
    const [res,setRes]=useState("");
    const changeValue =(e)=>{
        setCity(e.target.value);
    }
    const submitValue=(e)=>{
        e.preventDefault();
        //open weather app api key
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            response=>response.json()
        ).then(data=>{
            // console.log(data.main.temp)
            const kel = data.main.temp;
            const cel = kel-273.15;
            setRes("Temperature at "+city+" is \n"+Math.round(cel)+"°C");
            // console.log(cel)
            setCity("");
        })
        // console.log(city);
    }
    return (
        <div>
             <center>
                <div className="card">
                    <div className='card-body'>
                        <h4 className='card-title'>WEATHER APP</h4>
                        <form onSubmit={submitValue}>
                            <input type="text" name="city" value={city} onChange={changeValue}/><br /><br />
                            <input type="submit" value="Get Temperature"/>
                        </form><br /><br />
                        <h2>{res}</h2>
                    </div>
                </div>
             </center>
        </div>
    );
};

export default app;