import * as React from "react";
import { Work } from "../../../interfaces/work";
import * as styles from './work-card.module.scss';

type Props = {
  work: Work;
}

const WorkCardComponent: React.FC<Props> = ({work}) => {

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
    <div className={styles.card}>
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
    </div>
  );
};
export default WorkCardComponent;
