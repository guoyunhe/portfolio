import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import Container from '../Container';
import Title from '../Title';
import AdidasProject from './adidas';
import ElisaProject from './elisa';
import EsgProject from './esg';
import KawaiiProject from './kawaii';

export default function ProjectList() {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <Title>{t('Projects')}</Title>
        <EsgProject />
        <Divider />
        <KawaiiProject />
        <Divider />
        <ElisaProject />
        <Divider />
        <AdidasProject />
      </Container>
    </div>
  );
}
