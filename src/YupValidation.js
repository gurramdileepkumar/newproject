import { useFormik } from 'formik';
import React from 'react'
import * as yup from 'yup';

export default function YupValidation() {
    const formik = useFormik({
        initialValues:{
            name:'',
            location:'',
            salary:''
        },
        validationSchema:yup.object({
            name:yup.string().min(3,'atleast 3 char').max(9,'not exceed 9 char')
            .matches(/[A-Za-z]* $/,'only alphabets are allowed').required('enter name'),
            location:yup.string().required('enter location'),
            salary:yup.string().required('enter salary')
        }),
        onSubmit:values =>{
            alert(JSON.stringify(values));
        }
    })
    return (
        <div>
            <h1>EmployeeData</h1>
            <form onSubmit={formik.handleSubmit}>
                <label>Employee name:</label>
                <input type="text" name="name" {...formik.getFieldProps('name')} /><br/><br/>
                {formik.touched.name && formik.errors.name ?<div style={{color:"red"}}>{formik.errors.name}</div>:null}
                <label>Employee location:</label>
                <input type="text" name="location" {...formik.getFieldProps('location')} /><br/><br/>
                {formik.touched.location && formik.errors.location ?<div style={{color:"red"}}>{formik.errors.location}</div>:null}
                <label>Employee salary:</label>
                <input type="text" name="salary" {...formik.getFieldProps('salary')} /><br/><br/>
                {formik.touched.salary && formik.errors.salary ?<div style={{color:"red"}}>{formik.errors.salary}</div>:null}
                <button className="btn btn-primary" type="submit">submit</button>


            </form>
            
        </div>
    )
}
