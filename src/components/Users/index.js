import React, { useState } from 'react';
import users from '../../utils/data.json'

function Users(props) {
    const [data, setData] = useState(users);
    
    const deleteData = (index) => {
        const test = [...data]
        test.splice(index, 1)
        setData(test)
        
        console.log('data', test)
        console.log("data", data)
    }

    const [selectData,setSelectData]=useState([]);


    return (
        <div style={{ textAlign: 'center' }}>
            <h2 className="border-bottom">USER DATA</h2>

            <table className='table'>
                <thead className="border-bottom">
                    <th>id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th >Actions</th>
                </thead>
                <tbody>

                    {data.map((person, index) => {
                        return <tr>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.username}</td>
                            <td>{person.email}</td>
                            <td>{person.address.street}</td>
                            <td>{person.phone}</td>
                            <td>{person.website}</td>
                            <td>{person.company.name}</td>
                            
                            <td><button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => setSelectData(() => person)} >Edit</button></td>
                            <td><button className='btn btn-danger' onClick={() => deleteData(index)}>Delete</button></td>    
                        </tr>
                    })}
                </tbody>
            </table>

            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">USER DATA</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <div className='row'>

                               <div className='col-md-6'>
                               <div class="mb-3 mt-3">
                                    <label for="id" class="form-label">ID:</label>
                                    <input type="number" class="form-control" id="id" placeholder="Enter Id"
                                        name="id" value={selectData?.id} onChange={(e) => setSelectData((prev) => { return { ...prev, id: e.target.value } })} />
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="name" class="form-label">Name:</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter Name"
                                        name="name" value={selectData?.name} onChange={(e) => setSelectData((prev) => { return { ...prev, name: e.target.value } })} />
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="username" class="form-label">UserName:</label>
                                    <input type="text" class="form-control" id="un" placeholder="Enter UserName"
                                        name="username" value={selectData?.username} onChange={(e) => setSelectData((prev) => { return { ...prev, username: e.target.value } })} />
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="email" class="form-label">Email:</label>
                                    <input type="email" class="form-control" id="mail" placeholder="Enter Email"
                                        name="email" value={selectData?.email} onChange={(e) => setSelectData((prev) => { return { ...prev, email: e.target.value } })} />
                                </div>
                               </div>

                                <div className='col-md-6'>
                                <div class="mb-3 mt-3">
                                    <label for="address" class="form-label">Address:</label>
                                    <input type="address" class="form-control" id="add" placeholder="Enter Address"
                                        name="address" value={selectData?.address} onChange={(e) => setSelectData((prev) => { return { ...prev, address: e.target.value } })} />
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="phone" class="form-label">Phone Number:</label>
                                    <input type="phone" class="form-control" id="ph" placeholder="Enter Phone Number"
                                        name="phone" value={selectData?.phone} onChange={(e) => setSelectData((prev) => { return { ...prev, phone: e.target.value } })} />
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="website" class="form-label">Website:</label>
                                    <input type="name" class="form-control" id="web" placeholder="Enter website"
                                        name="website" value={selectData?.website} onChange={(e) => setSelectData((prev) => { return { ...prev, website: e.target.value } })} />
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="company" class="form-label">Company:</label>
                                    <input type="name" class="form-control" id="comp" placeholder="Enter Company"
                                        name="company" value={selectData?.company} onChange={(e) => setSelectData((prev) => { return { ...prev, company: e.target.value } })} />
                                </div>
                                </div>
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

export default Users;