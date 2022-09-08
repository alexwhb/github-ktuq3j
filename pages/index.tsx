import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Calendar, Clock, MapPin, MessageCircle, Share2 } from 'react-feather';
import EventCard from '../components/EventCard';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex mb-4 bg-white pl-4 pt-2 h-16">
        <svg
          className="inline-block"
          xmlns="http://www.w3.org/2000/svg"
          width="45.568"
          height="38.189"
          viewBox="0 0 68.568 62.189"
        >
          <g
            id="Group_11"
            data-name="Group 11"
            transform="translate(-544.447 -18.921)"
          >
            <line
              id="Line_6"
              data-name="Line 6"
              x1="24.154"
              y1="57.693"
              transform="translate(580.085 22.856) rotate(-7)"
              fill="none"
              stroke="#638ca6"
              stroke-width="4"
            />
            <line
              id="Line_7"
              data-name="Line 7"
              x1="23.47"
              y1="38.839"
              transform="translate(571.03 38.661)"
              fill="none"
              stroke="#638ca6"
              stroke-width="2"
            />
            <g
              id="Polygon_1"
              data-name="Polygon 1"
              transform="translate(544.447 25.411)"
              fill="none"
            >
              <path d="M31.043,0,62.086,54.144H0Z" stroke="none" />
              <path
                d="M 31.04279708862305 12.06311416625977 L 10.35617828369141 48.14445114135742 L 51.72941589355469 48.14445114135742 L 31.04279708862305 12.06311416625977 M 31.04279708862305 -3.814697265625e-06 L 62.08559799194336 54.14445114135742 L -3.814697265625e-06 54.14445114135742 L 31.04279708862305 -3.814697265625e-06 Z"
                stroke="none"
                fill="#638ca6"
              />
            </g>
          </g>
        </svg>

        <div className="font-['krok'] text-2xl ml-3 mt-1">Pin B</div>
      </header>

      {/* This will be our card  */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 m-2">
        <EventCard
          title={'Event Title'}
          subtitle={'subtitle'}
          eventImageUrl={'http://placekitten.com/700/350'}
          profileImageUrl={'http://placekitten.com/50/50'}
          eventAddressLine1={'1948 Pioneer Road'}
          eventAddressLine2={'Medford OR. 97501'}
          eventTime={'5:30 PM'}
          eventDate={'Oct 18th 2022'}
        />

        <EventCard
          title={'Event Title'}
          subtitle={'subtitle'}
          eventImageUrl={'http://placekitten.com/g/700/350'}
          profileImageUrl={'http://placekitten.com/g/50/50'}
          eventAddressLine1={'1948 Pioneer Road'}
          eventAddressLine2={'Medford OR. 97501'}
          eventTime={'5:30 PM'}
          eventDate={'Oct 18th 2022'}
        />
      </div>
    </div>
  );
};

export default Home;
