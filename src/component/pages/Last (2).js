import React, { useState, useEffect, useRef } from "react";
import PageHeader from "../com/PageHeader";
import QuickLinks from "../com/QuickLinks";
import "../css/Last.css";
import Assets from "../assets/Assets";

function Last() {
  const [linksData, setLinkData] = useState([
    { id: "workPreferenceDetails", label: "Career Preference", active: true },
    { id: "educationDetails", label: "Education", active: false },
    { id: "profileSummary", label: "Profile summary", active: false },
    { id: "personalDetails", label: "Personal Details", active: false },
    { id: "EmploymentDetails", label: "Employment Information", active: false },
    { id: "resume", label: "Resume", active: false },
  ]);

  const [size, setSize] = useState(window.innerWidth > 768);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sectionRefs = useRef({
    workPreferenceDetails: React.createRef(),
    educationDetails: React.createRef(),
    profileSummary: React.createRef(),
    personalDetails: React.createRef(),
    EmploymentDetails: React.createRef(),
    resume: React.createRef(),
  });


  function handleButton(label) {
    setLinkData((prevLinks) =>
      prevLinks.map((link) =>
        link.label === label
          ? { ...link, active: true }
          : { ...link, active: false }
      )
    );

    const sectionId = linksData.find((link) => link.label === label)?.id;
    const targetSection = sectionRefs.current[sectionId];
    if (targetSection && targetSection.current) {
      targetSection.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <PageHeader />
      <div className="">
        <div className="container d-flex justify-content-between flex-md-row my-5">
          <div className="mr-md-4">
            <p className="text-start mb-2 mt-2">Name: Tina</p>
            <p className="text-start mb-2">E-mail: tina@gmail.com</p>
            <p className="text-start mb-2">Phone: 093284181</p>
            <p className="text-start mb-2">Role: digital marketing</p>
          </div>
          <div className="mr-md-4">
            <img src={Assets.Vedio} style={{width:"180px",height:"160px",border:""}} alt="Loading.."></img>
          </div>
        </div>

        <div className="container-fluid bg-dark text-white p-4 p-md-5 mt-3 w-100">
          <h1>Career Objective</h1>
          <p>
            Detail-oriented and data-driven Digital Marketing Analyst with a
            passion for leveraging analytical skills to optimize online
            marketing strategies. Seeking to contribute to a dynamic marketing
            team where I can utilize my expertise in data analysis, market
            research, and digital advertising to drive brand growth and improve
            campaign performance. Committed to staying ahead of industry trends
            and utilizing innovative techniques to enhance customer engagement
            and achieve business objectives.
          </p>
        </div>

        <div className="container d-flex justify-content-end mt-2">
          <button className="btn btn-dark p-2">Edit</button>
        </div>

        <div className="container row m-md-0 m-3">
          {size && (
            <div className="col-3">
              <aside
                className="w-100 justify-content-center"
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1000",
                }}
              >
                <QuickLinks links={linksData} onSelectedLabels={handleButton} />
              </aside>
            </div>
          )}
          <div className="col-md-9">
            <main>
              <div>
                <div className="row ml-md-5">
                  <div
                    className="col-12 card m-2 p-3"
                    id="workPreferenceDetails"
                    ref={sectionRefs.current.workPreferenceDetails}
                  >
                    <h1 className="text-start">Career Preference</h1>
                    <div className="row">
                      <div className="col-md-6 text-start">
                        <h3>Work status</h3>
                        <p>Fresher</p>
                      </div>
                      <div className="col-md-6 text-start">
                        <h3>City</h3>
                        <p>Chennai</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 card m-2 p-3"
                    id="educationDetails"
                    ref={sectionRefs.current.educationDetails}
                  >
                    <h1 className="text-start">Educations</h1>
                    <div className="row">
                      <div className="col-md-6 text-start">
                        <h3>Post Graduate</h3>
                        <p>College Name :</p>
                        <p>Course:</p>
                        <p>Specialization:</p>
                        <p>Certificate:</p>
                      </div>
                      <div className="col-md-6 text-start">
                        <h3>Under Graduate</h3>
                        <p>College Name :</p>
                        <p>Course:</p>
                        <p>Specialization:</p>
                        <p>Certificate:</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 text-start">
                        <h3>Class XII</h3>
                        <p>College Name :</p>
                        <p>Course:</p>
                        <p>Specialization:</p>
                        <p>Certificate:</p>
                      </div>
                      <div className="col-md-6 text-start">
                        <h3>Class X</h3>
                        <p>College Name :</p>
                        <p>Course:</p>
                        <p>Specialization:</p>
                        <p>Certificate:</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 card m-2 p-3"
                    id="profileSummary"
                    ref={sectionRefs.current.profileSummary}
                  >
                    <h1 className="text-start">Profile summary</h1>
                    <p className="text-start">
                      Detail-oriented and data-driven Digital Marketing Analyst
                      with a passion for leveraging analytical skills to
                      optimize online marketing strategies. Seeking to
                      contribute to a dynamic marketing team where I can utilize
                      my expertise in data analysis, market research, and
                      digital advertising to drive brand growth and improve
                      campaign performance. Committed to staying ahead of
                      industry trends and utilizing innovative techniques to
                      enhance customer engagement and achieve business
                      objectives.
                    </p>
                  </div>
                  <div
                    className="col-12 card m-2 text-start p-3"
                    id="personalDetails"
                    ref={sectionRefs.current.personalDetails}
                  >
                    <h1 className="text-start">Personal Details</h1>
                    <p>Father's Occupation :</p>
                    <p>Mother's Occupation :</p>
                    <p>Siblings :</p>
                    <p>Current City :</p>
                    <p>State :</p>
                    <p>Ready to Relocate :</p>
                  </div>
                  <div
                    className="col-12 card m-2 text-start p-3"
                    id="EmploymentDetails"
                    ref={sectionRefs.current.EmploymentDetails}
                  >
                    <h1 className="text-start">Employment Information</h1>
                    <p>Company Name :</p>
                    <p>Domain :</p>
                    <p>PF Number Present :</p>
                    <p>Company Location :</p>
                    <p>Current Salary :</p>
                    <p>Expected Salary :</p>
                    <p>Years of Experience :</p>
                  </div>
                  <div
                    className="col-12 card m-2 text-start p-3"
                    id="resume"
                    ref={sectionRefs.current.resume}
                  >
                    <h1 className="text-start">Resume</h1>
                    <p>Please upload your resume</p>
                    <input type="file"></input>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Last;
