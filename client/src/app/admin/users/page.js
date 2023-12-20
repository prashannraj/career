'use client'
import React, {useState, useEffect} from "react";
import Table from '../../../app/component/Table/page';
import { message, Modal } from 'antd';


const App=()=>{
    const [userList, setUserList] = useState([])
    const [messageApi, contextHolder] = message.useMessage();
    const [ open , setOpen] = useState(false)
    const [editFields, setEditFields ] = useState({})


    const userFetch = async () => {
        const res = await fetch(`http://localhost:4000/users`)
        const data = await res.json()
        setUserList(data.list)
      }
    
    
      useEffect(() => {
        userFetch()
      }, [])

      const deleteUser = async (id) => {
        const res = await fetch('http://localhost:4000/users', {
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
          userFetch()
        }
      };
    
      const editUser = async (item) => {
        setEditFields(item)
         setOpen(true)
        const res = await fetch('http://localhost:4000/users', {
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
          userFetch()
        }
      };

    return(
        <div>
            {contextHolder}
            <Modal title="Edit User" open={open} onCancel={()=> setOpen(false)}>
          <Formik
        initialValues={editFields}
        enableReinitialize
        // validationSchema={SignupSchema}
        onSubmit={(values,{ resetForm }) => {
       
        }}
      >
        {({ errors, touched }) => (
          <Form className='editForm'> 
              <Field name="fullName"/>
              <Field name="email"/>
              <Field name="address"/>
              <Field name="phoneNumber"/>
              <Field name="birthday"/>
              
            </Form>
        )}
            </Formik>
            </Modal>
            <Table
            onDelete={deleteUser}
            onEdit={editUser}
            list={userList} title={['fullName','email', 'address', 'phoneNumber', 'birthday']} endpoint="/users" />
        </div>
    )
}
export default App