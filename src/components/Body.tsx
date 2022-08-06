import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Body = () => {
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
    const fetchDataPost = async (event) => {
        event.preventDefault();
        const projectName = (document.getElementById("projectName") as HTMLInputElement).value;
        const manager = (document.getElementById("manager") as HTMLInputElement).value;
        const author = (document.getElementById("author") as HTMLInputElement).value;
        const gitUrl = (document.getElementById("gitUrl") as HTMLInputElement).value;
        const projectStack = (document.getElementById("projectStack") as HTMLInputElement).value;
        const description = (document.getElementById("description") as HTMLInputElement).value;

        try {
            const { data: response } = await axios.post('/api/projects', {
                projectName: projectName,
                manager: manager,
                author: author,
                gitUrl: gitUrl,
                projectStack: projectStack,
                description: description
            });
            setData(response);
            fetchDataGet();
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
                setData(response);
                fetchDataGet();
            }
            else {
                const { data: response } = await axios.delete('/api/projects/' + id);
                setData(response);
                fetchDataGet();
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoaded(true);
        }
    }
    return (
        <div className='bodyOverview flex-col p-3 rounded-xl '>
            <div className='getDiv mb-10 mt-3 rounded-xl border-green-800 bg-green-400 p-6 shadow-xl shadow-gray-900'>
                <button className='getButton text-green-900 shadow-xl shadow-gray-900 rounded-xl font-bold border-green-700 bg-green-200 cursor-pointer hover:bg-green-300' onClick={fetchDataGet}> Get Projects
                </button>
                <div className='dataItems overflow-y-auto bg-green-700 rounded-xl ml-4 text-center'>
                    <pre className='text-xs text-green-200'>{JSON.stringify(data, null, 2)}</pre>
                </div>
            </div>
            <div className='postDiv mb-10 shadow-xl shadow-gray-900 mt-3 bg-purple-400 rounded-xl border-purple-700 text-purple-900 p-6'>
                <button type="submit" form="postForm" className='postButton shadow-xl shadow-gray-900 font-bold  rounded-xl bg-purple-200 text-purple-900 border-purple-800 hover:bg-purple-300 cursor-pointer' > Post
                    Project
                </button>
                <div className='formContainer overflow-y-auto'>
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
            <div className='deletDivSpecific shadow-xl shadow-gray-900 flex mt-3 mb-10 rounded-xl blue-900 bg-blue-400 p-6'>
                <button className='deleteButtonSpecific shadow-xl shadow-gray-900 rounded-xl font-bold border-blue-800 bg-blue-200 hover:bg-blue-300 text-blue-900 cursor-pointer w-1/2 h-80 text-5xl' onClick={() => fetchDataDelete(parseInt((document.getElementById("idNumber") as HTMLInputElement).value))}> Delete Project By ID
                </button>
                <div className='block w-1/2 text-center'>
                    <form id="idForm" className='pt-32'>
                        <label className='text-blue-900 text-2xl'> Project ID: </label>
                        <input type="number" id="idNumber" className='pt-1 ml-1' />
                    </form>
                </div>
            </div>
            <div className='deleteDiv flex shadow-xl shadow-gray-900 rounded-xl mb-10 p-6 bg-pink-400 mt-3 border-pink-900'>
                <button className='deleteButton rounded-xl shadow-xl shadow-gray-900 border-pink-900 font-bold bg-pink-200 hover:bg-pink-300 text-pink-900 cursor-pointer' onClick={() => fetchDataDelete(0)}> Delete
                    Last Project
                </button>
            </div>
        </div >
    );
}



export default Body;
