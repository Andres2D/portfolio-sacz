import * as React from "react";
import * as styles from './index.module.scss';
import {contactLinks, sectionsList} from '../../constants';

const HeaderComponent: React.FC = () => {

  const linksMap = sectionsList.map(section => <a className={styles.link} href="#">{section}</a>);
  const contactMap = contactLinks.map(contact => <a href="">{contact}</a>);

  return (
    <header className={`${styles.header}`}>

      <div>
        <h1 className={styles.title}>Sebastián Alcaraz</h1>
        <h3 className={styles.subtitle}>Digital Marketing specialist</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam tempora ipsa quae. Eaque optio hic suscipit animi autem eum. Placeat aliquam obcaecati eius dolorum rerum iure possimus vitae impedit?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus blanditiis modi repellendus explicabo officia impedit quidem eligendi, nihil excepturi vel, sit, nemo aspernatur! Fuga vel incidunt facilis qui autem nobis.
        </p>
      </div>
      
      <div className={styles.links}>
        {linksMap}
      </div>

      <div className={styles.contact}>
        {contactMap}
      </div>

    </header>
  );
};
export default HeaderComponent;
