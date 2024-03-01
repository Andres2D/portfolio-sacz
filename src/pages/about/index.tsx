import * as React from "react";
import { aboutParagraphs, keyWords } from "../../constants";
import * as styles from './index.module.scss';

const AboutComponent: React.FC = () => {

  const keyWordsMap = (paragraph: string) => {
    const paragraphList = paragraph.split(' ');
    const mappedList = paragraphList.map(item => keyWords.includes(item.replace(',', '')) ? `<span style="color: #80CED7">${item}</span>` : item);
    return mappedList.join(' ');
  }

  const aboutMap = aboutParagraphs.map(paragraph => <p dangerouslySetInnerHTML={{__html: keyWordsMap(paragraph)}} />);

  return (
    <section id='about' className={styles.section}>
      <h3 className={styles.title}>About</h3>
      {aboutMap}
    </section>
  );
};
export default AboutComponent;
