/* import React, { useEffect, useState } from 'react';
import { ShimmerSocialPost } from "react-shimmer-effects";

const Profilecard = (profileData)=>{
 const [isVisible , setIsVisible]= useState(false);

  return (
    <div className='restaurantcardmenu'>
      <h1>{"Name : "+profileData.props.name}</h1>

      {isVisible?<button onClick={()=>{setIsVisible(false)}}>Hide</button>:<button onClick={()=>{setIsVisible(true)}}>show</button>}

      {isVisible &&(
      <>
      <h3>{"Twitter_userName :"+profileData.props.twitter_username}</h3>
      <img src= {`${profileData.props.avatar_url}`} alt="zoro"/>
      <h3>{"Github_userName :"+profileData.props.login}</h3>
      <div>{profileData.props.bio}</div>
      </>)}
    </div>
  )
}

const Profile =()=>{
  const [profileData , setprofileData] = useState();
  const userName = ["amitx13","hkirat","nwaliaez"];

  useEffect(()=>{
    getProfile();
  },[])

  async function getProfile(){
    const promises = userName.map(async (user)=>{
      const data = await fetch(`https://api.github.com/users/${user}`);
      const json = await data.json();
      return json;
    });
    const Profiles = await Promise.all(promises);
    setprofileData(Profiles);
  }
  
  return profileData === undefined ?<ShimmerSocialPost type="image" />:(
    <>
    {profileData.map((profile)=>{
      console.log(profile.id);
      console.log(profile);
      return <Profilecard key={profile.id} props = {profile}/>
    })}
    </>
  )
}

export default Profile; */

import React, { useEffect, useState } from 'react';
import { ShimmerSocialPost } from "react-shimmer-effects";

const ProfileCard = ({ profileData, isVisible, onToggle }) => {
  return (
    <div className='restaurantcardmenu'>
      <h1>{"Name : " + profileData.name}</h1>

      <button onClick={() => onToggle(profileData.id)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && (
        <>
          <h3>{"Twitter_userName :" + profileData.twitter_username}</h3>
          <img src={`${profileData.avatar_url}`} alt="zoro" />
          <h3>{"Github_userName :" + profileData.login}</h3>
          <div>{profileData.bio}</div>
        </>
      )}
    </div>
  );
};

const Profile = () => {
  const [profileData, setProfileData] = useState();
  const [openProfileId, setOpenProfileId] = useState(null);
  const userNames = ["amitx13", "hkirat", "nwaliaez"];

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const promises = userNames.map(async (user) => {
      const data = await fetch(`https://api.github.com/users/${user}`);
      const json = await data.json();
      return json;
    });
    const profiles = await Promise.all(promises);
    setProfileData(profiles);
  }

  const handleToggle = (profileId) => {
    setOpenProfileId((prevId) => (
    prevId === profileId ? null : profileId));
  };

  return profileData === undefined ? (
    <ShimmerSocialPost type="image" />
  ) : (
    <>
      {profileData.map((profile) => (
        <ProfileCard
          key={profile.id}
          profileData={profile}
          isVisible={openProfileId === profile.id}
          onToggle={handleToggle}
        />
      ))}
    </>
  );
};

export default Profile;
