'use client'
import '../../styles/App.css'
import Header from '../../component/Header/officer'
import Sidebar from '../../component/Sidebar/officer'
import React,{useEffect, useState} from 'react';
import Table from '../../component/Table/page';
import {  Button, Modal, message } from 'antd';
import {useDispatch} from 'react-redux'
//import {setUserDetails} from '../../redux/reducerSlice/userSlice'
import {setVacancyDetails } from '../../redux/reducerSlice/vacancySlice'

const containerStyle = {
    width: 'auto',
    height: '50vh',
    display: 'flex'
  };
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const dispatch = useDispatch()
  const [applyList, setApplyList] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const applyFetch = async () => {
      const res = await fetch('http://localhost:4000/apply')
      const data = await res.json()
      setApplyList(data.applyList)
    }
    const handleMapView = (item)=>{
      dispatch(setUserDetails(item.userDetails))
      dispatch(setVacancyDetails(item.VacancyDetails))
      showModal()
    }
    
  const handleStatus=async(e,item)=>{
    debugger;
     const updatedApply = {...item,status:e.target.value};
  const res = await fetch('http://localhost:4000/apply', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedApply)
  })
  const data = await res.json()
  messageApi.open({
    type: res.status == 200 ? 'success' : 'error',
    content: "Changed the status of the application successfully",
  });
  if (res.status === 200) {
    applyFetch();
  }
    
  } 
    
  useEffect(() => {
      applyFetch()
    }, [])  

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Modal title="requision" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
     </Modal>
  <h2 style={{fontWeight:'bold',textAlign:'center',fontSize:'30px'}}>Available Requisions</h2>
  <br/>
 <Table
        officer={true}
        handleStatus={handleStatus}
        list={applyList}
        title={['postName',
        'level',
        'service',
        'candidateFullName',
        'phoneNumber',
        'email',
        'fathersName',
        'mothersName',
        'grandFatherName',
        'permanentAddress',
        'temporaryAddress',
       ' province',
        'dateOfBirth',
        'citizenshipNumber',
        'citizenshipIssueDistrict',
        'dateOfissue',
        'catogary',
        'educationName',
        'educationevel',
        'University',
        'Grade',
        'transcriptFile',
        'charcterFile',
        'trainingName',
        'traninglevel',
        'traningInstuate',
        'traningCertificate']} endpoint="/apply" />
    </div>
  )
}

export default App