'use client'
import React, {useState, useEffect} from "react";

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { message, Modal } from 'antd';
import Table from '../../app/component/Table/page';




const UniversitySchema = Yup.object().shape({
    universityName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    });


const index = () => {
  const [universityList, setUniversityList] = useState([])
  const [messageApi, contextHolder] = message.useMessage();
  const handleRegister = async (values) => {
    const res = await fetch('http://localhost:4000/university', {
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

  const universityFetch = async () => {
    const res = await fetch(`http://localhost:4000/university`)
    const data = await res.json()
    setUniversityList(data.list)
  }
    
    
  useEffect(() => {
    universityFetch()
  }, [])

  const deleteUniversity = async (id) => {
    const res = await fetch('http://localhost:4000/university', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
    const data = await res.json()
    messageApi.open({
      type: res.status == 200 ? 'success' : 'error',
      content: data.msg,
    });
    console.log(res)
    if (res.status === 200) {
      universityFetch()
    }
  };
    
  const editUniversity = async (values) => {
    setEditFields(values)
     setOpen(true)
    
  };
    
    
  const submitEditUniversity=async(values)=>{
        const res = await fetch('http://localhost:4000/university', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const data = await res.json()
    messageApi.open({
      type: res.status == 200 ? 'success' : 'error',
      content: data.msg,
    });
    if (res.status === 200) {
      universityFetch()
      setOpen(false)
    }
    
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div>
                {contextHolder}
                <Modal title="Edit University" open={open} footer={null} onCancel={()=> setOpen(false)}></Modal>
        <Formik
        
          initialValues={{
            universityName: ''
             }}
             enableReinitialize
          validationSchema={UniversitySchema}
          onSubmit={(values,{ resetForm }) => {
            handleRegister(values)
            submitEditUniversity()
            resetForm()
          }}
        >
          {({ errors, touched }) => (
            <Form className='registration'>
              {contextHolder}
              <Field name="universityName" placeholder="university Name:" />
              {errors.universityName && touched.universityName ? (
                <div>{errors.universityName}</div>
              ) : null}
             
              <br />
              <button type="submit" className='button'>Submit</button>
              </Form>
          )}
        </Formik>
        <Table
              onDelete={deleteUniversity}
              onEdit={editUniversity}
              list={universityList} title={['index','universityName']} endpoint="/university"  />
      </div>
    </main>
  )
};

export default index