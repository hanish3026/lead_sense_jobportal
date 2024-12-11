import React from "react";
import DefaultHeader from "../com/DefaultHeader";
import "../css/Profile.css";
import { Button } from "bootstrap";
import Sidebar from "../com/SideBar";
const Profile = () => {
  return (
    <div>
      <DefaultHeader />
      <div>
        <div className="row">
            <div className="col-2">

            <Sidebar></Sidebar>
            </div>
          <div className="col-8 mt-2 mx-5 ">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Last Update Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>19.11.2024</td>
                    <td><button className="btn btn-success">Active</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Profile;
