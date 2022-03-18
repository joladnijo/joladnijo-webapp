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
      <div className=' header container mx-auto bg-accent-dark bg-cover bg-hero h-80 max-w-5xl flex items-end relative'>
        <div className='w-full h-full absolute top-0 left-0 right-0 bottom-0 from-black bg-gradient-to-t opacity-80'></div>
        <div className='mx-auto bg-accent-dark bg-cover bg-hero h-80 w-full h-full flex'>
          <div className='title flex sm:items-end flex-col sm:flex-row justify-between absolute px-6 py-5	 bottom-0 left-0 right-0'>
            <div className='left flex flex-col'>
              <h1 className='text-white	'>Piripócs művelődési ház</h1>
              <p className='text-white opacity-70	'>Piripócsi önkormányzat</p>
            </div>
            <p className='text-white opacity-60 text-sm text-right'>Utolára frissítve: 2 napja</p>

          </div>
        </div>
      </div>

      <div className='details container max-w-5xl min-h-screen bg-white mx-auto px-6	py-10'>
        <div className="grid grid-cols-3 gap-4">
            <div className='md:col-span-2'>
              <div className='need'>
                <h2>Adományok, amiket várunk</h2>
                <div className='item-list flex flex-col'>
                  <div className='item'>
                    <div className='icon'>
                      <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default FooAidCenterInfoPage;
