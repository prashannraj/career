'use client'
import Image from 'next/image'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

// export const ValidationSchemaExample = () => (
  
// );


const NavBar = () =>{
  const NavItem = [<a href="/#/">Home</a>,<a href="/#/">About</a>,<a href="/#/">Gallery</a>,<a href="/#/">Contact</a>]
  return(
   <div className='navbar'>
    {NavItem.map((item, id)=>{
      return (<div className ='navitem'>{item}</div>)
    }
    
    )
    }

   </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
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
      <div className='card'>
        <h1>
          Registration Page
        </h1>
        </div>
        <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNnumber: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="middleName" />
          {errors.middleName && touched.middleName ? (
            <div>{errors.middleName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="contactNumber" />
          {errors.contactNumber && touched.contactNumber ? (
            <div>{errors.contactNumber}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
       
       {/* <div className='registration'>

        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"></input><br></br>
        <label for="fname">Last name:</label>
        <input type="text" id="Lname" name="Lname"></input><br></br><br></br>
        
        <button className='button'>Submit Now !</button>

        </div> */}

      
    </main>
  )
}
