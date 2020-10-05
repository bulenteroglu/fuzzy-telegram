import { gql, useMutation } from "@apollo/client";
import React from "react";

export default function Composer({ channel }: { channel: string }) {
  const [mutate] = useMutation(gql`
    mutation($text: String!, $channel: ID!) {
      sendMessage(channel: $channel, text: $text) {
        id
        sender {
          id
          username
        }
        createdAt
        text
      }
    }
  `);
  function onSubmit(e: any) {
    e.preventDefault()
    const formData = new FormData(e.target);

    mutate({
      variables: {
        channel,
        text: formData.get("message"),
      },
    });
  }
  return (
    <form
      className='p-4 border-t border-gray-300 flex items-center space-x-4'
      onSubmit={(onSubmit}
    >
      <input
        name='message'
        autoFocus
        className='flex-1 border rounded px-4 py-2'
        placeholder='Send message...'
      />
      <button
        type='submit'
        className='bg-indigo-600 text-indigo-100 rounded hover:bg-indigo-700 font-semibold py-2 px-6'
      >
        Send
      </button>
    </form>
  );
}
