import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;



function page(props) {
  return (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="image" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={props.item.postName} 
    description={props.item.requiredQualification} />
  </Card>
  )
}

export default page