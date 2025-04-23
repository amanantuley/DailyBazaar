import Image from "next/image";
// import styles from "./page.module.css";
import Login from "./Login/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <h1>Welcome to my Home page</h1>
      <Link href="/Login">Login go to </Link> */}
      <Login/>
    </>
  );
}
