import { GetServerSideProps, NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Header from '@/components/AidCenter/Header';
import Contact from '@/components/AidCenter/Contact';
import { AidCenter, AidCentersApi } from 'backend-sdk';
import { Configuration } from 'backend-sdk';

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
  const { name, organization } = props;
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

      <div className="details container max-w-5xl min-h-screen bg-white mx-auto px-3 py-5 md:px-6 md:py-10">
        <div className="grid md:grid-cols-3 gap-y-10">
          {/* NEED-NOT-NEED */}
          <div className="md:col-span-2 flex flex-col gap-y-10">
            {/* AID NEEDED */}
            <div className="aid-needed flex-col flex gap-y-4">
              <h2>Adományok, amiket várunk</h2>
              <div className="item-list flex flex-col gap-y-3	">
                {/* ITEM */}
                <div className="item flex flex-row gap-x-4  items-center">
                  <div className="icon">
                    <i className="fa fa-search text-gray-400 top-5 left-4"></i>
                  </div>
                  <p>Item name</p>
                </div>

                <div className="item flex flex-row gap-x-4  items-center">
                  <div className="icon">
                    <i className="fa fa-search text-gray-400 top-5 left-4"></i>
                  </div>
                  <p>Item name</p>
                </div>
              </div>
            </div>

            {/* AID NOT NEEDED */}
            <div className="aid-not-needed flex-col flex gap-y-4">
              <h2>Adományok, amikre már nincs szükség</h2>
              <div className="item-list flex flex-col gap-y-3	">
                {/* ITEM */}
                <div className="item flex flex-row gap-x-4  items-center">
                  <div className="icon relative">
                    <div className="slab"></div>
                    <i className="fa fa-search text-gray-400 top-5 left-4"></i>
                  </div>
                  <p>Item name</p>
                </div>

                <div className="item flex flex-row gap-x-4  items-center">
                  <div className="icon relative">
                    <div className="slab"></div>
                    <i className="fa fa-search text-gray-400 top-5 left-4"></i>
                  </div>
                  <p>Item name</p>
                </div>
              </div>
            </div>
          </div>
          {/* END OF NEED-NOT-NEED */}

          {/* SOCIAL */}
          <div className="social col-span-1 flex flex-col gap-y-10	">
            <div className="social flex flex-col gap-4">
              <h2>Gyűjtőpont megosztása</h2>
              <div className="icons flex flex-row gap-x-4">
                {/* FACEBOOK */}
                <div className="social-icon facebook">
                  <svg width="11" height="23" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.29788 22.75H6.39165V11.5055H9.46273L10.0701 7.992H6.39165V5.446C6.39165 4.62525 6.92235 3.7635 7.68082 3.7635H9.77141V0.25H7.20931V0.26575C3.20045 0.41125 2.3768 2.733 2.30538 5.17175H2.29788V7.992H0.25V11.5055H2.29788V22.75Z"
                      fill="#3B5998"
                    />
                  </svg>
                </div>
                {/* MAIL */}
                <div className="social-icon mail">
                  <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.3984 0.371094H2.89844C1.59344 0.371094 0.658937 1.29922 0.648438 2.62109V14.6211C0.648438 15.943 1.59344 16.8711 2.89844 16.8711H19.3984C20.7034 16.8711 21.6484 15.943 21.6484 14.6211V2.62109C21.6484 1.29922 20.7034 0.371094 19.3984 0.371094ZM19.3984 4.87109L11.1484 10.1211L2.89844 4.87109V2.62109L11.1484 7.87109L19.3984 2.62109V4.87109Z"
                      fill="#888888"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* END OF SOCIAL */}

            {/* CONTACT */}
            <Contact {...props} />
            {/* END OF CONTACT */}

            {/* FINANCIAL */}
            <div className="info-box">
              <div className="info flex flex-col gap-4 p-6">
                <h2>Pénzadományok</h2>
                <div className="finance-item">
                  <label>Kedvezményezett neve</label>
                  <p>Piripócs művelődési ház</p>
                </div>
                <div className="finance-item">
                  <label>Bankszámlaszám</label>
                  <p>10918001-00000084-54320008</p>
                </div>
                <div className="finance-item">
                  <label>Adószám</label>
                  <p>1231231213-02-02</p>
                </div>
                <div className="finance-item">
                  <label>Megjegyzés</label>
                  <p>UKRAJNA</p>
                </div>
              </div>
            </div>
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
  const basePath = getBackendBaseUrl(process.env);
  const api = new AidCentersApi(new Configuration({ basePath }));
  const { slug } = context.params!;

  try {
    const response = await api.retrieveAidCenter(slug);
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
