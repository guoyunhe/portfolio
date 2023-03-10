import { CalendarOutlined, LinkOutlined } from '@ant-design/icons';
import { Carousel, Col, Row, Space, Tag, Typography } from 'antd';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export interface ProjectProps {
  images: string[];
  name: string;
  year: number;
  link: string;
  children: ReactNode;
  tags: string[];
  skills: string[];
}

export default function Project({
  name,
  images,
  children,
  tags,
  skills,
  link,
  year,
}: ProjectProps) {
  const { t } = useTranslation();
  return (
    <Row gutter={[20, 20]} style={{ marginBottom: 30 }} wrap>
      <Col xs={24} md={12} lg={8}>
        <Carousel autoplay style={{ width: '100%' }}>
          {images.map((img) => (
            <img key={img} src={img} />
          ))}
        </Carousel>
      </Col>
      <Col xs={24} md={12} lg={16} style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography.Title level={2}>{name}</Typography.Title>
        <Typography.Paragraph>
          <Space size={8}>
            <span>
              <CalendarOutlined /> {year}
            </span>
            <Typography.Link href={link} target="_blank">
              <LinkOutlined /> {link}
            </Typography.Link>
          </Space>
        </Typography.Paragraph>
        <div style={{ flex: '1 1 auto' }}>{children}</div>
        <Space size={[0, 8]} wrap>
          {tags.map((tag) => (
            <Tag key={tag} color="#108ee9">
              #{tag}
            </Tag>
          ))}
          {skills.map((tag) => (
            <Tag key={tag} color="#87d068">
              #{tag}
            </Tag>
          ))}
        </Space>
      </Col>
    </Row>
  );
}
