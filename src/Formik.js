import React from 'react'
import { useFormik } from 'formik'

 const Formik = () => {
     const validateFormik = empData =>{
    const errors = {};
    if( !empData.name){
        errors.name = "enter name";
    }
    else if(empData.name.length < 3){
        errors.name ="length should be atleast 3 char";
    }
    if(!empData.salary){
        errors.salary = "enter salary";
    }

    if( !empData.location){
        errors.location = "enter location";
    }
    else if(empData.location.length < 5){
        errors.location ="length should be at least 5";
    }
    return errors
}
    const formik = useFormik({
       
        initialValues:{
            name :'',
            location : '',
            salary : ''
        },
        validate : validateFormik,
        onSubmit : values =>{
            alert(JSON.stringify(values));
        }
    })
    return (
        <div>
            <h1>EmployeeData</h1>
            <form onSubmit={formik.handleSubmit}>

                <label>name of the employee</label>

                <input type="text" name ="name"
                value={formik.values.name} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}/><br /><br />

                {formik.touched.name && formik.errors.name ? <span style={{color:'red'}}>{formik.errors.name}</span> : null}<br />

                <label>salary of  employee</label>

                 <input type="number" name ="salary" 
                value={formik.values.salary} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} /><br /><br />

                {formik.touched.salary && formik.errors.salary ? <span style={{color:'red'}}>{formik.errors.salary}</span> : null}<br />

                <label>location of the employee</label>

                 <input type="text" name ="location" 
                onChange={formik.handleChange}
                value={formik.values.location} 
                onBlur={formik.handleBlur}/><br /><br />

                {formik.touched.location && formik.errors.location ? <span style={{color:'red'}}>{formik.errors.location}</span> : null}<br />

                <button type="submit" class="btn btn-success">submit</button>
                
            </form>
            
        </div>
    )
}
export default Formik;