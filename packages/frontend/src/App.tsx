import React from "react";
import clsx from "clsx";

function Channel({ selected = false }: { selected?: boolean }) {
  return (
    <div
      className={clsx(
        "w-full text-left rounded px-3 py-2",
        selected ? "bg-indigo-400" : "hover:bg-indigo-500"
      )}
    >
      #channel_name
    </div>
  );
}

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
        <div className='p-4 space-y-2'>
          <Channel selected />
          <Channel />
        </div>
      </div>
      <div className='flex-1 bg-white flex flex-col'>
        <div className='flex-1 flex flex-col justify-end divide-y '>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      </div>
    </div>
  );
}
