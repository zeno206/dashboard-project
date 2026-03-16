import React from "react";
import Profilethoughts from "./profile.thoughts";
import Intropeople from "./introbinnerbox ";

function Profile() {
  const thoughtsData = [
    {
      name: "Rahul Sharma",
      thought: "Hard work beats talent when talent doesn't work hard.",
      personImg: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
      thoughtImg:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      time: "15 min ago",
    },

    {
      name: "Aman Verma",
      thought: "Success comes to those who never give up.",
      personImg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
      thoughtImg:
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
      time: "45 min ago",
    },

    {
      name: "Neha Kapoor",
      thought: "Believe in yourself and anything is possible.",
      personImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      thoughtImg:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      time: "1 hour ago",
    },

    {
      name: "Rohit Singh",
      thought: "Small steps every day lead to big results.",
      personImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      thoughtImg:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      time: "3 days ago",
    },
  ];

  var introPeople = [
    {
      img: "https://randomuser.me/api/portraits/men/11.jpg",
      req: " I AM A FRONTEND DEVLOPER building interactive UI and working with modern JavaScript frameworks.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/21.jpg",
      req: "Passionate backend developer with experience in Node.js and databases.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/31.jpg",
      req: "Full stack developer who enjoys working on both frontend and backend.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/41.jpg",
      req: "Creative UI designer with strong interest in user experience.",
    },
  ];

  return (
    <div className="profile-bar">
      <div className="bar-1">
        <h2 className="profie-h2">User Profile</h2>
        <h2 className="profie-h2-a">
          <i class="ri-home-line"></i>User Profile
        </h2>
      </div>
      <div className="bar-2">
        <div className="imgbar">
          <img
            className="prbck-img"
            src="https://image.slidesdocs.com/responsive-images/background/paint-minimalist-brush-blue-meeting-business-powerpoint-background_e562f420ec__960_540.jpg"
            alt=""
          />
        </div>
        <div className="innerbar-2">
          <div className="barbox-1">
            <div className="bb-1">
              <i class="ri-file-3-line"></i>
              <h2 className="num-1">938</h2>
              <p className="parh-1">POSTS</p>
            </div>
            <div className="bb-2">
              <i class="ri-user-received-line"></i>
              <h2 className="num-1">3,536</h2>
              <p className="parh-1">Followers</p>
            </div>
            <div className="bb-3">
              <i class="ri-user-shared-2-line"></i>
              <h2 className="num-1">2,659</h2>
              <p className="parh-1">Following</p>
            </div>
          </div>
          <div className="barbox-2">
            <img
              className="prf-img"
              src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"
              alt=""
            />
            <h2 className="usr-name">Mathew Anderson</h2>
            <h3 className="usr-role">Designer</h3>
          </div>
          <div className="barbox-3">
            <img
              className="icn-img"
              src="https://t4.ftcdn.net/jpg/03/92/71/99/360_F_392719944_L0LYv3e7QozB2tsj3CfUN0HPC8eZQOWb.jpg"
              alt=""
            />
            <button className="orderbtn-4 ">Add To Story</button>
          </div>
        </div>
        <div className="lastbar">
          <ul className="lstb-lul">
            <li className="lstb-01 active">
              <i class="ri-account-circle-2-line"></i>Profile
            </li>
            <li className="lstb-l">
              <i class="ri-heart-3-line"></i>Followers
            </li>
            <li className="lstb-l">
              <i class="ri-user-search-fill"></i>Friends
            </li>
            <li className="lstb-l">
              <i class="ri-image-line"></i>Gallery
            </li>
          </ul>
        </div>
        <div className="second-part">
          <div className="intro-box-1">
            <div className="introbinner">
              <h2 className="int-h2">Introduction</h2>
              <p className="p-intro">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
              <ul className="intrr-list">
                <li className="intrr-li">
                  <i class="ri-briefcase-line"></i>
                  <span className="text-1">Sir PP instute of science</span>
                </li>
                <li className="intrr-li">
                  <i class="ri-mail-line"></i>
                  <span className="text-1">xyzhwiwbi@gmail.com</span>
                </li>
                <li className="intrr-li">
                  <i class="ri-computer-line"></i>
                  <span className="text-1">www.xyz.com</span>
                </li>
                <li className="intrr-li">
                  <i class="ri-map-pin-2-line"></i>
                  <span className="text-1">newyork USA - 10001</span>
                </li>
              </ul>
            </div>
            <div className="introbinner">
              <div className="br-1">
                <h3 className="act">Activity</h3>
                <h4 className="viw">View all</h4>
              </div>
              {introPeople.map((introPeople) => {
                return (
                  <Intropeople img={introPeople.img} req={introPeople.req} />
                );
              })}
            </div>
          </div>
          <div className="intro-box-2">
            <div className="int-box1">
              <input className="inp-z" placeholder="Share your thoughts" />
              <div className="p-b">
                <div className="prt-1">
                  <h3 className="icnh-3">
                    <i class="ri-file-image-line"></i>
                    <span className="text-2">Photo/video</span>
                  </h3>
                </div>
                <div className="prt-2">
                  <h3 className="icnh-3">
                    <i class="ri-article-line"></i>{" "}
                    <span className="text-2">Article</span>
                  </h3>
                  <button className="thtbtn-3">Post</button>
                </div>
              </div>
            </div>
            <div className="int-box2">
              {thoughtsData.map((thoughtsData) => {
                return (
                  <Profilethoughts
                    img={thoughtsData.personImg}
                    name={thoughtsData.name}
                    thg={thoughtsData.thought}
                    thgimg={thoughtsData.thoughtImg}
                    time={thoughtsData.time}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
