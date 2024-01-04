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




      
const levelSchema = Yup.object().shape({
    levelName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    });


const index = () => {
const [messageApi, contextHolder] = message.useMessage();
const [isModalOpen1, setIsModalOpen1] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [selectedEditLevel, setSelectedEditLevel] = useState({});
const [levelList, setlevelList] = useState([])

const showModal1 = (item) => {
  setSelectedEditLevel(item);
  setIsModalOpen1(true);
};
const showModal2 = (item) => {
  setSelectedEditLevel(item);
  setIsModalOpen2(true);
};
const handleCancel = () => {
  setIsModalOpen1(false);
  setIsModalOpen2(false);
};


   const levelFetch = async () => {
    const res = await fetch(`http://localhost:4000/levels`)
    const data = await res.json()
    setlevelList(data.levelList)
  }
    
    
  useEffect(() => {
    levelFetch()
  }, [])

  const registerLevel = async (values, resetForm) => {
    const res = await fetch(`http://localhost:4000/levels`, {
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
      levelFetch();
      resetForm();
    }
  };

  const deleteLevel = async (id) => {
    const res = await fetch(`http://localhost:4000/levels`, {
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
      levelFetch();
      setIsModalOpen2(false);
    }
  };


  const editLevel = async (values,resetForm) => {
    const res = await fetch(`http://localhost:4000/levels`, {
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
      levelFetch();
      handleCancel();
      resetForm()
    }
  };


  const EditForm = () => {
    return (
      <Formik
        initialValues={selectedEditLevel}
        enableReinitialize
        // validationSchema={SignupSchema}
        onSubmit={(values,{ resetForm }) => {
          editLevel(values,resetForm)
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.editForm}>
            <div>
              <label>level Name:</label>
              <Field name="levelName" placeholder="levelName" />
              {errors.levelName && touched.levelName ? (
                <div>{errors.levelName}</div>
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
<h3 style={{fontSize:'30px',fontWeight:'bold',textAlign:'center'}}>Add new level</h3>
    <Formik
    initialValues={{
      levelName: ''
        }}
    // validationSchema={SignupSchema}
    onSubmit={(values,{resetForm}) => {
      registerLevel(values,resetForm);
    }}
  >
    {({ errors, touched }) => (
      <Form className='addCategoryForm'>
          <div className='formDiv'>
        {contextHolder}
        <Field name="levelName" type="text" placeholder="Enter New level Name" />
        {errors.levelName && touched.levelName ? <div>{errors.levelName}</div> : null}
        <br />
        <button className='button' type="submit">Submit</button>
        </div>
      </Form>
    )}
  </Formik>
  <Modal title="Edit level" open={isModalOpen1} onCancel={handleCancel} >
          <EditForm />
        </Modal>
        <Modal title="Delete level" open={isModalOpen2} onCancel={handleCancel} onOk={()=>deleteLevel(selectedEditLevel._id)}>
          <p>Are you sure you want to delete this level ?</p>
        </Modal>

        <Table 
        onDelete={deleteLevel}
        onEdit={editLevel}
        list={levelList} title={['levelName']} endpoint="/levels" />

      </div>
      </div>
      </>
  )
};

export default index 