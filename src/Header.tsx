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
        height: '100vh',
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0, padding: 0 }}>
        <Typewriter
          words={[t('Idea'), t('Business'), t('Innovation')]}
          loop={false}
          cursor
          cursorStyle="|"
        />
      </h1>
    </header>
  );
}
