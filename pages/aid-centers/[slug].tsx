import { GetServerSideProps, NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import { AidCenter } from 'models/AidCenter';

interface AidCenterInfoPageProps {
  id: string;
  name: string;
  slug: string;
}

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
      <nav className="flex bg-white flex-wrap items-center justify-center p-4 border-b-1 border-gray-100">
        <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
          <a className="text-xl text-gray-800 font-semibold font-heading" href="#">
            <svg
              className="mx-auto"
              width="112"
              height="51"
              viewBox="0 0 112 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.3116 27.7979C57.7132 13.8157 41.1734 -6.83135 24.8218 2.21998V2.21998V50.8992L45.3116 27.7979Z"
                fill="url(#paint0_linear_310_203)"
              />
              <path
                d="M4.33198 27.7979C-8.06963 13.8157 8.47015 -6.83135 24.8218 2.21998V2.21998V50.8992L4.33198 27.7979Z"
                fill="url(#paint1_linear_310_203)"
              />
              <path
                d="M43.0001 19.8176C42.6094 20.1836 42.1485 20.506 41.7177 20.8372C41.2068 21.2381 40.6758 21.6303 40.1448 22.0224C39.163 22.737 38.1511 23.4342 37.1592 24.1488C36.9689 23.7131 36.5481 23.3471 36.1073 23.0944C35.446 22.7109 34.6445 22.5105 33.833 22.4146C34.3339 21.8481 35.1655 21.6215 35.8868 21.3427C36.7284 21.0202 37.3997 20.5148 38.121 20.0267C38.8323 19.5474 39.6038 19.1117 40.5155 19.0594C41.3871 18.9897 42.4491 19.2075 43.0001 19.8176Z"
                fill="#FCFCFC"
              />
              <path
                d="M41.9384 18.3008C41.8683 18.4838 41.718 18.6494 41.5878 18.8062C41.3473 18.7627 41.0968 18.7365 40.8564 18.7278C39.8445 18.6755 38.9328 19.1025 38.1413 19.608C37.3499 20.1222 36.6385 20.7061 35.7268 21.0547C34.8753 21.3771 33.9736 21.656 33.4326 22.3532C33.4326 22.3532 33.4326 22.3532 33.4326 22.3619C33.1721 22.3357 32.9016 22.3183 32.6511 22.3096C32.5609 22.3096 32.4808 22.3009 32.3906 22.3009C32.9917 21.7344 33.7431 21.3074 34.4945 20.9065C35.3261 20.4621 36.1176 19.9914 36.879 19.4598C37.6404 18.9282 38.4219 18.3705 39.3436 18.0655C40.1651 17.8127 41.2772 17.7256 41.9384 18.3008Z"
                fill="#FCFCFC"
              />
              <path
                d="M38.9025 17.8827C38.1912 18.1616 37.55 18.5886 36.9589 19.0069C36.5582 19.2858 36.1774 19.5647 35.7667 19.8174C35.3359 20.0876 34.885 20.3316 34.4242 20.5756C33.5225 21.0636 32.6008 21.5691 31.9195 22.3011C31.2583 22.3011 30.587 22.3447 29.9258 22.3883C30.5169 21.8741 31.2082 21.4558 31.8794 21.0375C32.6509 20.5495 33.3422 20.0091 34.0435 19.434C34.7247 18.8849 35.4461 18.3446 36.3177 18.0483C37.1192 17.7781 38.0509 17.7258 38.9025 17.8827Z"
                fill="#FCFCFC"
              />
              <path
                d="M27.7718 25.8917C27.7317 25.883 27.6916 25.883 27.6616 25.8743C27.4211 25.8569 27.1907 25.8394 26.9502 25.8307L26.3491 25.8046C26.3391 25.7958 26.2589 25.8133 26.2589 25.8046C25.9383 25.7958 25.6177 25.7958 25.2971 25.8133L24.9565 25.8307C24.656 25.8481 24.3654 25.8743 24.0648 25.9091C22.7223 26.0747 21.46 26.432 20.2477 26.9462C20.0373 27.0334 19.857 26.7632 20.0674 26.6761C21.4099 26.1009 22.8326 25.7087 24.3253 25.5693C25.4675 25.456 26.6096 25.4821 27.7517 25.5693C27.7718 25.5693 27.7918 25.5693 27.8118 25.578C27.9821 25.5954 28.1424 25.6041 28.3128 25.6216C29.4349 25.7348 30.5369 25.9179 31.659 26.005C32.7911 26.0922 33.9833 26.1183 35.0653 25.7871C35.9069 25.5344 37.1492 25.1771 36.8787 24.2359C36.6182 23.3295 35.4561 23.1378 34.5143 22.9025C33.252 22.5888 31.9295 22.5713 30.6371 22.6062C29.3447 22.6411 28.0523 22.4319 26.7599 22.4058C25.5476 22.3796 24.3053 21.9613 23.2333 21.421C23.2233 21.421 23.2032 21.4123 23.1932 21.4036C23.1832 21.4036 23.1832 21.3948 23.1732 21.3948L23.1632 21.3861C21.3999 20.3316 19.5064 18.9634 17.2622 18.9024C16.08 18.8675 14.9479 19.1464 13.7957 19.3468C13.2347 19.4427 12.6536 19.5473 12.0825 19.556C11.5115 19.5647 10.9404 19.556 10.3693 19.556C9.03684 19.5473 7.71438 19.6083 6.46204 20.0353C5.2598 20.4362 4.11767 20.9591 3.06571 21.604C2.00373 22.2489 1.11207 23.0245 0.180336 23.7914C0.120224 23.8437 0.060112 23.8873 0 23.9396L4.86907 30.2666C5.15962 30.0836 5.46018 29.9093 5.78077 29.7611C6.9229 29.2208 8.1552 28.9681 9.44761 28.9768C10.7701 28.9942 12.0925 29.1946 13.3749 29.4561C14.8076 29.7437 16.2302 30.0836 17.6529 30.4147C19.0655 30.7372 20.4882 31.0509 21.9409 31.2601C23.3435 31.4605 24.8363 31.5825 26.2289 31.3124C26.2389 31.3124 26.2589 31.3124 26.269 31.3124C27.5914 30.6239 28.6935 29.674 29.7855 28.7328C30.3265 28.2622 30.8775 27.7916 31.4486 27.3558C31.8894 27.0159 32.3503 26.6673 32.8512 26.3885C31.4586 26.3885 30.046 26.1444 28.6734 25.9789L27.7718 25.8917Z"
                fill="#FCFCFC"
              />
              <path
                d="M30.0259 21.7615C30.0359 21.7615 30.0459 21.7615 30.0559 21.7615V21.7344C30.0459 21.7434 30.0359 21.7524 30.0259 21.7615Z"
                fill="#FCFCFC"
              />
              <path
                d="M67.24 11.704C67.24 12.4 67.108 12.972 66.844 13.42C66.588 13.876 66.256 14.232 65.848 14.488C65.448 14.744 64.968 14.964 64.408 15.148L63.82 13.588C64.164 13.452 64.42 13.292 64.588 13.108C64.764 12.932 64.88 12.732 64.936 12.508C64.992 12.276 65.02 11.98 65.02 11.62V4.66H67.24V11.704ZM71.9955 4.444C73.2035 4.444 74.1435 4.828 74.8155 5.596C75.4875 6.364 75.8235 7.44 75.8235 8.824C75.8235 9.728 75.6715 10.512 75.3675 11.176C75.0715 11.832 74.6355 12.336 74.0595 12.688C73.4835 13.04 72.7955 13.216 71.9955 13.216C70.7875 13.216 69.8475 12.832 69.1755 12.064C68.5115 11.296 68.1795 10.216 68.1795 8.824C68.1795 7.92 68.3275 7.14 68.6235 6.484C68.9275 5.828 69.3635 5.324 69.9315 4.972C70.5075 4.62 71.1955 4.444 71.9955 4.444ZM71.9955 6.04C71.4755 6.04 71.0915 6.256 70.8435 6.688C70.6035 7.12 70.4835 7.832 70.4835 8.824C70.4835 9.816 70.6075 10.532 70.8555 10.972C71.1035 11.404 71.4835 11.62 71.9955 11.62C72.5235 11.62 72.9075 11.404 73.1475 10.972C73.3875 10.54 73.5075 9.824 73.5075 8.824C73.5075 7.832 73.3875 7.12 73.1475 6.688C72.9075 6.256 72.5235 6.04 71.9955 6.04ZM72.9795 1.36L73.7475 2.932L70.7835 4L70.2435 2.92L72.9795 1.36ZM79.0086 4.66V11.272H82.2126L81.9726 13H76.7886V4.66H79.0086ZM90.0983 13L89.7263 11.296H87.5183L87.1463 13H84.8423L87.3143 4.66H89.9783L92.4503 13H90.0983ZM87.8663 9.712H89.3783L88.6223 6.244L87.8663 9.712ZM95.3628 4.66C96.6828 4.66 97.7428 4.96 98.5428 5.56C99.3428 6.152 99.7428 7.232 99.7428 8.8C99.7428 11.6 98.3388 13 95.5308 13H92.8668V4.66H95.3628ZM95.0868 6.244V11.416H95.6628C96.2708 11.416 96.7188 11.224 97.0068 10.84C97.3028 10.456 97.4508 9.776 97.4508 8.8C97.4508 8.128 97.3788 7.608 97.2348 7.24C97.0988 6.864 96.8988 6.604 96.6348 6.46C96.3788 6.316 96.0508 6.244 95.6508 6.244H95.0868ZM107.306 13H104.51L102.398 6.724L102.434 6.976C102.514 7.528 102.574 8.048 102.614 8.536C102.662 9.016 102.686 9.564 102.686 10.18V13H100.718V4.66H103.454L105.638 10.96C105.542 10.36 105.466 9.82 105.41 9.34C105.362 8.86 105.338 8.308 105.338 7.684V4.66H107.306V13ZM110.825 4.66V13H108.605V4.66H110.825ZM70.48 39.408C70.48 40.8 70.216 41.944 69.688 42.84C69.176 43.752 68.512 44.464 67.696 44.976C66.896 45.488 65.936 45.928 64.816 46.296L63.64 43.176C64.328 42.904 64.84 42.584 65.176 42.216C65.528 41.864 65.76 41.464 65.872 41.016C65.984 40.552 66.04 39.96 66.04 39.24V25.32H70.48V39.408ZM79.9909 24.888C82.4069 24.888 84.2869 25.656 85.6309 27.192C86.9749 28.728 87.6469 30.88 87.6469 33.648C87.6469 35.456 87.3429 37.024 86.7349 38.352C86.1429 39.664 85.2709 40.672 84.1189 41.376C82.9669 42.08 81.5909 42.432 79.9909 42.432C77.5749 42.432 75.6949 41.664 74.3509 40.128C73.0229 38.592 72.3589 36.432 72.3589 33.648C72.3589 31.84 72.6549 30.28 73.2469 28.968C73.8549 27.656 74.7269 26.648 75.8629 25.944C77.0149 25.24 78.3909 24.888 79.9909 24.888ZM79.9909 28.08C78.9509 28.08 78.1829 28.512 77.6869 29.376C77.2069 30.24 76.9669 31.664 76.9669 33.648C76.9669 35.632 77.2149 37.064 77.7109 37.944C78.2069 38.808 78.9669 39.24 79.9909 39.24C81.0469 39.24 81.8149 38.808 82.2949 37.944C82.7749 37.08 83.0149 35.648 83.0149 33.648C83.0149 31.664 82.7749 30.24 82.2949 29.376C81.8149 28.512 81.0469 28.08 79.9909 28.08ZM81.9589 18.72L83.4949 21.864L77.5669 24L76.4869 21.84L81.9589 18.72ZM93.4173 25.32L92.8653 35.712H89.4573L88.9053 25.32H93.4173ZM91.1613 37.8C91.8013 37.8 92.3453 38.032 92.7933 38.496C93.2573 38.944 93.4893 39.488 93.4893 40.128C93.4893 40.768 93.2573 41.312 92.7933 41.76C92.3453 42.208 91.8013 42.432 91.1613 42.432C90.5213 42.432 89.9693 42.208 89.5053 41.76C89.0573 41.312 88.8333 40.768 88.8333 40.128C88.8333 39.488 89.0573 38.944 89.5053 38.496C89.9693 38.032 90.5213 37.8 91.1613 37.8Z"
                fill="#090015"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_310_203"
                  x1="46.1655"
                  y1="13.6169"
                  x2="22.6043"
                  y2="36.208"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFA943" />
                  <stop offset="0.999214" stopColor="#A12323" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_310_203"
                  x1="1.39909"
                  y1="23.5958"
                  x2="27.0393"
                  y2="4.05379"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E28D3E" />
                  <stop offset="0.9999" stopColor="#B84040" />
                  <stop offset="1" stopColor="#D81F1F" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>

        {/* FOR FUTURE MENU ITEMS */}
        {/* <div className="block lg:hidden">
            <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>
                        Menu
                    </title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                    </path>
                </svg>
            </button>
        </div>
        <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
                Home
            </a>
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
                Team
            </a>
            <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">
                Galery
            </a>
        </div>

         <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
                Content
            </a>
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
                FAQ
            </a>
            <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">
                Contact
            </a>
        </div> */}
      </nav>

      {/* HEADER */}
      <div className="header container mx-auto bg-accent-dark bg-cover bg-hero h-80 max-w-5xl flex items-end relative">
        <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 from-black bg-gradient-to-t opacity-80"></div>
        <div className="mx-auto bg-accent-dark bg-cover bg-hero h-80 w-full h-full flex">
          <div className="title flex sm:items-end flex-col sm:flex-row justify-between absolute px-3 py-4	md:px-6 md:py-5 bottom-0 left-0 right-0">
            <div className="left flex flex-col">
              <h1 className="text-white	">{name}</h1>
              <p className="text-white opacity-70	">Piripócsi önkormányzat</p>
            </div>
            <p className="text-white opacity-60 text-sm text-right">Utolára frissítve: 2 napja</p>
          </div>
        </div>
      </div>

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
            <div className="info-box">
              <div className="map min-h-3 bg-gray-300 "></div>
              <div className="info flex flex-col gap-4 p-6">
                <h2>Kapcsolat</h2>
                <div className="contact-items flex flex-col gap-3">
                  <div className="item address flex flex-row items-center gap-4">
                    <i className="fa fa-search text-gray-400 top-5 left-4"></i>
                    <p>3212 Piripócs, Főtér 1.</p>
                  </div>
                  <div className="item phone flex flex-row items-center gap-4">
                    <i className="fa fa-search text-gray-400 top-5 left-4"></i>
                    <p>+36 20 418 45 83</p>
                  </div>
                </div>
              </div>
            </div>
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
  const backendApiBaseUrl = getBackendBaseUrl(process.env);
  const { slug: slugFromQuery } = context.params!;

  const response = await fetch(`${backendApiBaseUrl}/aid-centers/${slugFromQuery}`);
  const data: AidCenter = await response.json();
  return {
    props: {
      ...data,
    },
  };
};
