import { useTranslation } from 'react-i18next';
import Container from '../Container';
import Title from '../Title';
import AdidasProject from './adidas';
import ElisaProject from './elisa';

export default function ProjectList() {
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(5px)' }}>
      <Container>
        <Title>{t('Projects')}</Title>
        <ElisaProject />
        <AdidasProject />
      </Container>
    </div>
  );
}
