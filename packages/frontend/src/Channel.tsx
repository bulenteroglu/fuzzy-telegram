import React from "react";
import { gql, useQuery } from "@apollo/client";
import Composer from "./Composer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function Message({ message }: { message: any }) {
  return (
    <div className='px-4 py-6 flex space-x-4'>
      <div className='h-8 w-8 bg-gray-400 rounded-sm'></div>
      <div className='flex-1'>
        <div className='flex items-center space-x-1'>
          <div className='font-semibold text-gray-700 leading-3'>
            {message.sender.username}
          </div>
          <div className='text-gray-500 leading-3 text-sm'>
            {dayjs(message.createdAt).fromNow()}
          </div>
        </div>
        <div className='text-gray-900 mt-1'>{message.text}</div>
      </div>
    </div>
  );
}

export default function Channel({ id }: { id: string }) {
  const { data } = useQuery(
    gql`
      query($id: ID!) {
        channel(id: $id) {
          id
          name
          description
          messages {
            id
            sender {
              username
            }
            createdAt
            text
          }
        }
      }
    `,
    {
      variables: {
        id,
      },
    }
  );
  if (!data) return null;
  return (
    <div className='flex-1 flex flex-col'>
      <div className='flex-1 flex flex-col justify-end divide-y'>
        {data.channel.messages.map((message: any) => (
          <Message message={message} />
        ))}
      </div>

      <Composer channel={id} />
    </div>
  );
}

// 1:17
