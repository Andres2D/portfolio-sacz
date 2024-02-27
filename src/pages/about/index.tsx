import * as React from "react";
import * as styles from './index.module.scss';

const AboutComponent: React.FC = () => {

  return (
    <section id='about' className={styles.section}>
      <h3 className={styles.title}>About</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque error quidem assumenda nam beatae possimus aspernatur culpa sunt voluptas repellendus laboriosam dignissimos vel, molestiae neque inventore? Porro quos quam nihil.
      Id omnis nesciunt numquam molestias, optio magnam, beatae hic vel illo, recusandae similique libero a perspiciatis inventore officiis natus fugiat quod quam sapiente dolore. Eligendi cum eveniet facere recusandae ullam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt harum impedit nam perferendis molestias natus, tenetur recusandae et. Cum magni id quasi hic voluptatum saepe. Doloribus ducimus odit debitis voluptate.
      Esse architecto optio natus odio excepturi amet, illum dolore sapiente cumque nesciunt adipisci tempore quis mollitia maiores consequatur ipsum aut laboriosam nobis, sint dolores beatae accusantium dolor. Optio, culpa fuga.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime repellendus voluptatem porro hic, alias illo quisquam ad tenetur? Aliquam quam tempore facere dignissimos architecto ipsa id fuga eligendi saepe.</p>
    </section>
  );
};
export default AboutComponent;
