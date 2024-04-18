import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hello stranger!</b> I hope you enjoy the things I share :)
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>This is the post title.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint iusto
            atque voluptates laboriosam dolores ullam maxime, doloribus laborum
            voluptate, omnis commodi ut fuga accusamus excepturi. Delectus
            dolores assumenda reiciendis aperiam.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
