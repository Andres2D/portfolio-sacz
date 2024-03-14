import * as React from "react";
import { motion } from 'framer-motion';
import { aboutParagraphs, keyWords } from "../../constants";
import * as styles from './index.module.scss';
import { staggerContainer, textVariant } from "../../utils/motion";
import { marketingLayer } from "../../images";

const AboutComponent: React.FC = () => {

  const keyWordsMap = (paragraph: string) => {
    const paragraphList = paragraph.split(' ');
    const mappedList = paragraphList.map(item => keyWords.includes(item.replace(',', '')) ? `<span style="color: #80CED7">${item}</span>` : item);
    return mappedList.join(' ');
  }

  const aboutMap = aboutParagraphs.map(paragraph => <p dangerouslySetInnerHTML={{__html: keyWordsMap(paragraph)}} />);

  return (
    <motion.section 
      id='about' 
      className={styles.section}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      variants={{...staggerContainer(), ...textVariant} }>
      <h3 className={styles.title}>About</h3>
      {aboutMap}
      <img 
        className={styles.layer}
        src={marketingLayer} 
        alt="marketing-layer" 
      />
    </motion.section>
  );
};
export default AboutComponent;
