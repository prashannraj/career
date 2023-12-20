import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Post Name:',
    dataIndex: 'postName',
    key: 'postName',
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
    title: 'Exam Fee:',
    dataIndex: 'examFee',
    key: 'examFee',
  },
  {
    title: 'service:',
    key: 'service',
    dataIndex: 'service',
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