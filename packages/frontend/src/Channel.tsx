import React, { useEffect, useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import Composer from "./Composer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useParams } from "react-router-dom";

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

export default function Channel() {
  const { id } = useParams();
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

  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (scrollRef.current) {
      const lastMessage = scrollRef.current.lastElementChild;
      lastMessage!.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [data?.channel.messages]);

  if (!data) return null;

  return (
    <div className='flex-1 flex flex-col overflow-hidden'>
      <div className='flex-1 overflow-y-auto'>
        <div ref={scrollRef} className='flex flex-col justify-end divide-y'>
          {data.channel.messages.map((message: any) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
      <Composer channel={data.channel} />
    </div>
  );
}
