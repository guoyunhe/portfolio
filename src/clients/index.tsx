import { useTranslation } from 'react-i18next';
import Container from '../Container';
import Title from '../Title';

export default function ClientList() {
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <Container>
        <Title>{t('Clients')}</Title>
      </Container>
    </div>
  );
}
