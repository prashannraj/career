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




      
const quataSchema = Yup.object().shape({
    quataName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    });


const index = () => {
const [messageApi, contextHolder] = message.useMessage();
const [isModalOpen1, setIsModalOpen1] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [selectedEditQuata, setSelectedEditQuata] = useState({});
const [quataList, setQuataList] = useState([])

const showModal1 = (item) => {
  setSelectedEditquata(item);
  setIsModalOpen1(true);
};
const showModal2 = (item) => {
  setSelectedEditquata(item);
  setIsModalOpen2(true);
};
const handleCancel = () => {
  setIsModalOpen1(false);
  setIsModalOpen2(false);
};


   const quataFetch = async () => {
    const res = await fetch(`http://localhost:4000/quatas`)
    const data = await res.json()
    setQuataList(data.quataList)
  }
    
    
  useEffect(() => {
    quataFetch()
  }, [])

  const registerQuata = async (values, resetForm) => {
    const res = await fetch(`http://localhost:4000/quatas`, {
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
      quataFetch();
      resetForm();
    }
  };

  const deleteQuata = async (id) => {
    const res = await fetch(`http://localhost:4000/quatas`, {
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
      quataFetch();
      setIsModalOpen2(false);
    }
  };


  const editQuata = async (values,resetForm) => {
    const res = await fetch(`http://localhost:4000/quatas`, {
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
      quataFetch();
      handleCancel();
      resetForm()
    }
  };


  const EditForm = () => {
    return (
      <Formik
        initialValues={selectedEditQuata}
        enableReinitialize
        // validationSchema={SignupSchema}
        onSubmit={(values,{ resetForm }) => {
          editQuata(values,resetForm)
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.editForm}>
            <div>
              <label>quata Name:</label>
              <Field name="quataName" placeholder="quataName" />
              {errors.quataName && touched.quataName ? (
                <div>{errors.quataName}</div>
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
<h3 style={{fontSize:'30px',fontWeight:'bold',textAlign:'center'}}>Add new quata</h3>
    <Formik
    initialValues={{
      quataName: ''
        }}
    // validationSchema={SignupSchema}
    onSubmit={(values,{resetForm}) => {
      registerQuata(values,resetForm);
    }}
  >
    {({ errors, touched }) => (
      <Form className='addCategoryForm'>
          <div className='formDiv'>
        {contextHolder}
        <Field name="quataName" type="text" placeholder="Enter New quata Name" />
        {errors.quataName && touched.quataName ? <div>{errors.quataName}</div> : null}
        <br />
        <button className='button' type="submit">Submit</button>
        </div>
      </Form>
    )}
  </Formik>
  <Modal title="Edit quata" open={isModalOpen1} onCancel={handleCancel} >
          <EditForm />
        </Modal>
        <Modal title="Delete quata" open={isModalOpen2} onCancel={handleCancel} onOk={()=>deleteQuata(selectedEditQuata._id)}>
          <p>Are you sure you want to delete this quata ?</p>
        </Modal>

        <Table 
        onDelete={deleteQuata}
        onEdit={editQuata}
        list={quataList} title={['quataName']} endpoint="/quatas" />

      </div>
      </div>
      </>
  )
};

export default index 