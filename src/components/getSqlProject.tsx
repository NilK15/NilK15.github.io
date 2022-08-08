import React, { useEffect, useState } from 'react';
import axios from 'axios';


const GetDiv = () => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");

    const fetchDataGet = async () => {
        try {
            const { data: response } = await axios.get('/api/projects');
            setData(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoaded(true);
        }
    }
    return (
        <div className='getDiv flex mb-10 mt-3 rounded-xl border-green-800 bg-green-400 p-6 shadow-xl shadow-gray-900'>
            <button className='getButton transition ease-in-out hover:-translate-y-1 duration-300  text-4xl w-1/2 h-84 text-green-900 shadow-xl
                shadow-gray-900 rounded-xl font-bold border-green-700
                bg-green-200 cursor-pointer hover:bg-green-300'
                onClick={fetchDataGet}> Get Projects From SQLite Database </button>
            <div className='dataItems w-1/2 h-80 text-5xl overflow-y-auto bg-green-700 rounded-xl ml-4 '>
                <div className='flex justify-center jsonHolder'>
                    <pre className='text-xl text-green-200'>{JSON.stringify(data, null, 2)}</pre>
                </div>
            </div>
        </div>
    )
}
