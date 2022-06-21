import React, { useState } from 'react';
import Data from '../Data/Hiraganadata';
import Navbar from '../Navbar/Navbar';
import './PracHira.css'
const PracHira = () => {

    const [data, setData] = useState(Data)
    const [Ondata, setOnData] = useState('')

    const handleClick = () => {
        const random = data[Math.floor(Math.random() * data.length)];
        setOnData(random);
        setOnData2("")
    };

    const [Ondata2, setOnData2] = useState('')

    const handleClick2 = (e) => {
        setOnData2(e);
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="text-center  mt-5 pt-5">
                    <h1>What is This</h1>
                </div>

                <div className="hirastyle">
                   <div className="d-flex">

                        <div className="text-center mb-3 bg-primary text-white border mx-3">
                        <p className="h2 hira">{Ondata < 1 ? " ' ' " : Ondata.hira}</p>
                    </div>

                    {
                        Ondata2 &&
                        <div className="text-center mb-3 bg-primary text-white border ">
                            <p className="h2 hira"> {Ondata2.name} </p>
                        </div>
                    }
                   </div>
                    <button onClick={() => handleClick()} className="btn btn-primary">{Ondata < 1 ? "Click Me" : "Change"}</button>
                    <button onClick={() => handleClick2(Ondata)} className="btn btn-primary mx-2">Ans</button>
                </div>

            </div>
        </div>
    );
};

export default PracHira;
