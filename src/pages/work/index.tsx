import * as React from "react";
import { motion } from 'framer-motion';
import { workList } from '../../constants/work';
import WorkCardComponent from "./components/work-card";
import * as styles from './index.module.scss';
import { textVariant, staggerContainer } from '../../utils/motion';

const WorkComponent: React.FC = () => {

  const workMap = workList.map((work, index) => (
    <WorkCardComponent key={work.id} index={index} work={work}/>
  ));

  return (
    <motion.div 
      id='work' 
      className={styles.container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      variants={{...staggerContainer()} }>
      <motion.h3 className={styles.title} variants={textVariant}>My work</motion.h3>
      <section className={styles.section}>
        {workMap}
      </section>
    </motion.div>
  );
};
export default WorkComponent;
