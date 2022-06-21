import React, { useState } from 'react';
import Data from '../Data/Hiraganadata';
import Navbar from '../Navbar/Navbar';

const AllHiragana = () => {

    const [data, setData] = useState(Data)


    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="">
                <div className="row text-center mt-4  d-flex justify-content-center">
                    {
                        data.map((each, i) =>

                            <div className="col-2 m-2">
                               <div className="border  bg-primary">
                                    <h2 className="text-white">{each.hira}</h2>
                                </div>
                                <div className="border">
                                    <h5 >{each.name}</h5>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            </div>
        </div >
    );
};

export default AllHiragana;
