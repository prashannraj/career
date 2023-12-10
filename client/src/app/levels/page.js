'use client'

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';




const levelSchema = Yup.object().shape({
    levelName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    });


const index = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleRegister = async (values) => {
    const res = await fetch('http://localhost:4000/level', {
      method: 'post',
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

        <div>

        <Formik
          initialValues={{
            quataName: ''
             }}
          validationSchema={levelSchema}
          onSubmit={values => {
            handleRegister(values)
          }}
        >
          {({ errors, touched }) => (
            <Form className='registration'>
              {contextHolder}
              <Field name="levelName" placeholder="level Name:" />
              {errors.levelName && touched.levelName ? (
                <div>{errors.levelName}</div>
              ) : null}
             
              <br />
              <button type="submit" className='button'>Submit</button>
              </Form>
          )}
        </Formik>
      </div>
    </main>
  )
};

export default index