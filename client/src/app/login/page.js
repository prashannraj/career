'use client'
import Image from 'next/image'
import React from 'react';
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { message } from 'antd';
import * as Yup from 'yup';
import Link from 'next/link';
import NavBar from '../component/NavBar/page';
import { setLoginDetails } from '../redux/reducerSlice/userSlice';
//import MainLayout from '../component/MainLayout/page';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});



export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage();
  const handleLogin = async (values) => {
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const data = await res.json()
    messageApi.open({
      type: res.status == 200 ? 'success' : 'error',
      content: data.msg,
    });
    if (res.status == 200) {
      dispatch(setLoginDetails(data.token, data.userDetails))
      router.push('/candidate')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <NavBar />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Prashann Raj{' '}
            <Image
              src=""
              alt=""
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Apply Online"
          width={180}
          height={37}
          priority
        />
      </div>
     
      {contextHolder}
      <div className='registration'>
        <h1>Login Here</h1>
        <br></br>
        <Formik
          initialValues={{
           
            email: '',
            password: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            handleLogin(values);
          }}
        >
          {({ errors, touched }) => (
            <Form >
             <Field name="email" type="email" placeholder="Enter your email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <br />
              <br />
              <Field name="password" type="password" placeholder="Enter your password" />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <br />
              <br />
              <button type="submit" className='button'>Login</button>
              <br />
              if you don"t have account
              <br /><a href="/register" className='button'>register</a>
            </Form>
          )}
        </Formik>
      </div>
     


    </main>
  )
}