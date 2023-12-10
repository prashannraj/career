'use client'

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';

const applySchema = Yup.object().shape({
    postName: {},
    level: {},
    service: {},
    requiredQualification: {},
    candidateFullName: {},
    phoneNumber: {},
    email: {},
    fathersname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    mothersName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    grandFatherName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    permanentAddress:Yup.string ()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    temporaryAddress: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    province: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    dateOfBirth:Yup.string ()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    citizenshipNumber: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    citizenshipIssueDistrict: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    dateOfissue: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    catogary: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    educationName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    educationevel: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    University: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    Grade: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    transcriptFile:Yup.string (),
    charcterFile: Yup.string(),
    trainingName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    traninglevel: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    traningInstuate: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    traningCertificate: Yup.string(),
});

const Home = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const handleOrder = async (values) => {
        const res = await fetch('http://localhost:4000/apply', {
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

    const [formStep, setFormStep] = useState(1)

    return (
            <div>
                <Formik
                    initialValues={{
                        postName: '',
                        level: '',
                        service: '',
                        requiredQualification: '',
                        candidateFullName: '',
                        phoneNumber: '',
                        email: '',
                        fathersName: '',
                        mothersName: '',
                        grandFatherName: '',
                        permanentAddress: '',
                        temporaryAddress: '',
                        province: '',
                        dateOfBirth:'' ,
                        citizenshipNumber:'' ,
                        citizenshipIssueDistrict: '',
                        dateOfissue: '',
                        catogary: '',
                        educationName: '',
                        educationevel: '',
                        University: '',
                        Grade: '',
                        transcriptFile: '',
                        charcterFile: '',
                        trainingName: '',
                        traninglevel: '',
                        traningInstuate: '',
                        traningCertificate: '',
                    }}
                 validationSchema={applySchema}
                    onSubmit={values => {

                        handleOrder(values);
                    }}
                >
       {
    
        formStep === 1 && (
            <div>
                <h1>Job Detail form</h1>
                <p> Post Name:</p>
                <Field name="postName" type="text" placeholder="Enter Post Name" />
                {errors.postName && touched.postName ? <div>{errors.postName}</div> : null}
                <br />
                <hr />
                <p>Level:</p>
                <Field name="level" type="number" placeholder="Level" />
                {errors.level && touched.level ? (
                    <div>{errors.level}</div>
                ) : null}
                <br /> <hr />
                <p>Service:</p>
                <Field as="text" name="service" type="string" placeholder="service" />
                {errors.service && touched.service ? (
                    <div>{errors.service}</div>
                ) : null}
                <br /> <hr />
                <p>requiredQualification:</p>
                <Field as="textarea" name="requiredQualification" type="string" placeholder="requiredQualification" />
                {errors.requiredQualification && touched.requiredQualification ? (
                    <div>{errors.requiredQualification}</div>
                ) : null}
                <br /> <hr />
                <button onClick={() => setFormStep(2)}>Next</button>
            </div>
        )
    }
    {
        formStep === 2 && (
            <div>
                <h1>Applicant Details:</h1>
                <p> Candidate Full Name:</p>
                <Field name="fullName" placeholder="fullName" />
                {errors.fullName && touched.fullName ? (
                    <div>{errors.fullName}</div>
                ) : null}
                <br />
                <hr />
                <p>phoneNumber:</p>
                <Field name="phoneNumber" placeholder="Enter your  phoneNumber" />
                {errors.phoneNumber && touched.phoneNumber ? (
                    <div>{errors.phoneNumber}</div>
                ) : null}
                <br /> <hr />
                <p>Email:</p>
                <Field name="email" placeholder="Enter your  email" />
                {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                ) : null}
                <br /> <hr />
                <p>Father's Name:</p>
                <Field name="fatherName" placeholder="Enter your  Father Name" />
                {errors.fatherName && touched.fatherName ? (
                    <div>{errors.fatherName}</div>
                ) : null}
                <br /> <hr />
                <p>Mother's Name:</p>
                <Field name="motherName" placeholder="Enter your  Mother's Name" />
                {errors.motherName && touched.motherName ? (
                    <div>{errors.motherName}</div>
                ) : null}
                <br /> <hr />
                <p>Grand Father's Name:</p>
                <Field name="grandFather" placeholder="Enter your  Grand Father's Name" />
                {errors.grandFather && touched.grandFather ? (
                    <div>{errors.grandFather}</div>
                ) : null}
                <br /> <hr />
                <p>Permanent Address:</p>
                <Field as="textarea" name="permaAddress" placeholder="Enter your Permanent Address" />
                {errors.permaAddress && touched.permaAddress ? (
                    <div>{errors.permaAddress}</div>
                ) : null}
                <br /> <hr />
                <p>Temporary Address:</p>
                <Field as="textarea" name="tempoAddress" placeholder="Enter your Temporary Address" />
                {errors.tempoAddress && touched.tempoAddress ? (
                    <div>{errors.tempoAddress}</div>
                ) : null}
                <br /> <hr />
                <p>Province:</p>
                <Field component='select' name='province' id='province' placeholder='Choose your province'>
                    <option disabled >Choose your province</option>
                    <option value="koshi">Koshi</option>
                    <option value="madhesh">Madhesh</option>
                    <option value="bagmati">Bagmati</option>
                    <option value="gandki">Gandki</option>
                    <option value="lumbini">Lumbini</option>
                    <option value="karnali">Karnali</option>
                    <option value="sudurpaschim">Sudurpaschim</option>
                </Field>
                {errors.province && touched.province ? <div>{errors.province}</div> : null}
                <br /> <hr />
                <p>Date Of Birth:</p>
                <Field as="date" name="dateBirth" placeholder="Select your date of birth" />
                {errors.dateBirth && touched.dateBirth ? (
                    <div>{errors.dateBirth}</div>
                ) : null}
                <br /> <hr />
                <p>Citizenship Number:</p>
                <Field name="citizenNumber" placeholder="Enter your Citizenship Number" />
                {errors.citizenNumber && touched.citizenNumber ? (
                    <div>{errors.citizenNumber}</div>
                ) : null}
                <br /> <hr />
                <p>Citizenship Issue District:</p>
                <Field component='select' name='district' id='district' placeholder='Choose your district'>
                    <option disabled >Choose your district</option>
                    <option value="koshi">Koshi</option>
                    <option value="madhesh">Madhesh</option>
                    <option value="bagmati">Bagmati</option>
                    <option value="gandki">Gandki</option>
                    <option value="lumbini">Lumbini</option>
                    <option value="karnali">Karnali</option>
                    <option value="sudurpaschim">Sudurpaschim</option>
                </Field>
                {errors.district && touched.district ? <div>{errors.district}</div> : null}
                <br /> <hr />
                <p>Date Of issue:</p>
                <Field as="date" name="dateIssue" placeholder="Select your date of Issue" />
                {errors.dateIssue && touched.dateIssue ? (
                    <div>{errors.dateIssue}</div>
                ) : null}
                <br /> <hr />
                <p>catogary:</p>
                <Field component='select' name='catogary' id='catogary' placeholder='Choose your catogary'>
                    <option disabled >Choose your catogary</option>
                    <option value="koshi">Koshi</option>
                    <option value="madhesh">Madhesh</option>
                    <option value="bagmati">Bagmati</option>
                    <option value="gandki">Gandki</option>
                    <option value="lumbini">Lumbini</option>
                    <option value="karnali">Karnali</option>
                    <option value="sudurpaschim">Sudurpaschim</option>
                </Field>
                {errors.catogary && touched.catogary ? <div>{errors.catogary}</div> : null}
                <br /> <hr />
                <button onClick={() => setFormStep(1)}>Back</button>
                <button onClick={() => setFormStep(3)}>Next</button>
            </div>
        )
    }
    {
        formStep === 3 && (
            <div>
                <h1>Education Detail form</h1>
                <p> Education Name:</p>
                <Field name="educationName" placeholder="Education Name:" />
                {errors.educationName && touched.educationName ? (
                    <div>{errors.educationName}</div>
                ) : null}
                <br />
                <hr />
                <p>Level:</p>
                <Field name="level" type="text" placeholder="Level" />
                {errors.level && touched.level ? (
                    <div>{errors.level}</div>
                ) : null}
                <br /> <hr />
                <p>University:</p>
                <Field as="text" name="university" type="string" placeholder="university" />
                {errors.university && touched.university ? (
                    <div>{errors.university}</div>
                ) : null}
                <br /> <hr />
                <p>Grade:</p>
                <Field name="grade" type="number" placeholder="Grade" />
                {errors.grade && touched.grade ? (
                    <div>{errors.grade}</div>
                ) : null}
                <br /> <hr />
                <Field name="transcript" type="file" placeholder="upload your Transcript" />
                {errors.transcript && touched.transcript ? <div>{errors.transcript}</div> : null}
                <br />
                <Field name="charcter" type="file" placeholder="upload your Charcter" />
                {errors.charcter && touched.charcter ? <div>{errors.charcter}</div> : null}
                <br />
                <button onClick={() => setFormStep(2)}>Back</button>
                <button onClick={() => setFormStep(4)}>Next</button>
            </div>
        )
    }
    {
        formStep === 4 && (
            <div>
                <h1>Training Detail form</h1>
                <p> Training Name:</p>
                <Field name="trainingName" placeholder="Training Name:" />
                {errors.trainingName && touched.trainingName ? (
                    <div>{errors.trainingName}</div>
                ) : null}
                <br />
                <hr />
                <p>Level:</p>
                <Field name="level" type="number" placeholder="Level" />
                {errors.level && touched.level ? (
                    <div>{errors.level}</div>
                ) : null}
                <br /> <hr />
                <p>Traning Instuate:</p>
                <Field as="text" name="instuate" type="string" placeholder="Traning Instuate" />
                {errors.instuate && touched.instuate ? (
                    <div>{errors.instuate}</div>
                ) : null}
                <br /> <hr />
                <Field name="traning" type="file" placeholder="upload your certificate" />
                {errors.traning && touched.traning ? <div>{errors.traning}</div> : null}
                <br /> <hr />
                <button onClick={() => setFormStep(3)}>Back</button>
                <button onClick={() => setFormStep(5)}>Next</button>
            </div>
        )
    }
    {
        formStep === 5 && (
            <div>
                <h1>Personal Detail form</h1>
                <p> Post Name:</p>
                <Field name="postName" placeholder="Post Name:" />
                {errors.postName && touched.postName ? (
                    <div>{errors.postName}</div>
                ) : null}
                <br />
                <hr />
                <p>Level:</p>
                <Field name="level" type="number" placeholder="Level" />
                {errors.level && touched.level ? (
                    <div>{errors.level}</div>
                ) : null}
                <br /> <hr />
                <p>Service:</p>
                <Field as="text" name="service" type="string" placeholder="service" />
                {errors.service && touched.service ? (
                    <div>{errors.service}</div>
                ) : null}
                <br /> <hr />
                <button onClick={() => setFormStep(4)}>Back</button>
            </div>
        )
    }
                    {({ errors, touched }) => (
                        <Form className='form1'>
                            {contextHolder}
                            <FormDisplay errors={errors} touched={touched} />
                            {formStep == 5 && <button type="submit">Submit</button>}
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }


export default Home