import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        console.log("HELLOO")
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get('/api/projects');
                setData(response);
            } catch (error) {
                setError(error.message);
            } finally {
                console.log(data);
                setLoaded(true);
            }
        }

        fetchData();
    }, []);

    return (
        <div>

            <div className="Header">
                <header className="Header-Items">
                    <h1>  Project Portfolio </h1>
                </header>
                <br></br>
            </div >
            <code>{JSON.stringify(data, null, 2)}</code>
        </div>
    );
}



export default Header;
