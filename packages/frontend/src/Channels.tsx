import React from "react";
import clsx from "clsx";
import { gql, useQuery } from "@apollo/client";
import { Link, useRouteMatch } from "react-router-dom";
import Header from "./Header";

function Channel({
  id,
  name,
  selected = false,
}: {
  id: string;
  name: string;
  selected?: boolean;
}) {
  return (
    <Link
      to={`/channels/${id}`}
      className={clsx(
        "block text-left rounded px-3 py-2 transition duration-500",
        selected
          ? "bg-indigo-400 text-white shadow-lg"
          : "hover:bg-indigo-500 hover:shadow"
      )}
    >
      #{name}
    </Link>
  );
}

export default function Channels() {
  const match = useRouteMatch<{ id: string }>("/channels/:id");
  const selected = match?.params.id;

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
    <div>
      <Header />
      <div className='p-4 space-y-2'>
        {data.channels.map((channel: any) => (
          <Channel
            key={channel.id}
            id={channel.id}
            name={channel.name}
            selected={channel.id === selected}
          />
        ))}
      </div>
    </div>
  );
}
