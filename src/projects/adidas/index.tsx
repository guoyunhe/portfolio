import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import Project from '../Project';
import img1 from './images/adidas-1.webp';
import img2 from './images/adidas-2.webp';

export default function AdidasProject() {
  const { t } = useTranslation('projects');
  return (
    <Project
      name="adidas Design Language"
      year={2019}
      images={[img1, img2]}
      tags={[t('ecommerce'), t('marketing')]}
      skills={['react', 'sass', 'webpack']}
      link="https://www.adidas.com/us/"
    >
      <Typography.Paragraph>{t('adidas-intro')}</Typography.Paragraph>
    </Project>
  );
}
