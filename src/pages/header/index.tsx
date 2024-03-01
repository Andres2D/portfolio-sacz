import * as React from "react";
import * as styles from './index.module.scss';
import {contactLinks, sectionsList} from '../../constants';
import { Contact } from '../../interfaces/header';
import { profile } from '../../constants/header';
import { resume } from "../../files";

const HeaderComponent: React.FC = () => {

  const linksMap = sectionsList.map(section => 
    <a className={styles.link} href={`#${section.reference}`}>{section.label}</a>
  );
  const contactMap = contactLinks.map(contact => 
    <img 
      className={styles.icon}
      src={contact.image}
      alt={contact.label}
      onClick={() => redirect(contact)}
    />
  );

  const redirect = ({isGmail, url}: Contact) => {
    if(isGmail) {
      const email = `mailto:${url}?subject=files&body=Hi Sebastian, I just checked your web page.`;
      window.location.href = email;
    }else {
      window.open(url, '_blank');
    }
  };

  return (
    <header className={`${styles.header}`}>

      <div>
        <h1 className={styles.title}>{profile.name}</h1>
        <h3 className={styles.subtitle}>{profile.role}</h3>
        <p>{profile.description}</p>
        <a href={resume} target="_blank" className={styles.download}>Download resume</a>
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
