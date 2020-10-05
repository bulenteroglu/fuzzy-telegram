import React from "react";
import clsx from "clsx";
import Channels from "./Channels";
import Channel from "./Channel";

function Message() {
  return (
    <div className='px-2 py-4 flex space-x-4'>
      <div className='h-8 w-8 bg-gray-400 rounded-sm'></div>
      <div className='flex-1'>
        <div className='font-semibold text-gray-700 leading-3'>username</div>
        <div className='text-gray-900 mt-1'>Some message here idk</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className='flex min-h-screen'>
      <div className='w-64 border-r border-gray-200 bg-indigo-600 text-indigo-100'>
        <Channels />
      </div>
      <div className='flex-1 bg-white flex flex-col'>
        <Channel id={"1"} />
      </div>
    </div>
  );
}
