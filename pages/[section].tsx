import type { NextPage } from "next";
import Head from "next/head";
import NavSpot from "../components/NavSpot";

const Section: NextPage = () => {
  return (
    <>
      <NavSpot
        content=""
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.222 18.917c5.666-5.905-.629-10.828-5.011-7.706l1.789 1.789h-6v-6l1.832 1.832c7.846-6.07 16.212 4.479 7.39 10.085z" />
          </svg>
        }
      />
    </>
  );
};

export default Section;
