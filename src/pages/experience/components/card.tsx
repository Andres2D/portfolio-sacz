import * as React from "react";
import * as styles from './card.module.scss';
import { Experience } from '../../../interfaces/experience';

type Props = {
  experience: Experience;
}

const CardComponent: React.FC<Props> = ({experience}) => {

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
    description
  } = experience;

  const tagsMap = tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>);

  return (
    <>
      <div className={styles.outer}>
        <div className={`${styles.dot} ${styles.red}`}></div>
        <div className={`${styles.dot} ${styles.amber}`}></div>
        <div className={`${styles.dot} ${styles.green}`}></div>
      </div>
      <div className={styles.card}>
        <header className={styles.cardHeader}>
          <h2 className={styles.title}>{jobTitle}</h2>
          <h4 className={styles.date}>{initialDate} - {finalDate ?? 'Present'}</h4>
        </header>
        <p className={styles.description}>{description}</p>
        <div className={styles.skills}>
          {tagsMap}
        </div>
      </div>
    </>
  );
};
export default CardComponent;
