import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Commments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>4.28.2024</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              assumenda aspernatur repellendus, quia labore quod repellat omnis
              at tempore soluta ut impedit dolore voluptatum culpa reprehenderit
              nulla delectus reiciendis tempora.
            </p>
            <h5>Lorem, ipsum dolor sit amet consectetur.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              assumenda aspernatur repellendus, quia labore quod repellat omnis
              at tempore soluta ut impedit dolore voluptatum culpa reprehenderit
              nulla delectus reiciendis tempora.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              assumenda aspernatur repellendus, quia labore quod repellat omnis
              at tempore soluta ut impedit dolore voluptatum culpa reprehenderit
              nulla delectus reiciendis tempora.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
