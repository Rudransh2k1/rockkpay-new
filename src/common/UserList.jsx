import React from 'react';
import './userList.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Grid, Box } from '@mui/material';
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
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Box p={2} bgcolor="background.paper">
          <div className="input-group">
            <label htmlFor="username" className="input-label">User Name</label>
            <TextField id="username" variant="outlined" placeholder="Username" fullWidth />
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
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={9}>
        <Box p={2} bgcolor="background.paper">
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
        </Box>
      </Grid>
    </Grid>
  );
}

export default UserList;
