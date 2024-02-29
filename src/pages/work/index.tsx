import * as React from "react";
import { workList } from '../../constants/work';
import WorkCardComponent from "./components/work-card";
import * as styles from './index.module.scss';

const WorkComponent: React.FC = () => {

  const workMap = workList.map(work => {
    return <WorkCardComponent key={work.id} work={work}/>
  });

  return (
    <div id='work' className={styles.container}>
      <h3 className={styles.title}>My work</h3>
      <section className={styles.section}>
        {workMap}
      </section>
    </div>
  );
};
export default WorkComponent;
