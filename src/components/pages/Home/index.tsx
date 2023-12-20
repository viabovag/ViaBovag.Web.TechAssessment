import Head from 'next/head';

import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>
        <h1>Good luck!</h1>
      </main>
    </>
  );
};

export default Home;
