import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import Project from '../Project';
import img1 from './images/elisa-1.webp';
import img2 from './images/elisa-2.webp';

export default function ElisaProject() {
  const { t } = useTranslation('projects');
  return (
    <Project
      name="Elisa 5G"
      year={2020}
      images={[img1, img2]}
      tags={[t('ecommerce'), t('marketing')]}
      skills={['react', 'sass', 'next.js', 'contentful', 'shopify']}
      link="https://elisa.fi/5g/"
    >
      <Typography.Paragraph>{t('elisa-intro')}</Typography.Paragraph>
    </Project>
  );
}
