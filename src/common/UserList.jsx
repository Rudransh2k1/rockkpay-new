import React from 'react';
import './userList.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const UserList = () => {
  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
  };

  const handleView = (userId) => {
    
    console.log(`View user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    
    console.log(`Delete user with ID: ${userId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '5%' }}>Sl No.</TableCell>
            <TableCell sx={{ width: '10%' }}>User Id</TableCell>
            <TableCell sx={{ width: '10%' }}>Parent ID</TableCell>
            <TableCell sx={{ width: '15%' }}>Name</TableCell>
            <TableCell sx={{ width: '10%' }}>DOB</TableCell>
            <TableCell sx={{ width: '15%' }}>Email</TableCell>
            <TableCell sx={{ width: '10%' }}>Mobile Number</TableCell>
            <TableCell sx={{ width: '10%' }}>City</TableCell>
            <TableCell sx={{ width: '5%' }}>PIN code</TableCell>
            <TableCell sx={{ width: '20%' }}>Address</TableCell>
            <TableCell sx={{ width: '10%' }}>Created Date</TableCell>
            <TableCell sx={{ width: '10%' }}>User Type</TableCell>
            <TableCell sx={{ width: '10%' }}>Status</TableCell>
            <TableCell sx={{ width: '10%' }}>Action</TableCell>
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
            <TableCell>City</TableCell>
            <TableCell>123456</TableCell>
            <TableCell>123, Street Name,gfdtydtydddfssfdsfdsffd</TableCell>
            <TableCell>2024-05-11</TableCell>
            <TableCell>Dealer</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <EditIcon color="primary" onClick={() => handleEdit(12345)} />
              <VisibilityIcon color="primary" onClick={() => handleView(12345)} />
              <DeleteIcon color="error" onClick={() => handleDelete(12345)} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserList;
