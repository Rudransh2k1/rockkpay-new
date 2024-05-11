import React from "react";
import { Container, Box, TextField, Button, Typography, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik } from "formik";
import * as Yup from "yup";

const SMSLogs = () => {
  const formik = useFormik({
    initialValues: {
      date: "",
      dates: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Start Date is Required"),
      dates: Yup.string().required("End Date is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <Container maxWidth="md">
      <Box mt={4} p={3} boxShadow={3} borderRadius={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6" gutterBottom>
          Date Range
        </Typography>
        <Box width="100%">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Date"
                type="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="End Date"
                type="date"
                name="dates"
                value={formik.values.dates}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.dates && Boolean(formik.errors.dates)}
                helperText={formik.touched.dates && formik.errors.dates}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" width="100%" mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="rounded-md text-sm"
                  onClick={formik.handleSubmit}
                  style={{ marginRight: "10px" }}
                >
                  SEARCH
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className="rounded-md text-sm"
                  onClick={formik.handleSubmit}
                >
                  EXPORT
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SMSLogs;
