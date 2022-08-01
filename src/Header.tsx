import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {
    const [data, setData] = useState(null);
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="Header">
            <header className="HeaderItems">
                <h1 className="HeaderOne"> {data} </h1>
                <p> {data} </p>
            </header>
        </div >
    );

    async function getData() {
        const res = await axios("localhost:3000/projects");
        setData(res.data);
        console.log(res);
        // .then((res) => { setData(res.data) })

    }
}



export default Header;
