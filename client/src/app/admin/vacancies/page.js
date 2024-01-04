'use client'

import React from 'react';
import dayjs from "dayjs";
import { object, date } from "yup";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { message } from 'antd';


const SchedulePostForm = () => {
  const minPublishDate = dayjs().add(2, "day").format("YYYY-MM-DD");
  const sinPublishDate = dayjs().add(21, "day").format("YYYY-MM-DD");
  const douPublishDate = dayjs().add(27, "day").format("YYYY-MM-DD");
  const dateSchema = object({
    minPublishDate: date().min(minPublishDate, "Min date must be 2 days form today"),
    sinPublishDate: date().min(sinPublishDate, "Single date must be 21 days form today"),
    douPublishDate: date().min(douPublishDate, "double date must be 7 days after single publish date")
  })
}

const vacancySchema = Yup.object().shape({

  postName: Yup.string().required('Required'),
  requiredQualification: Yup.string().required('Required'),
  level: Yup.string(),
  service: Yup.string(),
  minPublishDate: Yup.string(),
  sinPublishDate: Yup.string(),
  douPublishDate: Yup.string(),
  image: Yup.string(),
  examFeeSingle: Yup.string(),
  examFeeDouble: Yup.string()
});

export const index = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const productHandle = async (values) => {
    const res = await fetch('http://localhost:4000/vacancies', {
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
      <div className='form'>
        <h1>vacancies Information</h1>


        <Formik
          initialValues={{

            postName: '',
            requiredQualification: '',
            level: '',
            service: '',
            minPublishDate: '',
            sinPublishDate: '',
            douPublishDate: '',
            examFeeSingle: '',
            examFeeDouble: ''
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
              <Field name="requiredQualification" type="textarea" placeholder="Enter about Required Qualification" />
              {errors.requiredQualification && touched.requiredQualification ? <div>{errors.requiredQualification}</div> : null}
              <br />
              <br />
              <Field name="level" type="text" placeholder="Enter Post's Level" />
              {errors.level && touched.level ? <div>{errors.level}</div> : null}
              <br />
              <br />
              <Field name="service" type="text" placeholder="Enter Post's Service" />
              {errors.service && touched.service ? <div>{errors.service}</div> : null}
              <br />
              <br />
              <label for="minPublishDate">Select Date for Vacancy Publish:</label>
              <Field name="minPublishDate" type="date" className="input input-bordered" />
              {errors.minPublishDate && touched.minPublishDate ? <div>{errors.minPublishDate}</div> : null}
              <br />
              <br />
              <label for="sinPublishDate">Select Date for Single Fee:</label>
              <Field name="sinPublishDate" type="date" className="input input-bordered" />
              {errors.sinPublishDate && touched.sinPublishDate ? <div>{errors.sinPublishDate}</div> : null}

              <br />
              <br />
              <label for="douPublishDate">Select Date for Double Fee:</label>
              <Field name="douPublishDate" type="date" className="input input-bordered" />
              {errors.douPublishDate && touched.douPublishDate ? <div>{errors.douPublishDate}</div> : null}

              <br />
              <br />
              <Field name="image" type="file" placeholder="Enter Post's Image" />
              {errors.image && touched.image ? <div>{errors.image}</div> : null}
              <br />
              <br />
              <Field name="examFeeSingle" type="text" placeholder="Enter Single Exam Fee" />
              {errors.examFeeSingle && touched.examFeeSingle ? <div>{errors.examFeeSingle}</div> : null}
              <br />
              <br />
              <Field name="examFeeDouble" type="text" placeholder="Enter Double Exam Fee" />
              {errors.examFeeDouble && touched.examFeeDouble ? <div>{errors.examFeeDouble}</div> : null}
              <br />
              <br />
              <button type="submit" className='button'>Create</button>
              <br />

            </Form>
          )}
        </Formik>
      </div>
    </main>
  )
};
export default index 