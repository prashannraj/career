'use client'

import React from 'react';
import dayjs from "dayjs";
import { object, date } from "yup";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image'
import { message } from 'antd';
import Link from 'next/link';
import NavBar from '../component/NavBar/page';


const BirthdayForm = () => {
  const eighteenYear = dayjs().subtract(18, "Year").format("YYYY-MM-DD");
  const minage = object({
    birthday: date().max(eighteenYear, "You must be at least 18 years old to register"),
  })
}

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  birthday: Yup.string(),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  role: Yup.string(),
});


const index = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleRegister = async (values) => {
    const res = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const data = await res.json()
    messageApi.open({
      type: res.status == 200 ? 'success' : 'error',
      content: data.msg,
    });
    console.log(res)
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <NavBar />
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
            fullName: '',
            phoneNumber: '',
            password: '',
            email: '',
            birthday: '',
            address: '',
            role: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            handleRegister(values)
          }}
        >
          {({ errors, touched }) => (
            <Form className='registration'>
              {contextHolder}
              <Field name="fullName" placeholder="Full Name:" />
              {errors.fullName && touched.fullName ? (
                <div>{errors.fullName}</div>
              ) : null}
              <br />

              <Field name="phoneNumber" placeholder="phoneNumber" />
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br />

              <Field name="email" placeholder="email" />
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : null}
              <br />

              <label for="birthday">Select Date of Birth:</label>
              <Field name="birthday" type="date" className="input input-bordered" />
              <br />

              <Field name="address" type="address" placeholder="Address" />
              {errors.address && touched.address ? (
                <div>{errors.address}</div>
              ) : null}
              <br />
              <Field component='select' name='role' id='roles' placeholder='Choose your role'>
                <option disabled >Choose your role</option>
                <option value="choose">choose</option>
                <option value="candidate">Candidate</option>
                <option value="officer">Officer</option>
              </Field>
              {errors.role && touched.role ? (
                <div className='errors'>{errors.role}</div>
              ) : null}
              <br />
              <Field name="password" type="password" placeholder="Password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <br />
              <button type="submit" className='button'>Submit</button>
              <br />
              If you already registered ? <br />
              <Link href="/login" className='button'>Login</Link>
              <br />
            </Form>
          )}
        </Formik>
      </div>
    </main>
  )
};

export default index