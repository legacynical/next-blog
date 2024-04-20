import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>4.19.2024 - </span>
          <span className={styles.category}>WEB DEV</span>
        </div>
        <Link href="/">
          <h1>This is a test title for a card.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          reiciendis corrupti blanditiis sapiente quas provident fugit nam modi
          fugiat quasi, qui ducimus accusantium eveniet possimus maxime harum.
          Excepturi, mollitia beatae!
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
