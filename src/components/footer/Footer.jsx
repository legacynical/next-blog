import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="" width={50} height={50} />
          <h1 className={styles.logoText}>Legacynical</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident
          enim dolor expedita tempore quia quidem, voluptates pariatur
          repudiandae culpa sed vel dicta delectus repellendus. Explicabo,
          expedita voluptas! Rem, possimus.
        </p>
        <div className={styles.icons}>
          <Image src="/youtube.png" alt="" width={18} height={18} />
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Styles</Link>
          <Link href="/">Web Dev</Link>
          <Link href="/">Game Dev</Link>
          <Link href="/">3D Printing</Link>
          <Link href="/">Music</Link>
          <Link href="/">AI</Link>
          <Link href="/">Youtube</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Youtube</Link>
          <Link href="/">Facebook</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Instagram</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
