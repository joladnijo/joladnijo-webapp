import { NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

const AidCenterInfoPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Gyűjtőközpont - {slug}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Slug: {slug}</h1>
      </main>
    </div>
  );
};

export default AidCenterInfoPage;
