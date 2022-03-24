import { GetServerSideProps, NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Header from '@/components/AidCenter/Header';
import Contact from '@/components/AidCenter/Contact';
import { AidCenter, AidCentersApi } from 'backend-sdk';
import { Configuration } from 'backend-sdk';
import Financial from '@/components/AidCenter/Financial';
import Social from '@/components/AidCenter/Social';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { defaultAidCenter } from 'lib/mocks/defaultAidCenter';

interface AidCenterInfoPageProps extends AidCenter {}

interface AidCenterInfoPageParams {
  [key: string]: string;
  slug: string;
}

const getBackendBaseUrl = ({ ENVIRONMENT }: any) => {
  if (ENVIRONMENT === 'staging') {
    return 'https://api.staging.joladnijo.jmsz.hu';
  } else if (ENVIRONMENT === 'production') {
    return 'https://api.staging.joladnijo.jmsz.hu';
  } else return 'http://localhost:8000';
};

const AidCenterInfoPage: NextPage<AidCenterInfoPageProps> = (props) => {
  const { name } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Gyűjtőközpont - {name}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR */}
      <NavBar />

      {/* HEADER */}
      <Header {...props} />

      <div className="details container max-w-5xl min-h-screen bg-white mx-auto px-3 py-10 md:px-6 md:py-10">
        <div className="grid md:grid-cols-3 gap-y-10">
          {/* NEED-NOT-NEED */}
          <div className="md:col-span-2 flex flex-col gap-y-10">
            {/* AID NEEDED */}
            <div className="aid-needed flex-col flex gap-y-4">
              <h2>Adományok, amiket várunk</h2>
              <div className="item-list flex flex-col gap-y-3	">
                {/* ITEM */}
                <div className="item flex flex-row gap-x-4  items-center">
                  <div className="icon relative h-[38px]  w-[38px] flex items-center justify-center border border-[#303b5966] rounded-full">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-400 top-5 left-4" />
                  </div>
                  <p>Item name</p>
                </div>

                <div className="item flex flex-row gap-x-4  items-center">
                  <div className="icon relative h-[38px]  w-[38px] flex items-center justify-center border border-[#303b5966] rounded-full">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-400 top-5 left-4" />
                  </div>
                  <p>Item name</p>
                </div>
              </div>
            </div>

            {/* AID NOT NEEDED */}
            <div className="aid-not-needed flex-col flex gap-y-4">
              <h2>Amiket ne hozzanak</h2>
              <div className="item-list flex flex-col gap-y-3	">
                {/* ITEM */}
                <div className="item flex flex-row gap-x-4  items-center">
                  <div className="icon relative h-[38px]  w-[38px] flex items-center justify-center border border-[#303b5966] rounded-full">
                    <div className="slab h-[1px] w-[38px] absolute t-16.5 l-0 bg-[#999999] rotate-45"></div>
                    <FontAwesomeIcon icon={faSearch} className="text-gray-400 top-5 left-4" />
                  </div>
                  <p>Item name</p>
                </div>

                <div className="item flex flex-row gap-x-4  items-center">
                  <div className="icon relative h-[38px]  w-[38px] flex items-center justify-center border border-[#303b5966] rounded-full">
                    <div className="slab h-[1px] w-[38px] absolute t-16.5 l-0 bg-[#999999] rotate-45"></div>
                    <FontAwesomeIcon icon={faSearch} className="text-gray-400 top-5 left-4" />
                  </div>
                  <p>Item name</p>
                </div>
              </div>
            </div>
          </div>
          {/* END OF NEED-NOT-NEED */}

          {/* SOCIAL */}
          <div className="social col-span-1 flex flex-col gap-y-10	">
            {/* SOCIAL */}
            {/* <Social {...props} /> */}
            {/* END OF SOCIAL */}

            {/* CONTACT */}
            <Contact {...props} />
            {/* END OF CONTACT */}

            {/* FINANCIAL */}
            {/* <Financial /> */}
            {/* END OF FINANCIAL */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AidCenterInfoPage;

export const getServerSideProps: GetServerSideProps<AidCenterInfoPageProps, AidCenterInfoPageParams> = async (
  context,
) => {
  // const basePath = getBackendBaseUrl(process.env);
  // const api = new AidCentersApi(new Configuration({ basePath }));
  // const { slug } = context.params!;

  try {
    const response: AidCenter = { ...defaultAidCenter }; // await api.retrieveAidCenter(slug);
    return {
      props: {
        ...response,
      },
    };
  } catch (error: any) {
    const err: Response = error;
    if (err.status === 404) return { notFound: true };
    throw error;
  }
};
