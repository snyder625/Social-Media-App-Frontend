import React from 'react'
import './ProfileCard.css'
import CoverImage from '../../img/cover.jpg'
import ProfileImage from '../../img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={CoverImage} alt="cover" />
            <img src={ProfileImage} alt="profile" />
        </div>

        <div className="ProfileName">
          <span>Zendaya MJ</span>
          <span>Full Stack Developer</span>
        </div>

        <div className="FollowStatus">
          <hr />
          <div>
            <div className="follow">
              <span>6250</span>
              <span>Following</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>250</span>
              <span>Followers</span>
            </div>
          </div>

          <hr />

        </div>
        <span>My Profile</span>
    </div>
  )
}

export default ProfileCard