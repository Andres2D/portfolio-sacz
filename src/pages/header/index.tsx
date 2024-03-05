import * as React from "react";
import { motion } from 'framer-motion';
import * as styles from './index.module.scss';
import {contactLinks, sectionsList} from '../../constants';
import { Contact } from '../../interfaces/header';
import { profile } from '../../constants/header';
import { resume } from "../../files";
import { staggerContainer, textVariant, fadeIn } from '../../utils/motion';

const HeaderComponent: React.FC = () => {

  const linksMap = sectionsList.map((section, index) => 
    <motion.a 
      className={styles.link} 
      href={`#${section.reference}`}
      variants={fadeIn('left', 'spring', index * 0.2, 1)}>
        {section.label}
    </motion.a>
  );
  const contactMap = contactLinks.map((contact, index) => 
    <motion.img 
      className={styles.icon}
      src={contact.image}
      alt={contact.label}
      onClick={() => redirect(contact)}
      variants={fadeIn('up', 'spring', index * 0.2, 1)}
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
    <motion.header
      variants={{...staggerContainer(), ...textVariant} }
      className={styles.header}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      >
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
    </motion.header>
  );
};

export default HeaderComponent;
