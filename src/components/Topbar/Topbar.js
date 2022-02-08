import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/apiCalls';

import './Topbar.css';

export default function Topbar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    userLogout(dispatch);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Shopr Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
