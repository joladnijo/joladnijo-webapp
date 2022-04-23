import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '@/components/NavBar';

import heroDecor from '../public/images/hero-decor.png';
import { getBackendBaseUrl } from 'lib/apiHelpers';
import { FeedItemsApi } from 'backend-sdk/apis';
import { Configuration } from 'backend-sdk/runtime';
import { FeedItem } from 'backend-sdk/models';
import AidCenterContainer from '@/components/Home/AidCenterContainer';

interface FeedItemGroup {
  aidCenterSlug: string;
  aidCenterName: string;
  feedItems: FeedItem[];
}

interface HomeProps {
  feedItemGroups: FeedItemGroup[];
}

const Home: NextPage<HomeProps> = (props) => {
  const basePath = getBackendBaseUrl();

  return (
    <div className={styles.container}>
      <Head>
        <title>Jól adni jó</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content="hu_HU" />
        <meta property="og:url" content={`${basePath}/`} />
        <meta property="og:title" content="Jól adni jó!" />
        <meta
          property="og:description"
          content="Támogasd az adománygyűjtő közösségeket pont azzal, amire szükségük van!"
        />
        <meta name="description" content="Támogasd az adománygyűjtő közösségeket pont azzal, amire szükségük van!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${basePath}/images/main-hero.png`} />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <div className="px-2 w-full ">
          <div className="container relative mx-auto bg-cover bg-main-hero min-h-[584px] bg-bottom	mt-12 flex flex-col justify-center  px-5 md:px-20">
            <div className="text-container max-w-[621px] mb-10">
              <h1 className="large text-white text-5xl md:text-7xl uppercase mb-3 leading-snug	opacity-95 antialiased">
                Ukrán válsághelyzet
              </h1>
              <p className="text-white text-l md:text-xl uppercase opacity-95">
                Ukrajnai, kárpátaljai családok ezrei menekülnek a háború elől. Támogasd őket azzal, amire szükségük van.
              </p>
              <button
                type="button"
                className="py-4 px-6 mt-10 bg-orange hover:bg-orange-lighten focus:ring-orange-lighten focus:ring-offset-orange-light text-white transition ease-in duration-200 text-center focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Mivel tudok segíteni?
              </button>
            </div>
            <div className="image-container h-[26px] sm:h-[38px] md:h-[44px] absolute w-[300px] xs:w-[400px] sm:max-w-[500px] md:w-[600px] bottom-0 left-0">
              <Image src={heroDecor} alt="Hero deco" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        <div className="px-2 w-full mt-10">
          <div className="container mx-auto max-w-[1000px]">
            {props.feedItemGroups.map((group) => (
              <AidCenterContainer key={group.aidCenterSlug} {...group} />
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>...</footer>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const basePath = getBackendBaseUrl();
  const api = new FeedItemsApi(new Configuration({ basePath }));
  const feedItems = await api.listFeedItems();

  const init: FeedItemGroup[] = [];
  const feedItemGroups: FeedItemGroup[] = feedItems.reduce((prev, curr) => {
    const group = prev.find((g) => g.aidCenterSlug === curr.aidCenterSlug);
    if (group) {
      group.feedItems = [...group.feedItems, curr];
      return prev;
    } else {
      const ret: FeedItemGroup[] = [
        ...prev,
        { aidCenterSlug: curr.aidCenterSlug, aidCenterName: curr.aidCenterName, feedItems: [curr] },
      ];
      return ret;
    }
  }, init);

  return {
    props: {
      feedItemGroups,
    },
  };
};
