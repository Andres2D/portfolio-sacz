import * as React from "react";
import { motion } from 'framer-motion';
import * as styles from './index.module.scss';
import CardComponent from './components/card';
import { experience } from '../../constants';
import { staggerContainer, textVariant } from '../../utils/motion';

const ExperienceComponent: React.FC = () => {

  const experienceMap = experience.map((xp, index) => 
    <CardComponent key={xp.id} index={index} experience={xp} />
  );

  return (
    <motion.section 
      id='experience' 
      className={styles.section}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer()}>
      <motion.h3 variants={textVariant} className={styles.title}>Experience</motion.h3>
      { experienceMap }
    </motion.section>
  );
};
export default ExperienceComponent;
