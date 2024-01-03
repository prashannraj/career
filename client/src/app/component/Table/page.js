'use client'
import React from 'react';
import { Space, Table, Tag } from 'antd';
const { Column } = Table;

const App = (props) => {

  return (
    <Table dataSource={props.list}>
      <Column
      title="Index"
      key="index"
      render={(value, item, index) =>  index +1}
    />
      {props?.title?.map((item) => {
        return <Column title={item} dataIndex={item} key={item} />
      })}
      <Column
        title="Action"
        key="action"
        render={(item) => (
          <Space size="middle">
            <a onClick={() => props.onEdit(item)}>Edit </a>
            <a onClick={() => props.onDelete(item._id)}>Delete</a>
          </Space>
        )}
      />

    </Table>
  )
};
export default App;