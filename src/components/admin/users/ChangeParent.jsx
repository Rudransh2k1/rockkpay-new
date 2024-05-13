import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./changeParent.css"

const ChangeParent = () => {
    const formik = useFormik({
        initialValues: {
          childUser: "",
          parentUser: "",
          oldParent: "",
          newParent: "",
        },
        validationSchema: Yup.object({
          childUser: Yup.string().required("Child Name is required"),
          parentUser: Yup.string().required("Parent Name is required"),
          oldParent: Yup.string().required("Old Parent Name is required"),
          newParent: Yup.string().required("New Parent Name is required"),
        }),
        onSubmit: (values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        },
      });

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <form onSubmit={formik.handleSubmit} className="main-contain">
      <div className="form-gro">
        <p className="form-lab">Child User:</p>
        <TextField
          type="text"
          name="childUser"
          className="input-fiel"
          value={formik.values.childUser}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.childUser && Boolean(formik.errors.childUser)}
          helperText={formik.touched.childUser && formik.errors.childUser}
        />
      </div>

      <div className="form-gro">
        <p className="form-lab">Parent User:</p>
        <TextField
          type="text"
          name="parentUser"
          className="input-fiel"
          value={formik.values.parentUser}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.parentUser && Boolean(formik.errors.parentUser)}
          helperText={formik.touched.parentUser && formik.errors.parentUser}
        />
      </div>

      <Button type="submit" variant="contained" color="primary" className="submit-butto">
        Assign
      </Button>

      <div className="form-gro">
        <p className="form-lab">Old Parent:</p>
        <TextField
          type="text"
          name="oldParent"
          className="input-fiel"
          value={formik.values.oldParent}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.oldParent && Boolean(formik.errors.oldParent)}
          helperText={formik.touched.oldParent && formik.errors.oldParent}
        />
      </div>

      <div className="form-gro">
        <p className="form-lab">New Parent:</p>
        <TextField
          type="text"
          name="newParent"
          className="input-fiel"
          value={formik.values.newParent}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.newParent && Boolean(formik.errors.newParent)}
          helperText={formik.touched.newParent && formik.errors.newParent}
        />
      </div>

      <Button  type="submit" variant="contained" color="primary" className="submit-butto">
        Assign
      </Button>
    </form>
    </div>
  )
}

export default ChangeParent