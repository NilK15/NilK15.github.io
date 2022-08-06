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
    const fetchDataPost = async (event) => {

        event.preventDefault();
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
    const fetchDataDelete = async (id = 0) => {
        try {
            if (id == 0) {
                const { data: response } = await axios.delete('/api/projects');
                // console.log(JSON.stringify(data, null, 2));
                setData(response);
            }
            else {
                const { data: response } = await axios.delete('/api/projects/' + id);
                // console.log(JSON.stringify(data, null, 2));
                setData(response);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoaded(true);
        }
    }
    return (
        <div className='bodyOverview flex-col p-3 '>
            <div className='getDiv rounded-xl border-solid border-green-100 p-4'>
                <button className='getButton ' onClick={fetchDataGet}> Get Projects
                </button>
                <div className='dataItems bg-gray-900'>
                    <pre className='text-xs text-gray-400'>{JSON.stringify(data, null, 2)}</pre>
                </div>
            </div>
            <div className='postDiv rounded-xl border-solid border-purple-100 p-4'>
                <button type="submit" form="postForm" className='postButton' > Post
                    Project
                </button>
                <div className='formContainer '>
                    <form id="postForm" className='formClass' onSubmit={fetchDataPost}>
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
                    </form>
                </div>
            </div>
            <div className='deletDivSpecific flex rounded-xl border-solid blue-900 bg-blue-400 p-4'>
                <button className='deleteButtonSpecific rounded-xl border-blue-800 bg-blue-200 hover:bg-blue-300 text-blue-900 w-1/2 h-80 text-5xl' onClick={() => fetchDataDelete(parseInt((document.getElementById("idNumber") as HTMLInputElement).value))}> Delete Project By ID
                </button>
                <div className='block w-1/2 text-center'>
                    <form id="idForm" className='pt-32'>
                        <label className='text-white text-2xl'> Project ID: </label>
                        <input type="number" id="idNumber" className='pt-1 ml-1' />
                    </form>
                </div>
            </div>
            <div className='deleteDiv flex rounded-xl p-4 bg-pink-900'>
                <button className='deleteButton rounded-xl border-pink-800 bg-pink-200 hover:bg-pink-300 text-pink-900 cursor-pointer' onClick={() => fetchDataDelete(0)}> Delete
                    Last Project
                </button>
            </div>
        </div >

    );
}



export default Body;
