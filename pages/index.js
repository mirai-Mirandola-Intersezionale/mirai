import Head from "next/head";
import styles from "../styles/Home.module.css";
// import NavBar from "../components/NavBar";
import Card from "../components/Card";

export async function getStaticProps(context) {
  const res = await fetch(
    `https://raw.githubusercontent.com/mirai-plus/api/main/associazioni.json`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Lista di centri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1>Lista di centri</h1>
          {/* <NavBar /> */}
        </section>
        <section className={styles.data}>
          <Card data={data} />
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.notion.so/miraiplus/mirai-479dd829dd7648b38961935d1314e847"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by mirai
        </a>
      </footer>
    </div>
  );
}
