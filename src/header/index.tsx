import { ArrowDownOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';
import bg1 from './bg-1.webp';

export default function Header() {
  const { t } = useTranslation();

  useEffect(() => {
    // https://stackoverflow.com/a/50683190
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--header-height', `${window.innerHeight}px`);
      const imageRatio = 3900 / 2800;
      const headerRatio = window.innerWidth / window.innerHeight;
      let imageWidth;
      if (imageRatio > headerRatio) {
        imageWidth = window.innerHeight * imageRatio;
      } else {
        imageWidth = window.innerWidth;
      }
      const fontSize = imageWidth / 50;
      doc.style.setProperty('--header-font-size', `${fontSize}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();
    return () => {
      window.removeEventListener('resize', appHeight);
    };
  }, []);

  return (
    <>
      <header
        style={{
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 'var(--header-height, 100vh)',
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
          <Typography.Title
            style={{ fontSize: 'var(--header-font-size, 30px)', margin: 0, color: '#fff' }}
          >
            I am a&nbsp;
            <span style={{ color: '#bae637' }}>
              <Typewriter
                words={[
                  'front-end',
                  'react',
                  'mobile',
                  'back-end',
                  'node.js',
                  'mongodb',
                  'laravel',
                  'php',
                  'mysql',
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
      <div style={{ height: 'var(--header-height, 100vh)' }}></div>
    </>
  );
}
