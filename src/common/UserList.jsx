import React, { useState } from 'react'
import './userList.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Switch } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };
  const initialValues = {
    name: '',
    location: '',
    createdByModal: '',
    dob: '',
    mobileNumber: '',
    city: '',
    pincode: '',
    address: '',
  };
  const handleSubmit = (values, { setSubmitting }) => {

    console.log('Form values:', values);

    setSubmitting(false);
    handleCloseEditModal();
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
      <div className="form-container" style={{ width: "25%" }}>
        <div className="input-grou">
          <label htmlFor="username" className="input-label">User Name</label>
          <TextField id="username" variant="outlined" placeholder="Username" fullWidth />
        </div>
        <div className="input-grou">
          <label htmlFor="location" className="input-label">Location</label>
          <TextField id="location" variant="outlined" type="number" placeholder="%" fullWidth />
        </div>
        <div className="input-grou">
          <label htmlFor="created-by" className="input-label">Created By:</label>
          <TextField id="created-by" select variant="outlined" fullWidth onChange={handleCreatedByChange}>
            <option value="">Select dealer</option>
            <option value="1">Dealer 1</option>
            <option value="2">Dealer 2</option>
            <option value="3">Dealer 3</option>
          </TextField>

          <label htmlFor="created-by" className="input-label">User Type:</label>
          {userType == "Admin" ? null : <> <TextField id="created-by" select variant="outlined" fullWidth>
            {/* <option value="">Select User Type</option> */}
            <option value="Channel_Partner">Channel Partner</option>
            <option value="Super_Distributor">Super Distributor</option>
            <option value="Master_Distributor">Master Distributor </option>
            <option value="Distributor">Distributor</option>

            <option value="Retailer">Retailer</option>
          </TextField></>}

          {userType == "Channel Partner" ? <> <TextField id="created-by" select variant="outlined" fullWidth>
            {/* <option value="">Select User Type</option> */}
            {/* <option value="Channel_Partner">Channel Partner</option> */}
            <option value="Super_Distributor">Super Distributor</option>
            <option value="Master_Distributor">Master Distributor </option>
            <option value="Distributor">Distributor</option>

            <option value="Retailer">Retailer</option>
          </TextField></> : null}
          {userType == "Super_Distributor" ? <> <TextField id="created-by" select variant="outlined" fullWidth>
            {/* <option value="">Select User Type</option> */}
            {/* <option value="Channel_Partner">Channel Partner</option> */}
            {/* <option value="Super_Distributor">Super Distributor</option> */}
            <option value="Master_Distributor">Master Distributor </option>
            <option value="Distributor">Distributor</option>

            <option value="Retailer">Retailer</option>
          </TextField></> : null}
          {userType == "Master_Distributor" ? <> <TextField id="created-by" select variant="outlined" fullWidth>
            {/* <option value="">Select User Type</option> */}
            {/* <option value="Channel_Partner">Channel Partner</option> */}
            {/* <option value="Super_Distributor">Super Distributor</option> */}
            {/* <option value="Master_Distributor">Master Distributor </option> */}
            <option value="Distributor">Distributor</option>

            <option value="Retailer">Retailer</option>
          </TextField></> : null}
          {userType == "Distributor" ? <> <TextField id="created-by" select variant="outlined" fullWidth>
            {/* <option value="">Select User Type</option> */}
            {/* <option value="Channel_Partner">Channel Partner</option> */}
            {/* <option value="Super_Distributor">Super Distributor</option> */}
            {/* <option value="Master_Distributor">Master Distributor </option> */}
            {/* <option value="Distributor">Distributor</option> */}

            <option value="Retailer">Retailer</option>
          </TextField></> : null}




        </div>
        <div style={{ marginTop: "4%" }} className="checkbox-group">
          <input type="checkbox" id="direct-downline" />
          <label htmlFor="direct-downline">Search Direct Downline only</label>
        </div>
        <div style={{ marginTop: "4%" }} className="button-group">
          <Button variant="contained" color="primary">SEARCH</Button>
          <Button sx={{ marginLeft: "4%" }} variant="contained" color="primary">EXPORT</Button>
        </div>
      </div>
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
                <TableCell sx={{ width: '10%' }}>DOB</TableCell>
                <TableCell sx={{ width: '15%' }}>Email</TableCell>
                <TableCell sx={{ width: '10%' }}>Mobile Number</TableCell>
                <TableCell sx={{ width: '10%' }}>City</TableCell>
                <TableCell sx={{ width: '5%' }}>PIN code</TableCell>
                <TableCell sx={{ width: '20%' }}>Address</TableCell>
                <TableCell sx={{ width: '10%' }}>Created Date</TableCell>
                <TableCell sx={{ width: '10%' }}>User Type</TableCell>
                {userType === "Admin" ? <TableCell sx={{ width: '10%' }}>Status</TableCell> : <></>}
                {userType === "Admin" ? <TableCell sx={{ width: '10%' }}>Action</TableCell> : <></>}

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
                {userType === "Admin" ?  <Switch
                    checked={status}
                    color={status ? "primary" : "default"}
                    onChange={() => setStatus(!status)}
                  />:<></>
                  }
                {userType === "Admin" ? <TableCell>
                  <EditIcon color="primary" onClick={() => handleEdit(12345)} />
                  {/* <VisibilityIcon color="primary" onClick={() => handleView(12345)} /> */}
                  <DeleteIcon color="error" onClick={() => handleDelete(12345)} />
                </TableCell> : <></>}


              </TableRow>
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
