import React from 'react';
import { Card, Col, Row } from 'antd';

const Books = (props) => {
    return (
          <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={[16, 16]}>
            {props.data.map(val => (
                <Col span={8}>
                  <a href={`/${val.id}`}>
                      <Card title={val.title}>
                        <p>{val.desc}</p>
                      </Card>
                  </a>
                </Col>
              ))}
            </Row>
          </div>
          )
}

export default Books;