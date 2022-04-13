import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface HomeProps {
  environmentName?: string;
}

const Home: NextPage<HomeProps> = ({ environmentName }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jól adni jó</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">Jól adni jó. Environment: {environmentName}</h1>
      </main>

      <footer className={styles.footer}>...</footer>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return { props: { environmentName: (process.env.ENVIRONMENT as string) || 'local' } };
};
