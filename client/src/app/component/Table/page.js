import React from 'react';
import { Space, Table,} from 'antd';
const columns = [
  {
    title: 'Post Name:',
    dataIndex: 'postName',
    key: 'postName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Required Qualification:',
    dataIndex: 'requiredQualification',
    key: 'requiredQualification',
  },
  {
    title: 'Level:',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: 'service:',
    key: 'service',
    dataIndex: 'service',
  },
  {
    title: 'vacancy Publish date:',
    key: 'minPublishDate',
    dataIndex: 'minPublishDate',
  },
  {
    title: 'Exam Single Fee:',
    key: 'examFeeSingle',
    dataIndex: 'examFeeSingle',
  },
  {
    title: 'Singly Payment date:',
    key: 'sinPublishDate',
    dataIndex: 'sinPublishDate',
  },
  {
    title: 'Exam Double Fee:',
    key: 'examFeeDouble',
    dataIndex: 'examFeeDouble',
  },
   
  {
    title: 'Double Payment date:',
    key: 'douPublishDate',
    dataIndex: 'douPublishDate',
  },
  
    
  {
    title: 'Apply Link:',
    key: 'apply',
    render: (_, record) => (
      <Space size="middle">
        <a>Apply {record.name}</a>
       
      </Space>
    ),
  },
];

const App = (props) => <Table columns={columns} dataSource={props.data} />;
export default App;