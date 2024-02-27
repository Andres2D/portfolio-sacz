import * as React from "react";
import * as styles from './index.module.scss';
import CardComponent from './components/card';
import { experience } from '../../constants';

const ExperienceComponent: React.FC = () => {

  const experienceMap = experience.map(xp => <CardComponent key={xp.id} experience={xp} />)

  return (
    <section id='experience' className={styles.section}>
      <h3 className={styles.title}>Experience</h3>
      { experienceMap }
    </section>
  );
};
export default ExperienceComponent;
