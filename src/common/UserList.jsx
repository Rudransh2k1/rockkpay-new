import React, { useEffect, useState } from 'react'
import './userList.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Switch } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserList = () => {

  const [openEditModal, setOpenEditModal] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const [createdByModal, setCreatedByModal] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwt"); // Get JWT token
        const response = await axios.get("http://localhost:5000/api/auth/fetch-hierarchical-data", {
          headers: {
            "Authorization": token // Pass JWT token in the Authorization header
          }
        });
        console.log(response.data);
        setUsers(response.data);// Handle the response data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleEdit = (userId) => {
    const selectedUser = users.find(user => user.user_id === userId);
    if (selectedUser) {
      setName(selectedUser.name);
      setLocation(selectedUser.location);
      setCreatedByModal(selectedUser.createdBy);
      setDob(selectedUser.dob);
      setMobileNumber(selectedUser.mobileNumber);
      setCity(selectedUser.city);
      setPincode(selectedUser.pincode);
      setAddress(selectedUser.address);
      setOpenEditModal(true);
    }
  };


  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };
  const initialValues = {
    name: name, // Assign the state values directly here
    location: location,
    createdByModal: createdByModal,
    dob: dob,
    mobileNumber: mobileNumber,
    city: city,
    pincode: pincode,
    address: address,
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Make sure to replace 'your_edit_user_api_url' with the actual URL of your edit_user API
      const editUserUrl = 'your_edit_user_api_url';
  
      // Prepare the data to be sent in the request body
      const userData = {
        name: values.name,
        location: values.location,
        createdBy: values.createdByModal, // Assuming createdByModal is the correct field name
        dob: values.dob,
        mobileNumber: values.mobileNumber,
        city: values.city,
        pincode: values.pincode,
        address: values.address
      };
  
      // Add any additional headers if required
      const headers = {
        'Authorization': localStorage.getItem('jwt') // Assuming you need to send the JWT token for authorization
      };
  
      // Make the API call
      const response = await axios.post(editUserUrl, userData, { headers });
  
      // Handle the response
      console.log('Edit user API response:', response.data);
  
      // Reset form values and close the modal
      setSubmitting(false);
      handleCloseEditModal();
    } catch (error) {
      console.error('Error editing user:', error);
      // Handle errors here
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    location: Yup.string().required('Location is required'),
    createdByModal: Yup.string().required('Created By is required'),
    dob: Yup.date().required('Date of Birth is required'),
    mobileNumber: Yup.string().required('Mobile Number is required'),
    city: Yup.string().required('City is required'),
    pincode: Yup.string().required('PIN Code is required'),
    address: Yup.string().required('Address is required'),
  });
  const handleView = (userId) => {
    console.log(`View user with ID: ${userId}`);
  };
  const handleSwitchChange = async (userId, isActive) => {
    console.log(`User ID: ${userId}, Active: ${isActive}`);
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.post(`http://localhost:5000/api/auth/inactive_user?userId=${userId}`, null, {
        headers: {
          "Authorization": token
        }
      });
      console.log(response.data);
      // If you need to update the UI based on the response, do it here
    } catch (error) {
      console.error("Error:", error);
      // Handle errors here
    }
  };
  const handleDelete = (userId) => {
    console.log(`Delete user with ID: ${userId}`);
  };
  const userType = localStorage.getItem("user_type");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCreatedByChange = (event) => {
    setCreatedBy(event.target.value);
  };
  const handleCreatedByChangeModal = (event) => {
    setCreatedByModal(event.target.value);
  };


  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  return (
    <section className="registration-form">
      <div className="table-container">
        <p className="table-title">Registered Channel Partner</p>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: '5%' }}>Sl No.</TableCell>
                <TableCell sx={{ width: '10%' }}>User Id</TableCell>
                <TableCell sx={{ width: '10%' }}>Parent ID</TableCell>
                <TableCell sx={{ width: '15%' }}>Name</TableCell>
                {/* <TableCell sx={{ width: '10%' }}>DOB</TableCell> */}
                <TableCell sx={{ width: '15%' }}>Email</TableCell>
                <TableCell sx={{ width: '10%' }}>Mobile Number</TableCell>
                <TableCell sx={{ width: '10%' }}>City</TableCell>
                <TableCell sx={{ width: '5%' }}>PIN code</TableCell>
                <TableCell sx={{ width: '20%' }}>Address</TableCell>
                {/* <TableCell sx={{ width: '10%' }}>Created Date</TableCell> */}
                <TableCell sx={{ width: '10%' }}>User Type</TableCell>
                {userType === "Admin" ? <TableCell sx={{ width: '10%' }}>Status</TableCell> : <></>}
                {userType === "Admin" ? <TableCell sx={{ width: '10%' }}>Action</TableCell> : <></>}


              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user.user_id}>
                  <TableCell sx={{ width: '5%' }}>{index + 1}</TableCell>
                  <TableCell sx={{ width: '10%' }}>{user.user_id}</TableCell>
                  <TableCell sx={{ width: '10%' }}>{user.parent_id}</TableCell>
                  <TableCell sx={{ width: '15%' }}>{user.name}</TableCell>
                  {/* <TableCell sx={{ width: '10%' }}>{user.date_of_birth}</TableCell> */}
                  <TableCell sx={{ width: '15%' }}>{user.email}</TableCell>
                  <TableCell sx={{ width: '10%' }}>{user.mobile_number}</TableCell>
                  <TableCell sx={{ width: '10%' }}>{user.city}</TableCell>
                  <TableCell sx={{ width: '5%' }}>{user.pincode}</TableCell>
                  <TableCell sx={{ width: '20%' }}>{user.address}</TableCell>
                  {/* <TableCell sx={{ width: '10%' }}>{user.created_at}</TableCell> */}
                  <TableCell sx={{ width: '10%' }}>{user.user_type}</TableCell>
                  {userType === "Admin" && (
                    <TableCell sx={{ width: '10%' }}>
                      <Switch
                        checked={user.status === "Active"}
                        color={user.status === "Active" ? "primary" : "default"}
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

      <Dialog open={openEditModal} onClose={handleCloseEditModal}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <Field
                  as={TextField}
                  autoFocus
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
                  id="location"
                  name="location"
                  label="Location"
                  type="text"
                  fullWidth
                  error={Boolean(errors.location)}
                  helperText={<ErrorMessage name="location" />}
                />
                {/* <Field
                  as={TextField}
                  margin="dense"
                  id="createdByModal"
                  name="createdByModal"
                  label="Created By"
                  select
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors.createdByModal)}
                  helperText={errors.createdByModal && <ErrorMessage name="createdByModal" />}
                  onChange={handleCreatedByChangeModal}
                >
                  <option value="">Select dealer</option>
                  <option value="1">Dealer 1</option>
                  <option value="2">Dealer 2</option>
                  <option value="3">Dealer 3</option>
                </Field> */}
                <Field
                  as={TextField}
                  margin="dense"
                  id="dob"
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={Boolean(errors.dob)}
                  helperText={<ErrorMessage name="dob" />}
                />
                <Field
                  as={TextField}
                  margin="dense"
                  id="mobileNumber"
                  name="mobileNumber"
                  label="Mobile Number"
                  type="tel"
                  fullWidth
                  error={Boolean(errors.mobileNumber)}
                  helperText={<ErrorMessage name="mobileNumber" />}
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
    </section>
  )
}

export default UserList;
