import React from "react";

export default (props) => {
  console.log("props:", props);
  return <div>hello world</div>;
};

export async function getServerSideProps(context) {
  console.log("[index.jsx] process.env.NODE_ENV", process.env.NODE_ENV);
  console.log(
    "[index.jsx] process.env.OREORE_NODE_ENV",
    process.env.OREORE_NODE_ENV
  );
  console.log(
    "[index.jsx] process.env.NEXT_PUBLIC_SET_FROM_CONSOLE",
    process.env.NEXT_PUBLIC_SET_FROM_CONSOLE
  );
  console.log(
    "[index.jsx] process.env.NEXT_PUBLIC_UNSET_FROM_CONSOLE",
    process.env.NEXT_PUBLIC_UNSET_FROM_CONSOLE
  );
  return {
    props: {
      OREORE_NODE_ENV_FROM_SSR_PROPS: process.env.OREORE_NODE_ENV || "",
    },
  };
}
