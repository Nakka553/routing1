import React from 'react';
import { useState } from 'react';
import data1 from '../../utils/data1.json';

function Contact(props) {
    const [data, setData] = useState(data1);

    const deleteData = (i) => {
        const test = [...data]
        test.splice(i, 1)
        setData(test)

        // console.log('data', test)
        // console.log("data", data)
    }

    const [selectData, setSelectData] = useState([]);


    return (
        <div >
            <h2 className="border-bottom" style={{ textAlign: 'center' }}>DATA</h2>

            <table className='table'>
                <thead className="border-bottom">
                    
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>

                </thead>
                <tbody>

                    {data.slice(0,5).map((demo, i) => {
                        return <tr>
                             <td>{demo.userId}</td>
                            <td>{demo.id}</td>
                           
                            <td>{demo.title}</td>


                            <td><button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => setSelectData(() => demo)} >Edit</button></td>
                            <td><button className='btn btn-danger' onClick={() => deleteData(i)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">DATA</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">

                            <div class="mb-3 mt-3">
                                <label for="id" class="form-label">ID:</label>
                                <input type="number" class="form-control" id="id" placeholder="Enter Id"
                                    name="id" value={selectData?.id} onChange={(e) => setSelectData((prev) => { return { ...prev, id: e.target.value } })} />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="UserId" class="form-label">UserId:</label>
                                <input type="text" class="form-control" id="uid" placeholder="Enter UserId"
                                    name="name" value={selectData?.userId} onChange={(e) => setSelectData((prev) => { return { ...prev, userId: e.target.value } })} />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="title" class="form-label">Title:</label>
                                <input type="text" class="form-control" id="title" placeholder="Enter Title"
                                    name="name" value={selectData?.title} onChange={(e) => setSelectData((prev) => { return { ...prev, title: e.target.value } })} />
                            </div>

                        </div>
                        <div class="modal-footer">
                        {/* <button type="submit" class="btn btn-primary" onClick={handleSave}>Update</button> */}
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>

                    

                </div>
            </div>
        </div>

    );

}

export default Contact;