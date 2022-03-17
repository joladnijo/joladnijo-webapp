import { GetServerSideProps, NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';

const FooAidCenterInfoPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gyűjtőközpont</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Ide lehet dolgozni</h1>
      </main>
    </div>
  );
};

export default FooAidCenterInfoPage;
