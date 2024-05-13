import React from 'react'
import './userList.css'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'

const UserList = () => {
  return (
//     <section className="registration-form">
//     <div className="input-group">
//         <label htmlFor="username" className="input-label">User Name: </label>
//         <input type="text" id="username" placeholder="Username/Outlet/Pancard Name" />
//     </div>
//     <div className="">
//         <label htmlFor="location" className="input-label">Location: </label>
//         <input type="number" id="location" placeholder="%" />
//     </div>
//     <div className="input-group" >
//         <label  htmlFor="created-by" className="input-label">Created By: </label>
//         <select name="created-by" id="created-by">
//             <option value="">Select dealer</option>
//             <option value="1">Dealer 1</option>
//             <option value="2">Dealer 2</option>
//             <option value="3">Dealer 3</option>
//         </select>
//         <div style={{marginTop: "1%"}} className="checkbox-group">
//             <input type="checkbox" id="direct-downline" />
//             <label style={{paddingLeft: "1%"}} htmlFor="direct-downline">Search Direct Downline only</label>
//         </div>
//     </div>
//     <div  className="button-group">
//         <button type="button" className="btn-search">SEARCH</button>
//         <button style={{marginLeft:"1%"}} type="button" className="btn-export">EXPORT</button>
//     </div>
//     <div className="table-container">
//         <p className="table-title">Registered Channel Partner</p>
//         <table>
//             <thead>
//                 <tr>
//                     <th>Sl No.</th>
//                     <th>User Id</th>
//                     <th>Parent ID</th>
//                     <th>Name</th>
                    
//                     <th>Date Of Birth</th>
//                     <th>Email</th>
//                     <th>Mobile Number</th>
//                     <th>State</th>
//                     <th>Address</th>
//                     <th>Created Date</th>
//                     <th>User Type</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>12345</td>
//                     <td>67890</td>
//                     <td>John Doe</td>
//                     <td>1990-01-01</td>
//                     <td>john@example.com</td>
//                     <td>9876543210</td>
//                     <td>State</td>
//                     <td>123, Street Name</td>
//                     <td>2024-05-11</td>
//                     <td>Dealer</td>
//                     <td>Active</td>
//                     <td>
//                         <button type="button" className="btn-edit">Edit</button>
//                     </td>
//                 </tr>
//                 {/* Additional rows can be added here */}
//             </tbody>
//         </table>
//     </div>
// </section>

<section  className="registration-form">
<div className="form-container" style={{ width: "25%" }}>
    <div className="input-group">
        <label htmlFor="username" className="input-label">User name</label>
        <TextField id="username" variant="outlined" placeholder="Username/Outlet/Pancard Name" fullWidth />
    </div>
    <div className="input-group">
        <label htmlFor="location" className="input-label">Location</label>
        <TextField id="location" variant="outlined" type="number" placeholder="%" fullWidth />
    </div>
    <div className="input-group">
        <label htmlFor="created-by" className="input-label">Created By:</label>
        <TextField id="created-by" select variant="outlined" fullWidth>
            <option value="">Select dealer</option>
            <option value="1">Dealer 1</option>
            <option value="2">Dealer 2</option>
            <option value="3">Dealer 3</option>
        </TextField>
        <div style={{marginTop:"4%"}} className="checkbox-group">
            <input type="checkbox" id="direct-downline" />
            <label htmlFor="direct-downline">Search Direct Downline only</label>
        </div>
    </div>
    <div style={{marginTop:"4%"}} className="button-group">
        <Button  variant="contained" color="primary">SEARCH</Button>
        <Button sx={{marginLeft:"4%"}} variant="contained" color="primary">EXPORT</Button>
    </div>
    </div>
    <div className="table-container">
        <p className="table-title">Registered Channel Partner</p>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Sl No.</TableCell>
                        <TableCell>User Id</TableCell>
                        <TableCell>Parent ID</TableCell>
                        <TableCell>Name</TableCell>
                      
                        <TableCell>Date Of Birth</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Mobile Number</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>District</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>PIN code</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Created Date</TableCell>
                        <TableCell>User Type</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>12345</TableCell>
                        <TableCell>67890</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>1990-01-01</TableCell>
                        <TableCell>john@example.com</TableCell>
                        <TableCell>9876543210</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>District</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>123456</TableCell>
                        <TableCell>123, Street Name</TableCell>
                        <TableCell>2024-05-11</TableCell>
                        <TableCell>Dealer</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary">Edit</Button>
                        </TableCell>
                    </TableRow>
                    {/* Additional rows can be added here */}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
</section>
  )
}

export default UserList