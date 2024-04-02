import * as React from "react";
import { motion } from 'framer-motion';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import { workList } from '../../constants/work';
import WorkCardComponent from "./components/work-card";
import * as styles from './index.module.scss';
import { textVariant, staggerContainer } from '../../utils/motion';
import { hr_v } from '../../videos';

const WorkComponent: React.FC = () => {

  const [modalOpen, setModalOpen] = React.useState(false);

  const workMap = workList.map((work, index) => (
    <WorkCardComponent 
      key={work.id} 
      index={index} 
      work={work}
      onClick={() => setModalOpen(true)}
    />
  ));

  const onCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <motion.div 
      id='work' 
      className={styles.container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      variants={{...staggerContainer()} }>
      <motion.h3 className={styles.title} variants={textVariant}>My work</motion.h3>
      <section className={styles.section}>
        {workMap}
      </section>
      <Modal 
        open={modalOpen} 
        onClose={onCloseModal}
      >
        <section className={styles.modalSection}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa porro eveniet blanditiis sed et eos alias dignissimos eum. Sunt sint architecto perferendis natus, assumenda unde corrupti fuga. Voluptates, ratione alias?</p>
          {/* <iframe
            src={hr_v}
            className={styles.videoFrame}
            title='sample'
            // allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            width='230px'
            height='500px'
            allowFullScreen
          />*/}
        </section>
      </Modal>
    </motion.div>
  );
};
export default WorkComponent;
