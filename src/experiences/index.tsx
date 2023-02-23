import { EnvironmentOutlined } from '@ant-design/icons';
import { Divider, Timeline, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import Container from '../Container';
import Title from '../Title';

export default function Experiences() {
  const { t } = useTranslation('experiences');
  return (
    <div>
      <Container>
        <Title>{t('Experiences')}</Title>
        <Timeline
          mode="alternate"
          style={{ marginTop: 60 }}
          items={[
            {
              label: '2010-2014',
              children: (
                <div>
                  <Typography.Title level={5}>{t('Zhejiang University')}</Typography.Title>
                  <Typography.Paragraph type="secondary">
                    <EnvironmentOutlined />
                    &nbsp;
                    {t('Hangzhou, China')}
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    {t('Bachelor of Engineering in Industrial Design')}
                  </Typography.Paragraph>
                </div>
              ),
            },
            {
              label: '2014-2017',
              children: (
                <div>
                  <Typography.Title level={5}>{t('Aalto University')}</Typography.Title>
                  <Typography.Paragraph type="secondary">
                    <EnvironmentOutlined />
                    &nbsp;
                    {t('Helsinki, Finland')}
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    {t('Master of Arts in Collaborative & Industrial Design')}
                  </Typography.Paragraph>
                </div>
              ),
            },
            {
              label: '2017-2019',
              children: (
                <div>
                  <Typography.Title level={5}>Restbyte</Typography.Title>
                  <Typography.Paragraph type="secondary">
                    <EnvironmentOutlined />
                    &nbsp;
                    {t('Helsinki, Finland')}
                  </Typography.Paragraph>
                  <Typography.Paragraph>{t('Full-stack developer')}</Typography.Paragraph>
                </div>
              ),
            },
            {
              label: '2019-2020',
              children: (
                <div>
                  <Typography.Title level={5}>Adventure Club</Typography.Title>
                  <Typography.Paragraph type="secondary">
                    <EnvironmentOutlined />
                    &nbsp;
                    {t('Helsinki, Finland')}
                    <Divider type="vertical" />
                    {t('Amsterdam, Netherlands')}
                  </Typography.Paragraph>
                  <Typography.Paragraph>{t('Full-stack developer')}</Typography.Paragraph>
                </div>
              ),
            },
            {
              label: '2020',
              pending: true,
              children: (
                <div>
                  <Typography.Title level={5}>{t('Alibaba')}</Typography.Title>
                  <Typography.Paragraph type="secondary">
                    <EnvironmentOutlined />
                    &nbsp;
                    {t('Shenzhen, China')}
                  </Typography.Paragraph>
                  <Typography.Paragraph>{t('Front-end developer')}</Typography.Paragraph>
                </div>
              ),
            },
          ]}
        />
      </Container>
    </div>
  );
}
