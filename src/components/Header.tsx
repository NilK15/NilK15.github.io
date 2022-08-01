import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        return getData();
    }, []);
    return (
        <div className="Header">
            <header className="Header-Items">
                <h1>  Project Portfolio </h1>
                <p> {data} </p>
            </header>
        </div >
    );

    function getData() {
        console.log("we hurr");
        const res = axios("localhost:3000/projects").then((res) => {
            setData(res.data);
        });
        console.log(res);
        // .then((res) => { setData(res.data) })
    }
}



export default Header;
