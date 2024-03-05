import * as React from "react";
import { motion } from 'framer-motion';
import * as styles from './card.module.scss';
import { Experience } from '../../../interfaces/experience';
import { fadeIn } from "../../../utils/motion";

type Props = {
  experience: Experience;
  index: number;
}

const CardComponent: React.FC<Props> = ({experience, index}) => {

  if(!experience) {
    return (
      <p>Card error!</p>
    );
  }

  const { 
    jobTitle,
    initialDate,
    finalDate,
    tags,
    description,
    place,
    redirectUrl
  } = experience;

  const tagsMap = tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>);

  const descriptionMap = description.map(item => <li>{item}</li>);

  const navigateToPage = (url?: string)   => {
    if(!url || url?.trim() == '') {
      return;
    };
    
    window.open(url, '_blank');
  }

  return (
    <motion.div 
      className={styles.card} 
      onClick={() => navigateToPage(redirectUrl)}
      variants={fadeIn('down', 'spring', index * 0.2, 1)}>
      <header className={styles.cardHeader}>
        <h2 className={styles.title}>{jobTitle}</h2>
        <h4 className={styles.date}>{initialDate} - {finalDate ?? 'Present'}</h4>
      </header>
      <p className={styles.place}>{place}</p>
      <ul className={styles.description}>
        {descriptionMap}
      </ul>
      <div className={styles.skills}>
        {tagsMap}
      </div>
    </motion.div>
  );
};
export default CardComponent;
