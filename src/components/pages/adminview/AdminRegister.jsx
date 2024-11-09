import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Input, Typography, Button, Row, Col, Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../../../style/AdminRegister.css';
import AdminHeader from './admin_section/AdminHeader';

const { Content } = Layout;
const { Title } = Typography;

function AdminRegister() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const token = localStorage.getItem('access_token');
    const formData = new FormData();

    // 업로드된 파일의 originFileObj에 접근
    const picturePhoto = values.picture_photo[0].originFileObj;
    const name = values.name;
    const artist = values.artist;
    const gallery = values.gallery;
    const endDate = new Date(values.end_name);
    const customExplanation = values.explanation;
    const customQuestion = values.question;

    console.log(picturePhoto, name, artist, gallery, endDate, customExplanation, customQuestion);

    if (isNaN(endDate.getTime())) {
      alert('유효하지 않은 종료일 형식입니다. 올바른 날짜 형식(YYYY-MM-DD)을 사용하세요.');
      return;
    }

    if (picturePhoto) {
      formData.append('picture_photo', picturePhoto);
    }
    formData.append('name', name);
    formData.append('artist', artist);
    formData.append('gallery', gallery);
    formData.append('end_date', endDate.toISOString());
    formData.append('custom_explanation', customExplanation);
    formData.append('custom_question', customQuestion);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/picture/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        navigate('/adminview/list');
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Layout className="layout">
        <AdminHeader/>
        <Content className="app-content">
          <Row gutter={32}>
            <Col span={12}>
              <Button type="link" className="back-button">뒤로 가기</Button>
              <div layout="vertical" className="art-form">
                <Form.Item label="작품" name="picture_photo" valuePropName="fileList" getValueFromEvent={e => e.fileList}>
                  <Upload beforeUpload={() => false} listType="picture">
                    <Button icon={<UploadOutlined />}>파일 업로드</Button>
                  </Upload>
                </Form.Item>
                <Form.Item label="작품 이름" name="name">
                  <Input placeholder="작품 이름을 입력하세요" />
                </Form.Item>
                <Form.Item label="작가명" name="artist">
                  <Input placeholder="저자 이름을 입력하세요" />
                </Form.Item>
                <Form.Item label="갤러리" name="gallery">
                  <Input placeholder="전시 장소를 입력하세요" />
                </Form.Item>
                <Form.Item label="전시 기간" name="end_name">
                  <Input placeholder="2023-04-05의 형태로 입력하세요" />
                </Form.Item>
              </div>
            </Col>
            <Col span={12}>
              <Title level={5}>Custom your AI</Title>
              <div layout="vertical">
                <Form.Item label="관객에게 꼭 설명하고 싶은 정보는? - explanation" name="explanation">
                  <Input.TextArea rows={4} placeholder="ex. 이 작품을 제작하게 된 배경" />
                </Form.Item>
                <Form.Item label="관객에게 이 질문은 꼭 물어보고 싶다! - question" name="question">
                  <Input.TextArea rows={4} placeholder="ex. 제 작품을 당신의 삶과 연결지을 수 있나요?" />
                </Form.Item>
              </div>
              <Button type="primary" className="submit-button" htmlType="submit">등록</Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Form>
  );
}

export default AdminRegister;
