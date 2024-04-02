import * as React from "react";
import { motion } from 'framer-motion';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import { workList } from '../../constants/work';
import WorkCardComponent from "./components/work-card";
import * as styles from './index.module.scss';
import { textVariant, staggerContainer } from '../../utils/motion';
import WorkSamplesModalComponent from './components/work-samples-modal';

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
        center
        styles={{
          modal: {
            textAlign: 'center',
            backgroundColor: '#222f3e'
          },
          closeIcon: {
            fill: 'white'
          }
        }}
      >
        <WorkSamplesModalComponent />
      </Modal>
    </motion.div>
  );
};
export default WorkComponent;
