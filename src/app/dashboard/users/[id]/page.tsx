import React from "react";

function page({ params }: { params: { id: string } }) {
  return <div>page for user {params.id}</div>;
}

export default page;
