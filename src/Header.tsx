import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';
import bg1 from './bg-1.webp';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
      }}
    >
      <img
        src={bg1}
        style={{
          width: '100%',
          height: 'auto',
          minHeight: 400,
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
        <Typography.Title style={{ margin: 0, padding: 0 }}>
          <Typewriter
            words={[t('Full Stack'), t('Business'), t('Innovation')]}
            loop={false}
            cursor
            cursorStyle="|"
          />
        </Typography.Title>
      </div>
    </header>
  );
}
