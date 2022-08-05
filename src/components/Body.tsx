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
            console.log("hi");
            setData(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoaded(true);
        }
    }
    const fetchDataPost = async () => {
        const projectName = (document.getElementById("projectName") as HTMLInputElement).value;
        const manager = (document.getElementById("manager") as HTMLInputElement).value;
        const author = (document.getElementById("author") as HTMLInputElement).value;
        const gitUrl = (document.getElementById("gitUrl") as HTMLInputElement).value;
        const projectStack = (document.getElementById("projectStack") as HTMLInputElement).value;
        const description = (document.getElementById("description") as HTMLInputElement).value;

        try {
            console.log("hi");
            // const { data: response } = await axios.post('/api/projects');
            const { data: response } = await axios.post('/api/projects', {
                projectName: projectName,
                manager: manager,
                author: author,
                gitUrl: gitUrl,
                projectStack: projectStack,
                description: description
            });
            setData(response);
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        } finally {
            setLoaded(true);
        }
    }
    const fetchDataDelete = async () => {
        try {
            const { data: response } = await axios.delete('/api/projects');
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
                    <form onSubmit={fetchDataPost}>
                        <label> Project Name: </label>
                        <input type="text" id="projectName" />
                        <br />
                        <label> Manager:
                        </label>
                        <input type="text" id="manager" />
                        <br />
                        <label> Author:
                        </label>
                        <input type="text" id="author" />
                        <br />
                        <label> Git URL:
                        </label>
                        <input type="text" id="gitUrl" />
                        <br />
                        <label> Project Stack:
                        </label>
                        <input type="text" id="projectStack" />
                        <br />
                        <label> Description:
                        </label>
                        <input type="text" id="description" />
                        <br />
                        <input type="button" id="submission" onClick={fetchDataPost} value="Submit" />
                    </form>
                </div>
            </div>
            <div className='deleteDiv'>
                <button className='deleteButton' onClick={fetchDataDelete}> Delete
                    Request
                </button>
            </div>
        </div>

    );
}



export default Body;
