import React, { useEffect, useState } from 'react';
import './Profile.css';
const Profile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const [user_email, setUserEmail] = useState();

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: '/v2/user/me',
      });

      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.profile_nickname);
      setProfileImage(data.properties.profile_image);
      setUserEmail(data.properties.account_email);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className='profile'>
      <button
        onClick={() => {
          console.log(user_id);
          console.log(nickName);
          console.log(user_email);
          console.log(profileImage);
        }}
      >
        CONSOLE INFO
      </button>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <h2>{user_email}</h2>
      <img src={profileImage} alt='profile' />
    </div>
  );
};

export default Profile;
