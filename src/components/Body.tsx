import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Body = () => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");


    const fetchDataGet = async () => {
        try {
            const { data: response } = await axios.get('/api/projects');
            // console.log(JSON.stringify(data, null, 2));
            setData(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoaded(true);
        }
    }
    const fetchDataPost = async () => {
        try {
            const { data: response } = await axios.post('/api/projects');
            // console.log(JSON.stringify(data, null, 2));
            setData(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoaded(true);
        }
    }
    return (
        <div className='bodyOverview'>
            <div className='getDiv'>
                <button className='getButton' onClick={fetchDataGet}> Get Request
                </button>
                <div className='dataItems'>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            </div>
            <div className='postDiv'>
                <button className='postButton' onClick={fetchDataGet}> Post
                    Request
                </button>
                <div className='formContainer'>
                    <form className="formItems">
                        <div className='labelDivs'>
                            <label> Project Name:
                                <input type="text" name="projectName" />
                            </label>
                        </div>
                        <br />
                        <div className='labelDivs'>
                            <label> Manager:
                                <input type="text" name="manager" />
                            </label>
                        </div>
                        <br />
                        <div className='labelDivs'>
                            <label> Author:
                                <input type="text" name="author" />
                            </label>
                        </div>
                        <br />
                        <div className='labelDivs'>
                            <label> Git URL:
                                <input type="text" name="gitUrl" />
                            </label>
                        </div>
                        <br />
                        <div className='labelDivs'>
                            <label> Project Stack:
                                <input type="text" name="projectStack" />
                            </label>
                        </div>
                        <br />
                        <div className='labelDivs'>
                            <label> Description:
                                <input type="text" name="description" />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}



export default Body;
