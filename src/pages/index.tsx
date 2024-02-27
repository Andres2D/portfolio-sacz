import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import * as styles from './index.module.scss';
import HeaderComponent from "./header";
import AboutComponent from './about/index';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <HeaderComponent />
      <main className={styles.section}>
        <AboutComponent />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </main>
    </div>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Sebastian Alcaraz</title>
