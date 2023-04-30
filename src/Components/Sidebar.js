import React from "react";
import "./Sidebar.css";
import logo from "../Icons/logo.jpg";
import logout from "../Icons/logout.png";
import applications from "../Icons/applications.png";
import dashboard from "../Icons/dashboard.png";
import discover from "../Icons/discover.png";
import documents from "../Icons/documents.png";
import file from "../Icons/file.png";
import inbox from "../Icons/inbox.png";
import list from "../Icons/list.png";
import pages from "../Icons/pages.png";
import settings from "../Icons/settings.png";
import support from "../Icons/support.png";
import users from "../Icons/users.png";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h2>Artemis</h2>
      </div>
      <div className="main-container">
        <h5 style={{marginBottom:'3px',marginTop:'3px'}}>Main</h5>
        <div className="main-elements">
          <img className="icons" src={dashboard} alt="mains"></img>
          <div className="main-name-icons">
            <h5 className='main-name' >Dashboard</h5>
            <h2 style={{color:'#898989'}}  className="main-greater-icons" >‹</h2>
          </div>
        </div>
        <div className="main-elements">
          <img className="icons" src={discover} alt="mains"></img>
          <div className="main-name-icons">
            <h5 className='main-name'>Discover</h5>
            <h2 style={{color:'#898989'}}  className="main-greater-icons" >‹</h2>
          </div>
        </div>
        <div className="main-elements">
          <img className="icons" src={users} alt="mains"></img>
          <div className="main-name-icons">
            <h5 className='main-name'>Users</h5>
            <h2  style={{color:'#898989'}} className="main-greater-icons" >‹</h2>
          </div>
        </div>
        <div className="main-elements">
          <img className="icons" src={documents} alt="mains"></img>
          <div className="main-name-icons">
            <h5 className='main-name'>Documents</h5>
            <h2 style={{color:'#898989'}}  className="main-greater-icons" >‹</h2>
          </div>
        </div>
        <div className="main-elements">
          <img className="icons" src={applications} alt="mains"></img>
          <div className="main-name-icons">
            <h5 className='main-name'>Applications</h5>
            <h2  style={{color:'#898989'}} className="main-greater-icons" >‹</h2>
          </div>
        </div>
        <div className="main-elements">
          <img className="icons" src={pages} alt="mains"></img>
          <div className="main-name-icons">
            <h5 className='main-name'>Pages</h5>
            <h2  style={{color:'#898989'}} className="main-greater-icons" >‹</h2>
          </div>
        </div>
      </div>
      <div className="secondary-container">
      <h5 style={{marginBottom:'5px'}} >Secondary</h5>
        <div className="main-elements">
          <img className="icons" src={support} alt="mains"></img>
          <h5 className='main-name'>Support Center</h5>
        </div>
        <div className="main-elements">
          <img className="icons" src={inbox} alt="mains"></img>
          <h5 className='main-name'>Inbox</h5>
        </div>
        <div className="main-elements">
          <img className="icons" src={file} alt="mains"></img>
          <h5  className='main-name'>File Manager</h5>
        </div>
        <div className="main-elements">
          <img className="icons" src={list} alt="mains"></img>
          <h5  className='main-name'>Data List</h5>
        </div>
      </div>
      <div className="extra-container">
      <h5 style={{marginBottom:'5px'}} > </h5>
        <div className="main-elements">
          <img className="icons" src={settings} alt="mains"></img>
          <h5 className='main-name' >Settings</h5>
        </div>
        <div className="main-elements">
          <img className="icons" src={logout} alt="mains"></img>
          <h5  className='main-name'>Log Out</h5>
        </div>
      </div>
    </div>
  );
}
