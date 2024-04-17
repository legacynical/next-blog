import Link from "next/link";
import styles from "./homepage.module.css";

export default function Home() {
  return (
  <div>
    <Link href="/">
      <h1>Bee Movie Script</h1>
      According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.
    </Link>
  </div>
  );
}
