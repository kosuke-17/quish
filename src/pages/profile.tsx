import { GetStaticProps } from "next";
import React from "react";
import { SWRConfig } from "swr";
import { Profile } from "../templates";
import { fetchProfile } from "./api/fetchProfile";

type Props = {
  [key: string]: object;
};

const ProfilePage: React.FC<Props> = ({ fallback }) => {
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Profile />
      </SWRConfig>
    </div>
  );
};

export default ProfilePage;

export const getStaticProps: GetStaticProps = async () => {
  const profile = await fetchProfile();

  return {
    props: {
      fallback: {
        "/profile": profile,
      },
    },
  };
};
