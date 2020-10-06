import React from "react";
import clsx from "clsx";
import Channels from "./Channels";
import Channel from "./Channel";
import { Route, Switch } from "react-router-dom";

function NoChannel() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center text-gray-300'>
      <div className='text-lg font-semibold uppercase'>Select A Channel</div>
      <svg
        className='w-32 h-32'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
        />
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <div className='flex h-screen'>
      <div className='w-64 border-r border-gray-200 bg-indigo-600 text-indigo-100'>
        <Channels />
      </div>
      <div className='flex-1 bg-white flex flex-col'>
        <Switch>
          <Route path='/channels/:id'>
            <Channel />
          </Route>
          <Route>
            <NoChannel />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
