'use client'

import React, { useState, useEffect } from 'react';
import dayjs from "dayjs";
import { object, date } from "yup";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'

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
  const router = useRouter()
  const dispatch= useDispatch()
  const [messageApi, contextHolder] = message.useMessage();
  const [postList, setPostList] = useState({})
  const [qualificationList, setQualificationList] = useState({})
  const [levelList, setLevelList] = useState({})
  const [serviceList, setServiceList] = useState({})


  const postFetch = async () => {
    const res = await fetch(`http://localhost:4000/posts`)
    const data = await res.json()
    setPostList(data.postList)
  }

  const qualificationFetch = async () => {
    const res = await fetch(`http://localhost:4000/qualifications`)
    const data = await res.json()
    setQualificationList(data.qualificationList)
  }

  const levelFetch = async () => {
    const res = await fetch(`http://localhost:4000/levels`)
    const data = await res.json()
    setLevelList(data.levelList)
  }

  const serviceFetch = async () => {
    const res = await fetch(`http://localhost:4000/services`)
    const data = await res.json()
    setServiceList(data.serviceList)
  }


  useEffect(()=>{
    postFetch(),
    qualificationFetch(),
    levelFetch(),
    serviceFetch()
  },[])

  const vacancyHandle = async (values) => {
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

            postName: postList?.[0]?.postName,
            requiredQualification: qualificationList?.[0]?.requiredQualification,
            level: levelList?.[0]?.levelName, 
            service: serviceList?.[0]?.serviceName,
            minPublishDate: '',
            sinPublishDate: '',
            douPublishDate: '',
            image: '',
            examFeeSingle: '',
            examFeeDouble: ''
          }}
          enableReinitialize
          // validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            dispatch(setVacancyDetails(values));
            vacancyHandle(values)
          }}
        >
          {({ errors, touched }) => (
            <Form className='registration'>
              {contextHolder}
              <Field as='select' name='postName' placeholder="select Post's Name">
                {postList.length > 0 && postList.map((item) => {
                  return <option value={item.postName}>{item.postName}</option>
                })}
              </Field>
              {errors.postName && touched.postName ? <div>{errors.postName}</div> : null}

              <br />
              <br />
                <Field as='select' name='requiredQualification' placeholder="select required Qualification" >
                  {qualificationList.length > 0 && qualificationList.map((item) => {
                    return <option value={item.requiredQualification}>{item.requiredQualification}</option>
                  })}
                </Field>
                {errors.requiredQualification && touched.requiredQualification ? <div>{errors.requiredQualification}</div> : null}
                <br />
                <br />
                  <Field as='select' name='level' placeholder="select level">
                    {levelList.length > 0 && levelList.map((item) => {
                      return <option value={item.levelName}>{item.levelName}</option>
                    })}
                  </Field>
                  {errors.levelName && touched.levelName ? <div>{errors.levelName}</div> : null}
                  <br />
                  <br />
                    <Field as='select' name='service' placeholder="select service">
                      {serviceList.length > 0 && serviceList.map((item) => {
                        return <option value={item.serviceName}>{item.serviceName}</option>
                      })}
                    </Field>
                    {errors.serviceName && touched.serviceName ? <div>{errors.serviceName}</div> : null}
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