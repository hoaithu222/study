import React from "react";
import Form from "./Form";
import { notFound } from "next/navigation";

export default function PostPage({ params, searchParams }) {
  const { path } = params;
  const [slug, id] = path;
  if (id && +id >= 1000) {
    return notFound();
  }

  return (
    <div>
      {path ? (
        <>
          <h1>Post details</h1>
        </>
      ) : (
        <>
          <h1>Posts</h1>
          <h3>Status : {searchParams.status}</h3>
          <h4>Keyword :{searchParams.q}</h4>
          <Form />
        </>
      )}
    </div>
  );
}
