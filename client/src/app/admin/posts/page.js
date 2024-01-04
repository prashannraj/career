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




      
const postSchema = Yup.object().shape({
    postName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    });


const index = () => {
const [messageApi, contextHolder] = message.useMessage();
const [isModalOpen1, setIsModalOpen1] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [selectedEditPost, setSelectedEditPost] = useState({});
const [postList, setPostList] = useState([])

const showModal1 = (item) => {
  setSelectedEditPost(item);
  setIsModalOpen1(true);
};
const showModal2 = (item) => {
  setSelectedEditPost(item);
  setIsModalOpen2(true);
};
const handleCancel = () => {
  setIsModalOpen1(false);
  setIsModalOpen2(false);
};


   const postFetch = async () => {
    const res = await fetch(`http://localhost:4000/posts`)
    const data = await res.json()
    setPostList(data.postList)
  }
    
    
  useEffect(() => {
    postFetch()
  }, [])

  const registerPost = async (values, resetForm) => {
    const res = await fetch(`http://localhost:4000/posts`, {
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
      postFetch();
      resetForm();
    }
  };

  const deletePost = async (id) => {
    const res = await fetch(`http://localhost:4000/posts`, {
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
      postFetch();
      setIsModalOpen2(false);
    }
  };


  const editPost = async (values,resetForm) => {
    const res = await fetch(`http://localhost:4000/posts`, {
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
      postFetch();
      handleCancel();
      resetForm()
    }
  };


  const EditForm = () => {
    return (
      <Formik
        initialValues={selectedEditpost}
        enableReinitialize
        // validationSchema={SignupSchema}
        onSubmit={(values,{ resetForm }) => {
          editPost(values,resetForm)
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.editForm}>
            <div>
              <label>post Name:</label>
              <Field name="postName" placeholder="postName" />
              {errors.postName && touched.postName ? (
                <div>{errors.postName}</div>
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
<h3 style={{fontSize:'30px',fontWeight:'bold',textAlign:'center'}}>Add new post</h3>
    <Formik
    initialValues={{
      postName: ''
        }}
    // validationSchema={SignupSchema}
    onSubmit={(values,{resetForm}) => {
      registerPost(values,resetForm);
    }}
  >
    {({ errors, touched }) => (
      <Form className='addCategoryForm'>
          <div className='formDiv'>
        {contextHolder}
        <Field name="postName" type="text" placeholder="Enter New post Name" />
        {errors.postName && touched.postName ? <div>{errors.postName}</div> : null}
        <br />
        <button className='button' type="submit">Submit</button>
        </div>
      </Form>
    )}
  </Formik>
  <Modal title="Edit post" open={isModalOpen1} onCancel={handleCancel} >
          <EditForm />
        </Modal>
        <Modal title="Delete post" open={isModalOpen2} onCancel={handleCancel} onOk={()=>deletePost(selectedEditPost._id)}>
          <p>Are you sure you want to delete this post ?</p>
        </Modal>

        <Table 
        onDelete={deletePost}
        onEdit={editPost}
        list={postList} title={['postName']} endpoint="/posts" />

      </div>
      </div>
      </>
  )
};

export default index 