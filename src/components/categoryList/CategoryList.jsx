import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      {/* TODO: add relevant img to public img folder and replace below src*/}
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.webDev}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Web Dev
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.gameDev}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Game Dev
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.objPrinting}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          3D Printing
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.music}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Music
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.ai}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          AI
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.youtube}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          YouTube
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
