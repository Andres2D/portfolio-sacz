import * as React from "react";
import { motion } from 'framer-motion';
import { Work } from "../../../interfaces/work";
import * as styles from './work-card.module.scss';
import { fadeIn } from '../../../utils/motion';

type Props = {
  work: Work;
  index: number;
  onClick: () => void;
}

const WorkCardComponent: React.FC<Props> = ({work, index, onClick}) => {

  if(!work) {
    return (
      <p>Work unavailable!</p>
    )
  }

  const {
    description,
    image,
    title
  } = work; 

  return (
    <motion.div 
      className={styles.card}
      variants={fadeIn('down', 'spring', index * 0.2, 1)}
      onClick={onClick}
    >
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>
          {title}
          <br />
          <span className={styles.span}>{description}</span>
        </h2>
      </div>
    </motion.div>
  );
};
export default WorkCardComponent;
