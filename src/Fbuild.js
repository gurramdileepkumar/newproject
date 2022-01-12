import React from 'react'
import { useFormik } from 'formik'

export const Fbuild = () => {
    const validateFormik = empData =>{
        const errors = {};
        if(!empData.name){
            errors.name = "enter name"
        }
        else if (empData.name.length > 10){
            errors.name = "length should be less than to 10"
        }
        if(!empData.salary){
            errors.salary = "enter salary"
        }
        if(!empData.location){
            errors.location ="enter location"
        }
        else if (empData.location.length > 10){
            errors.location = "length should be less than to 10"
        }
        return errors;
    }
  const formik = useFormik({
      initialValues :{
          name :'',
          salary :'',
          location :''
      },
      validate : validateFormik,
      onSubmit : values =>{
        alert(JSON.stringify(values));
    }
     
  })

    return (
        <div>
            <h1>employee data</h1>
            <form onSubmit={formik.handleSubmit}>
                <label>employee name :</label>
                <input type="text" name="name" 
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/><br /><br />
                {formik.touched.name && formik.errors.name ? <span style={{color:"red"}}>{formik.errors.name}</span> : null}<br/>

                <label>employee salary :</label>
                <input type="number" name="salary" 
                value={formik.values.salary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/><br /><br />
                {formik.touched.salary && formik.errors.salary ?<span style={{color:"red"}}>{formik.errors.salary}</span> :null}<br/>


                <label>employee location :</label>
                <input type="text" name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/><br /><br />
                {formik.touched.location && formik.errors.location ?<span style={{color:"red"}}>{formik.errors.location}</span> :null}<br/>


                <button type="submit" class="btn btn-primary">submit</button>
            </form>
        </div>
    )
}
