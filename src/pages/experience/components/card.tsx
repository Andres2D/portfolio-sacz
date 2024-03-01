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
    <div className={styles.card} onClick={() => navigateToPage(redirectUrl)}>
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
    </div>
  );
};
export default CardComponent;
