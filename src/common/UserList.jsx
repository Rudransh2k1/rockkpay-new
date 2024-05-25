import React, { useEffect, useState } from 'react';
import './userList.css';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Paper, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TextField, Switch
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const userType = localStorage.getItem("user_type");

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.get("https://www.api.rockkpay.com/api/auth/fetch-hierarchical-data", {
        headers: {
          "Authorization": token
        }
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching user data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (userId) => {
    const user = users.find(user => user.user_id === userId);
    if (user) {
      setSelectedUser(user);
      setOpenEditModal(true);
    }
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelectedUser(null);
    fetchData();
  };


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = localStorage.getItem('jwt');
      const response = await axios.put(`https://www.api.rockkpay.com/api/update/user/${selectedUser.user_id}`, values, {
        headers: {
          'Authorization': token
        }
      });
      // console.log('Edit user API response:', response.data);
      setUsers(users.map(user => user.user_id === selectedUser.user_id ? response.data : user));
      handleCloseEditModal();
      toast.success("User updated successfully");
      fetchData();
    } catch (error) {
      console.error('Error editing user:', error);
      toast.error("Error editing user");
    } finally {
      setSubmitting(false);
    }
  };


  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    date_of_birth: Yup.date().required('Date of Birth is required'),
    mobile_number: Yup.string().required('Mobile Number is required'),
    city: Yup.string().required('City is required'),
    pincode: Yup.string().required('PIN Code is required'),
    address: Yup.string().required('Address is required'),
  });

  const handleSwitchChange = async (userId, isActive) => {
    try {
      const token = localStorage.getItem("jwt");
      let response;
      if (!isActive) {
        // If the user is active, call the deactivate API
        response = await axios.put(`https://www.api.rockkpay.com/api/changeStatusInActive/${userId}`, null, {
          headers: {
            "Authorization": token
          }
        });
      } else {
        // If the user is inactive, call the activate API
        response = await axios.put(`https://www.api.rockkpay.com/api/changeStatusActive/${userId}`, null, {
          headers: {
            "Authorization": token
          }
        });
      }
      // console.log(response.data);
      // Fetch the latest user data after changing the status
      fetchData();
      toast.success(`User ${isActive ? "activated" : "deactivated"} successfully`);
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Error ${isActive ? "deactivating" : "activating"} user`);
    }
  };

  const handleDelete = async (userId) => {
    // console.log(`Delete user with ID: ${userId}`);
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.delete(`https://www.api.rockkpay.com/api/protected/delete/${userId}`, {
        headers: {
          "Authorization": token
        }
      });
      // console.log(response.data);
      setUsers(users.filter(user => user.user_id !== userId));
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error deleting user");
    }
  };

  return (
    <section className="registration-form">
      <ToastContainer />
      <div className="table-container">
        <p className="table-title">Registered Partners</p>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: '5%', textAlign: 'center' }}>Sl No.</TableCell>
                <TableCell align="center" sx={{ width: '10%', textAlign: 'center' }}>User Id</TableCell>
                <TableCell align="center" sx={{ width: '10%', textAlign: 'center' }}>Parent ID</TableCell>
                <TableCell align="center" sx={{ width: '15%', textAlign: 'center' }}>Name</TableCell>
                <TableCell align="center" sx={{ width: '15%', textAlign: 'center' }}>Email</TableCell>
                <TableCell align="center" sx={{ width: '10%', textAlign: 'center' }}>Mobile Number</TableCell>
                <TableCell align="center" sx={{ width: '10%', textAlign: 'center' }}>City</TableCell>
                <TableCell align="center" sx={{ width: '5%', textAlign: 'center' }}>PIN code</TableCell>
                <TableCell align="center" sx={{ width: '20%', textAlign: 'center', wordWrap: 'break-word' }}>Address</TableCell>
                <TableCell align="center" sx={{ width: '10%', textAlign: 'center' }}>User Type</TableCell>
                {userType === "Admin" && <TableCell align="center" sx={{ width: '10%', textAlign: 'center' }}>Status</TableCell>}
                {userType === "Admin" && <TableCell align="center" sx={{ width: '10%', textAlign: 'center' }}>Action</TableCell>}
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user.user_id}>
                  <TableCell sx={{ width: '5%' }}>{index + 1}</TableCell>
                  <TableCell sx={{ width: '10%' }}>{user.user_id}</TableCell>
                  <TableCell sx={{ width: '10%' }}>{user.parent_id}</TableCell>
                  <TableCell sx={{ width: '15%' }}>{user.name}</TableCell>
                  <TableCell sx={{ width: '15%' }}>{user.email}</TableCell>
                  <TableCell sx={{ width: '10%' }}>{user.mobile_number}</TableCell>
                  <TableCell sx={{ width: '10%' }}>{user.city}</TableCell>
                  <TableCell sx={{ width: '5%' }}>{user.pincode}</TableCell>
                  <TableCell sx={{ width: '20%', maxWidth: 200, wordWrap: 'break-word' }}>{user.address}</TableCell>
                  <TableCell sx={{ width: '10%' }}>{user.user_type}</TableCell>
                  {userType === "Admin" && (
                    <TableCell sx={{ width: '10%' }}>
                      <Switch
                        checked={user.status === "Active"}
                        color="primary"
                        onChange={(event) => handleSwitchChange(user.user_id, event.target.checked)}
                      />
                    </TableCell>
                  )}
                  {userType === "Admin" && (
                    <TableCell sx={{ width: '10%' }}>
                      <EditIcon color="primary" onClick={() => handleEdit(user.user_id)} />
                      <DeleteIcon color="error" onClick={() => handleDelete(user.user_id)} />
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {selectedUser && (
        <Dialog open={openEditModal} onClose={handleCloseEditModal}>
          <DialogTitle>Edit User</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                name: selectedUser.name,
                date_of_birth: selectedUser.date_of_birth,
                mobile_number: selectedUser.mobile_number,
                city: selectedUser.city,
                pincode: selectedUser.pincode,
                address: selectedUser.address,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors }) => (
                <Form>
                  <Field
                    as={TextField}
                    margin="dense"
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    error={Boolean(errors.name)}
                    helperText={<ErrorMessage name="name" />}
                  />
                  <Field
                    as={TextField}
                    margin="dense"
                    id="date_of_birth"
                    name="date_of_birth"
                    label="Date of Birth"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    error={Boolean(errors.date_of_birth)}
                    helperText={<ErrorMessage name="date_of_birth" />}
                  />
                  <Field
                    as={TextField}
                    margin="dense"
                    id="mobile_number"
                    name="mobile_number"
                    label="Mobile Number"
                    type="tel"
                    fullWidth
                    error={Boolean(errors.mobile_number)}
                    helperText={<ErrorMessage name="mobile_number" />}
                  />
                  <Field
                    as={TextField}
                    margin="dense"
                    id="city"
                    name="city"
                    label="City"
                    type="text"
                    fullWidth
                    error={Boolean(errors.city)}
                    helperText={<ErrorMessage name="city" />}
                  />
                  <Field
                    as={TextField}
                    margin="dense"
                    id="pincode"
                    name="pincode"
                    label="PIN Code"
                    type="text"
                    fullWidth
                    error={Boolean(errors.pincode)}
                    helperText={<ErrorMessage name="pincode" />}
                  />
                  <Field
                    as={TextField}
                    margin="dense"
                    id="address"
                    name="address"
                    label="Address"
                    multiline
                    rows={3}
                    fullWidth
                    error={Boolean(errors.address)}
                    helperText={<ErrorMessage name="address" />}
                  />
                  <DialogActions>
                    <Button onClick={handleCloseEditModal} color="primary">
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting} color="primary">
                      Submit
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default UserList;
