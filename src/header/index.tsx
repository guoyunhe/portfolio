import { ArrowDownOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';
import bg1 from './bg-1.webp';

export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      <header
        style={{
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 'var(--app-height, 100vh)',
          color: '#fff',
        }}
      >
        <img
          src={bg1}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography.Title style={{ margin: 0, color: '#fff' }}>
            I am a&nbsp;
            <span style={{ color: '#bae637' }}>
              <Typewriter
                words={[
                  'front-end',
                  'react',
                  'back-end',
                  'node.js',
                  'laravel',
                  'php',
                  'full-stack',
                ]}
                loop={false}
                cursor
                cursorStyle="|"
              />
            </span>
            developer
          </Typography.Title>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography.Paragraph style={{ color: '#fff' }}>{t('Scrolll Down')}</Typography.Paragraph>
          <ArrowDownOutlined />
        </div>
      </header>
      <div style={{ height: '100vh' }}></div>
    </>
  );
}
