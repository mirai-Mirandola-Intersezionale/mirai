import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Search from "../components/searchBar";

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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1>Lista di centri</h1>
          <Search />
        </section>
        <section className={styles.data}>
          {data.map((post) => (
            <div className={styles.post} key={post.id}>
              {post.logo ? (
                <img src={post.logo} alt="logo" width="30" height="30" />
              ) : (
                ""
              )}
              <h3>{post.nome}</h3>
              {post.posizione.indirizzo_completo ? (
                <p>{post.posizione.indirizzo_completo}</p>
              ) : (
                ""
              )}
              {post.descrizione[0] ? <p>{post.descrizione[0]}</p> : ""}
            </div>
          ))}
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
