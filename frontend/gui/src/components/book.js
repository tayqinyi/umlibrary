import React from 'react';
import { Card, Col, Row } from 'antd';

const Book = (props) => {
    return (
          <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={[16, 16]}>
            {props.data.map(val => (
                <Col span={8}>
                  <Card title={val.title}>
                    <p>{val.desc}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          )
}

export default Book;