import React,{useState} from "react";

import ParentLayout from "../../layouts/ParentLayout";

import {
  ProfileTab,
  ProfileHero,
  MyActivities,
  Collections,
  MyOffer,
  Favourite,
  MyNfts,
} from "../../components";

const Profile = () => {
    const [activeTab, setActiveTab] = useState(1);

  return (
    <ParentLayout current={1}>
      <div className="mt-10">
        <ProfileHero />
          </div>
          <div className="mt-8">
              <ProfileTab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="w-full h-auto mt-2 ">
      {activeTab === 1 && (<MyNfts />)}
      {activeTab === 2 && (<Collections />)}
      {activeTab === 3 && (<Favourite />)}
      {activeTab === 4 && (<MyOffer />)}
      {activeTab === 5 && (<MyActivities />)}
      
      </div>
    </ParentLayout>
  );
};

export default Profile;
