import { GetServerSideProps, NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import getConfig from 'next/config';

interface AidCenterInfoPageProps {
  id: string;
  name: string;
  slug: string;
}

interface AidCenterInfoPageParams {
  [key: string]: string;
  slug: string;
}

const { publicRuntimeConfig } = getConfig();
const { backendApiBaseUrl } = publicRuntimeConfig;

const AidCenterInfoPage: NextPage<AidCenterInfoPageProps> = ({ slug, name }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gyűjtőközpont - {name}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Slug: {slug}, Name: {name}
        </h1>
      </main>
    </div>
  );
};

export default AidCenterInfoPage;

export const getServerSideProps: GetServerSideProps<AidCenterInfoPageProps, AidCenterInfoPageParams> = async (
  context,
) => {
  const { slug: slugFromQuery } = context.params!;

  const response = await fetch(`${backendApiBaseUrl}/aid-centers/${slugFromQuery}`);
  const data = await response.json();
  return {
    props: {
      ...data,
    },
  };
};
