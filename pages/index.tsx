import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Calendar, Clock, MapPin, MessageCircle, Share2 } from 'react-feather';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-4 bg-white pl-4 pt-2 h-16">
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

        <span className="font-['krok'] text-2xl ml-2">Pin B</span>
      </header>

      {/* This will be our card  */}

      <div className="grid sm:grid-cols-2 gap-6 sm:grid-cols-1 m-2">
        <div className=" bg-white shadow rounded">
          <div className="flex justify-between">
            <div className="p-4">
              <h1 className="text-xl font-bold text-gray-800">
                This is my event
              </h1>
              <h2 className="text-md text-gray-500">subtitle</h2>
            </div>
            <img
              className="rounded-full w-12 h-12 m-4"
              src="http://placekitten.com/50/50"
            />
          </div>
          <img src="http://placekitten.com/600/350" />

          <div className="flex justify-between p-2 text-sky-700 font-semibold">
            <div className="flex">
              <MapPin className="mt-3 mr-2" />
              <div>
                1948 Pioneer Road,
                <br />
                Medford OR. 97501
              </div>
            </div>
            <div>
              <div className="flex">
                <Clock className="mr-2" /> 5:30 PM
              </div>
              <div className="flex mt-2">
                <Calendar className="mr-2" /> Oct 18th 2022
              </div>
            </div>
            <div className="flex mt-4 mr-2">
              <Share2 className="mr-4" /> <MessageCircle />
            </div>
          </div>
        </div>

        <div className=" bg-white shadow rounded">
          <div className="flex justify-between">
            <div className="p-4">
              <h1 className="text-xl font-bold text-gray-800">
                This is my event
              </h1>
              <h2 className="text-md text-gray-500">subtitle</h2>
            </div>
            <img
              className="rounded-full w-12 h-12 m-4"
              src="http://placekitten.com/50/50"
            />
          </div>
          <img src="http://placekitten.com/g/600/350" />
        </div>
      </div>
    </div>
  );
};

export default Home;
