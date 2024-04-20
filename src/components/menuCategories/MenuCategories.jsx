import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.webDev}`}
      >
        Web Dev
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.gameDev}`}
      >
        Game Dev
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.objPrinting}`}
      >
        3D Printing
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.music}`}
      >
        Music
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.ai}`}
      >
        AI
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.youtube}`}
      >
        Youtube
      </Link>
    </div>
  );
};

export default MenuCategories;
