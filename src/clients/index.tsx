import { useTranslation } from 'react-i18next';
import Container from '../Container';
import Title from '../Title';

export default function ClientList() {
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(5px)' }}>
      <Container>
        <Title>{t('Clients')}</Title>
      </Container>
    </div>
  );
}
