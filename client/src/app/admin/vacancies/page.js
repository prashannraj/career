'use client'

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {  message } from 'antd';


const SignupSchema = Yup.object().shape({

  postName: Yup.string().required('Required'),
  RequiredQualification:Yup.string().required('Required'),
  Level:Yup.string(),
  Service:Yup.string(),
  Image:Yup.string(),
  ExamFee:Yup.string()
});

export const index = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const productHandle = async(values) => {
    const res = await fetch('http://localhost:4000/vacancies', {
        method:'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      const data = await res.json()
        messageApi.open({
          type: res.status == 200 ? 'success': 'error',
          content: data.msg,
        });
      console.log(res)
    } 
  
  return(
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div className='form'>
    <h1>vacancies Information</h1>
    
    
    <Formik
      initialValues={{
       
        postName : '',
        requiredQualification:'',
        level:'',
        service:'',
        image:'',
        examFee:'', 
      }}
      // validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        productHandle(values)
      }}
    >
      {({ errors, touched }) => (
        <Form className='registration'>
         {contextHolder}
          <Field name="postName" type="text" placeholder="Enter Post Name" />
          {errors.postName && touched.postName ? <div>{errors.postName}</div> : null}
          <br />
          <br />
          <Field name="requiredQualification" type="text" placeholder="Enter about Required Qualification"/>
          {errors.requiredQualification && touched.requiredQualification? <div>{errors.requiredQualification}</div> : null}
          <br />
          <br />
          <Field name="level" type="textr" placeholder="Enter Post's Level" />
          {errors.level && touched.level ? <div>{errors.level}</div> : null}
          <br />
          <br />
          <Field name="service" type="text" placeholder="Enter Post's Service" />
          {errors.service && touched.service ? <div>{errors.service}</div> : null}
          <br />
          <br />
          <Field name="image" type="file" placeholder="Enter Post's Image" />
          {errors.image && touched.image ? <div>{errors.image}</div> : null}
          <br />
          <br />
          <Field name="examFee" type="text" placeholder="Enter Exam Fee" />
          {errors.examFee && touched.examFee ? <div>{errors.examFee}</div> : null}
          <br />
          <br />
          <button type="submit" className='button'>Create</button>
          <br />
          
        </Form>
      )}
    </Formik>
  </div>
  </main>
)};
export default index 