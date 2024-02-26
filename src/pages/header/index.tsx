import * as React from "react";
import * as styles from './index.module.scss';

const HeaderComponent: React.FC = () => {
  return (
    <header className={`${styles.header}`}>

      <h1 className={styles.title}>Sebastián Alcaraz</h1>
      <h3 className={styles.subtitle}>Digital Marketing specialist</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam tempora ipsa quae. Eaque optio hic suscipit animi autem eum. Placeat aliquam obcaecati eius dolorum rerum iure possimus vitae impedit?</p>
      
      <div className={styles.links}>
        <a href="#">About</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
      </div>

      <div className={styles.contact}>
        <a href="">LinkedIn</a>
        <a href="">Facebook</a>
        <a href="">Canvas</a>
        <a href="">Spotify</a>
        <a href="">Gmail</a>
      </div>

    </header>
  );
}

export default HeaderComponent;
