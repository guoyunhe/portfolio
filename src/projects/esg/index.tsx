import { useTranslation } from 'react-i18next';
import Project from '../Project';
import img1 from './images/esg-1.webp';
import img2 from './images/esg-2.webp';
import img3 from './images/esg-3.webp';

export default function EsgProject() {
  const { t } = useTranslation('projects');
  return (
    <Project
      name="Green Carbon Neutrality"
      year={2022}
      images={[img1, img2, img3]}
      tags={[t('business'), t('environment'), t('public')]}
      skills={['react', 'material-ui', 'laravel', 'php', 'mysql']}
      link="https://greenunite.co/"
    >
      TODO
    </Project>
  );
}
