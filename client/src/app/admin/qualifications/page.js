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




      
const qualificationSchema = Yup.object().shape({
    qualificationName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    });


const index = () => {
const [messageApi, contextHolder] = message.useMessage();
const [isModalOpen1, setIsModalOpen1] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [selectedEditQualification, setSelectedEditQualification] = useState({});
const [qualificationList, setQualificationList] = useState([])

const showModal1 = (item) => {
  setSelectedEditQualification(item);
  setIsModalOpen1(true);
};
const showModal2 = (item) => {
  setSelectedEditQualification(item);
  setIsModalOpen2(true);
};
const handleCancel = () => {
  setIsModalOpen1(false);
  setIsModalOpen2(false);
};


   const qualificationFetch = async () => {
    const res = await fetch(`http://localhost:4000/qualifications`)
    const data = await res.json()
    setQualificationList(data.qualificationList)
  }
    
    
  useEffect(() => {
    qualificationFetch()
  }, [])

  const registerQualification = async (values, resetForm) => {
    const res = await fetch(`http://localhost:4000/qualifications`, {
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
      qualificationFetch();
      resetForm();
    }
  };

  const deleteQualification = async (id) => {
    const res = await fetch(`http://localhost:4000/qualifications`, {
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
      qualificationFetch();
      setIsModalOpen2(false);
    }
  };


  const editQualification = async (values,resetForm) => {
    const res = await fetch(`http://localhost:4000/qualifications`, {
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
      qualificationFetch();
      handleCancel();
      resetForm()
    }
  };


  const EditForm = () => {
    return (
      <Formik
        initialValues={selectedEditqualification}
        enableReinitialize
        // validationSchema={SignupSchema}
        onSubmit={(values,{ resetForm }) => {
          editQualification(values,resetForm)
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.editForm}>
            <div>
              <label>qualification Name:</label>
              <Field name="qualificationName" placeholder="qualificationName" />
              {errors.qualificationName && touched.qualificationName ? (
                <div>{errors.qualificationName}</div>
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
<h3 style={{fontSize:'30px',fontWeight:'bold',textAlign:'center'}}>Add new qualification</h3>
    <Formik
    initialValues={{
      qualificationName: ''
        }}
    // validationSchema={SignupSchema}
    onSubmit={(values,{resetForm}) => {
      registerQualification(values,resetForm);
    }}
  >
    {({ errors, touched }) => (
      <Form className='addCategoryForm'>
          <div className='formDiv'>
        {contextHolder}
        <Field name="qualificationName" type="text" placeholder="Enter New qualification Name" />
        {errors.qualificationName && touched.qualificationName ? <div>{errors.qualificationName}</div> : null}
        <br />
        <button className='button' type="submit">Submit</button>
        </div>
      </Form>
    )}
  </Formik>
  <Modal title="Edit qualification" open={isModalOpen1} onCancel={handleCancel} >
          <EditForm />
        </Modal>
        <Modal title="Delete qualification" open={isModalOpen2} onCancel={handleCancel} onOk={()=>deleteQualification(selectedEditqualification._id)}>
          <p>Are you sure you want to delete this qualification ?</p>
        </Modal>

        <Table 
        onDelete={deleteQualification}
        onEdit={editQualification}
        list={qualificationList} title={['qualificationName']} endpoint="/qualifications" />

      </div>
      </div>
      </>
  )
};

export default index 