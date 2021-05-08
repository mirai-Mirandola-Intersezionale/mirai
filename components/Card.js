import styles from "../styles/Home.module.css";

export default function Card({ data }) {
  return (
    <>
      {data.map((post) => (
        <div className={styles.post} key={post.id}>
          {/* {post.logo ? (
                <img src={post.logo} alt="logo" width="30" height="30" />
              ) : (
                ""
              )} */}
          <h3>{post.nome}</h3>
          {post.posizione.indirizzo_completo ? (
            <p>{post.posizione.indirizzo_completo}</p>
          ) : (
            ""
          )}
          {post.descrizione[0] ? (
            <p>{post.descrizione[0].slice(0, 100)}...</p>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
}
