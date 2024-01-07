'use client'
import React, {useState, useEffect} from "react";

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { message, Modal } from 'antd';
import Table from '../../component/Table/page';
import styles from '../../styles/fields.module.css';

const gridStyle = {
  width: '10%',
  textAlign: 'center',
  margin: '0px 10px'
};




      
const UniversitySchema = Yup.object().shape({
    universityName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    });


const index = () => {
const [messageApi, contextHolder] = message.useMessage();
const [isModalOpen1, setIsModalOpen1] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [selectedEditUniversity, setSelectedEditUniversity] = useState({});
const [universityList, setUniversityList] = useState([])

const showModal1 = (item) => {
  setSelectedEditUniversity(item);
  setIsModalOpen1(true);
};
const showModal2 = (item) => {
  setSelectedEditUniversity(item);
  setIsModalOpen2(true);
};
const handleCancel = () => {
  setIsModalOpen1(false);
  setIsModalOpen2(false);
};


   const universityFetch = async () => {
    const res = await fetch(`http://localhost:4000/universities`)
    const data = await res.json()
    setUniversityList(data.universityList)
  }
    
    
  useEffect(() => {
    universityFetch()
  }, [])

  const createUniversity = async (values, resetForm) => {
    const res = await fetch(`http://localhost:4000/universities`, {
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
    if (res.status === 200) {
      universityFetch();
      resetForm();
    }
  };

  const deleteUniversity = async (id) => {
    const res = await fetch(`http://localhost:4000/universities`, {
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
      universityFetch();
      showModal2 (false);
    }
  };

  const editUniversity = async (values) => {
    setSelectedEditUniversity(values)
    showModal1(false)
  };

  const submitUniversity = async (values) => {
    const res = await fetch(`http://localhost:4000/universities`, {
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
      universityFetch();
      handleCancel();
      resetForm();
    }
  };


  const EditForm = () => {
    return (
      <Formik
        initialValues={selectedEditUniversity}
        enableReinitialize
        // validationSchema={SignupSchema}
        onSubmit={(values,{ resetForm }) => {
          submitUniversity(values, resetForm)
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.editForm}>
            <div>
              <label>University Name:</label>
              <Field name="universityName" placeholder="universityName" />
              {errors.universityName && touched.universityName ? (
                <div>{errors.universityName}</div>
              ) : null}
            </div>

            <br />
            <button className={styles.submitBtn} type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    )
                                                                                    
  }


  return (
    <>
<div className={styles.container}>
<div className={styles.Box}>
<h3 style={{fontSize:'30px',fontWeight:'bold',textAlign:'center'}}>Add new University</h3>
    <Formik
    initialValues={{
      universityName: ''
        }}
    // validationSchema={SignupSchema}
    onSubmit={(values,{resetForm}) => {
      createUniversity(values,resetForm);
    }}
  >
    {({ errors, touched }) => (
      <Form className='addCategoryForm'>
          <div className='formDiv'>
        {contextHolder}
        <Field name="universityName" type="text" placeholder="Enter New University Name" />
        {errors.universityName && touched.universityName ? <div>{errors.universityName}</div> : null}
        <br />
        <button className='button' type="submit">Submit</button>
        </div>
      </Form>
    )}
  </Formik>
  <Modal title="Edit university" open={isModalOpen1} onCancel={handleCancel} >
          <EditForm />
        </Modal>
        <Modal title="Delete University" open={isModalOpen2} onCancel={handleCancel} onOk={()=>deleteUniversity(selectedEditUniversity._id)}>
          <p>Are you sure you want to delete this University ?</p>
        </Modal>

        <Table 
        onDelete={deleteUniversity}
        onEdit={editUniversity}
        list={universityList} title={['universityName']} endpoint="/universities" />

      </div>
      </div>
      </>
  )
};

export default index 