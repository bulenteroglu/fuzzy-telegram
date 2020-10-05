import React from "react";
import clsx from "clsx";
import { gql, useQuery } from "@apollo/client";

function Channel({
  name,
  selected = false,
}: {
  name: string;
  selected?: boolean;
}) {
  return (
    <div
      className={clsx(
        "w-full text-left rounded px-3 py-2",
        selected ? "bg-indigo-400" : "hover:bg-indigo-500"
      )}
    >
      #{name}
    </div>
  );
}

export default function Channels() {
  const { data } = useQuery(gql`
    query {
      channels {
        id
        name
      }
    }
  `);

  if (!data) return null;
  return (
    <div className='p-4 space-y-2'>
      {data.channels.map((channel: any) => (
        <Channel name={channel.name} selected />
      ))}
    </div>
  );
}
