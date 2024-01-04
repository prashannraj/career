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




      
const serviceSchema = Yup.object().shape({
    serviceName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    });


const index = () => {
const [messageApi, contextHolder] = message.useMessage();
const [isModalOpen1, setIsModalOpen1] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [selectedEditservice, setSelectedEditservice] = useState({});
const [serviceList, setserviceList] = useState([])

const showModal1 = (item) => {
  setSelectedEditservice(item);
  setIsModalOpen1(true);
};
const showModal2 = (item) => {
  setSelectedEditservice(item);
  setIsModalOpen2(true);
};
const handleCancel = () => {
  setIsModalOpen1(false);
  setIsModalOpen2(false);
};


   const serviceFetch = async () => {
    const res = await fetch(`http://localhost:4000/services`)
    const data = await res.json()
    setserviceList(data.serviceList)
  }
    
    
  useEffect(() => {
    serviceFetch()
  }, [])

  const registerservice = async (values, resetForm) => {
    const res = await fetch(`http://localhost:4000/services`, {
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
      serviceFetch();
      resetForm();
    }
  };

  const deleteservice = async (id) => {
    const res = await fetch(`http://localhost:4000/services`, {
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
      serviceFetch();
      setIsModalOpen2(false);
    }
  };


  const editservice = async (values,resetForm) => {
    const res = await fetch(`http://localhost:4000/services`, {
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
      serviceFetch();
      handleCancel();
      resetForm()
    }
  };


  const EditForm = () => {
    return (
      <Formik
        initialValues={selectedEditservice}
        enableReinitialize
        // validationSchema={SignupSchema}
        onSubmit={(values,{ resetForm }) => {
          editservice(values,resetForm)
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.editForm}>
            <div>
              <label>service Name:</label>
              <Field name="serviceName" placeholder="serviceName" />
              {errors.serviceName && touched.serviceName ? (
                <div>{errors.serviceName}</div>
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
<h3 style={{fontSize:'30px',fontWeight:'bold',textAlign:'center'}}>Add new service</h3>
    <Formik
    initialValues={{
      serviceName: ''
        }}
    // validationSchema={SignupSchema}
    onSubmit={(values,{resetForm}) => {
      registerservice(values,resetForm);
    }}
  >
    {({ errors, touched }) => (
      <Form className='addCategoryForm'>
          <div className='formDiv'>
        {contextHolder}
        <Field name="serviceName" type="text" placeholder="Enter New service Name" />
        {errors.serviceName && touched.serviceName ? <div>{errors.serviceName}</div> : null}
        <br />
        <button className='button' type="submit">Submit</button>
        </div>
      </Form>
    )}
  </Formik>
  <Modal title="Edit service" open={isModalOpen1} onCancel={handleCancel} >
          <EditForm />
        </Modal>
        <Modal title="Delete service" open={isModalOpen2} onCancel={handleCancel} onOk={()=>deleteservice(selectedEditservice._id)}>
          <p>Are you sure you want to delete this service ?</p>
        </Modal>

        <Table 
        onDelete={deleteservice}
        onEdit={editservice}
        list={serviceList} title={['serviceName']} endpoint="/services" />

      </div>
      </div>
      </>
  )
};

export default index 