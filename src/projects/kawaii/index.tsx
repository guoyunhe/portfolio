import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import Project from '../Project';
import img1 from './images/kawaii-1.webp';
import img2 from './images/kawaii-2.webp';
import img3 from './images/kawaii-3.webp';

export default function KawaiiProject() {
  const { t } = useTranslation('projects');
  return (
    <Project
      name="Kawaii Dream"
      year={2021}
      images={[img1, img2, img3]}
      tags={[t('ecommerce')]}
      skills={['wordpress', 'woocommerce', 'js', 'css', 'php', 'mysql']}
      link="https://kawaiidream.fi/"
    >
      <Typography.Paragraph>{t('kawaii-intro')}</Typography.Paragraph>
    </Project>
  );
}
