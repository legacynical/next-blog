import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  // temporary
  const status = "authenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );

  // return <div className={styles.container}>AuthLinks</div>;
};

export default AuthLinks;
