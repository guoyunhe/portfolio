import { MailOutlined, SendOutlined, WechatOutlined } from '@ant-design/icons';
import { Button, Popover, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import Container from '../Container';
import Title from '../Title';
import wechatQrcode from './wechat-qrcode.webp';

export default function Contact() {
  const { t } = useTranslation('contact');
  return (
    <div>
      <Container>
        <Title>{t('Contact')}</Title>
        <Space size={20} align="center" style={{ marginTop: 50, marginBottom: 50 }}>
          <Popover
            placement="topLeft"
            content={<img src={wechatQrcode} style={{ width: 300 }} />}
            title={t('Scan QRCode')}
            trigger="click"
          >
            <Button icon={<WechatOutlined style={{ color: 'green' }} />} size="large">
              {t('WeChat')}
            </Button>
          </Popover>
          <Button
            icon={<MailOutlined style={{ color: 'red' }} />}
            size="large"
            href="mailto:i@guoyunhe.me"
          >
            {t('Email')}
          </Button>
          <Button
            icon={<SendOutlined style={{ color: 'blue' }} />}
            size="large"
            href="https://t.me/guoyunhe"
          >
            {t('Telegram')}
          </Button>
        </Space>
      </Container>
    </div>
  );
}
