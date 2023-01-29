import React from "react";
import "../styles/service.scss";
import { Card, Col, Row } from "antd";
const Service = () => {
  return (
    <div>
      <section id="Service">
        <div className="site-card-wrapper">
          <h1 className="allign">What I'm  Done</h1>

          <Row gutter={16}>
            <Col span={8}>
              <Card  title="COLLEGE" bordered={false}>
                Sengunthar Engineering College,
                <br />
                Thiruchengode.
                <br />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="COURSE" bordered={false}>
                Computer Science Engineering
                <br />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="COLLEGE PROJECT" bordered={false}>
                SMART PARKING SYSTEM <br />
              </Card>
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={8}>
              <Card title=" CURRENT WORKING" bordered={false}>
                Armor Ventures LLP
                <br />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="WORKED PROJECT" bordered={false}>
                Resume
                <br />
                Basic Form
                <br />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="CURRENT PROJECT" bordered={false}>
                Webpage
                <br />
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};
export default Service;
