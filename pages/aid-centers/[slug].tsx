import { GetServerSideProps, NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Header from '@/components/AidCenter/Header';
import Contact from '@/components/AidCenter/Contact';

import { AidCenter, AidCenterCallRequiredEnum } from 'backend-sdk/models';
import { AidCentersApi } from 'backend-sdk/apis';
import { Configuration } from 'backend-sdk/runtime';

import RequestItem from '@/components/RequestItem';

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
  const { name, note, assetsRequested, assetsOverloaded, callRequired } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Gyűjtőközpont - {name}</title>
        <meta name="description" content="" />
      </Head>

      {/* NAVBAR */}
      <NavBar />
      <div className="px-2">
        <div className="aid-center-container rounded-[40px] overflow-hidden my-[120px] container max-w-5xl min-h-screen bg-white mx-auto">
          {/* HEADER */}
          <Header {...props} />

          <div className="details container max-w-5xl min-h-screen bg-white mx-auto px-3 py-10 md:px-6 md:py-10">
            <div className="grid md:grid-cols-3 gap-10">
              {/* NEED-NOT-NEED */}
              <div className="md:col-span-2 flex flex-col gap-y-10">
                {/* AID-CENTER-NOTE */}
                <div className="aid-center-note">
                  <p>{note}</p>
                </div>

                {/* AID-CENTER INSTRUCTION */}

                {callRequired && callRequired === AidCenterCallRequiredEnum.Required && (
                  <div className="aid-center-instruction py-4 border-t-1  border-t-2 border-b-2 border-gray-200 text-sm">
                    <h3>Adományküldés előtt kérjük hívja fel a gyűjtőpontot!</h3>
                  </div>
                )}

                {/* AID NEEDED */}
                {assetsRequested && (
                  <div className="aid-needed flex-col flex gap-y-4">
                    <h2>Adományok, amiket várunk</h2>
                    <div className="item-list flex flex-col gap-y-3	">
                      {/* ITEM */}
                      {assetsRequested.map((item) => (
                        <RequestItem key={item.id} {...item} />
                      ))}
                    </div>
                  </div>
                )}

                {/* AID NOT NEEDED */}
                {assetsOverloaded && (
                  <div className="aid-not-needed flex-col flex gap-y-4">
                    <h2>Amiket ne hozzanak</h2>
                    <div className="item-list flex flex-col gap-y-3	">
                      {/* ITEM */}
                      {assetsOverloaded.map((item) => (
                        <RequestItem key={item.id} {...item} />
                      ))}
                    </div>
                  </div>
                )}
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
