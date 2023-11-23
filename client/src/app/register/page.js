'use client'

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image'
import {  message } from 'antd';
import Link from 'next/link';



const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});


 const index = () => {
  const [messageApi, contextHolder] = message.useMessage();
    const handleRegister = async(values) => {
    const res = await fetch('http://localhost:4000/register', {
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
    <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo.png"
        alt="Apply Online"
        width={180}
        height={37}
        priority
    />
  <div>
  
    <h1>Kindly fill up following details for Sign up</h1>
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
        email: '',
        address: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        handleRegister(values)
      }}
    >
      {({ errors, touched }) => (
        <Form className='registration'>
           {contextHolder}
          <Field name="phoneNumber"  placeholder="phoneNumber" /> 
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <br/>
          <Field name="email"  placeholder="email" /> 
          {errors.email && touched.email ? (
            <div>{errors.email}</div>
          ) : null}
          <br/>

        
          <Field name="address" type="address" placeholder="address" />
          {errors.address && touched.address ? (
            <div>{errors.address}</div>
          ) : null}
          <br/>
          <Field name="password" type="password"  placeholder="password" /> 
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <br/>
           <button type="submit" className='button'>Submit</button>
           <br/>
           If you already registered ? <br/>
          <Link href="/" className='button'>Login</Link>
          <br/>
        </Form>
      )}
    </Formik>
  </div>
</main>
)};

export default index