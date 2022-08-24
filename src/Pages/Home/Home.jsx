import React from 'react'
import './Home.css';
import ProfileSide from '../../components/ProfileSide/ProfileSide'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <div className="postSide">
        Posts

        </div>
        <div className="trendSide">
        Trends

        </div>

    </div>
  )
}

export default Home