import React  from "react";
import "./index.css";

export default function NavBar() {
const [tabname,setTab]= React.useState("home")
  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <a onClick={e=>setTab("home")}>Home</a>
          <a onClick={e=>setTab("news")}>News</a>
          <a onClick={e=>setTab("contact")}>Contact</a>
          <a onClick={e=>setTab("about")}>About</a>
      </div>
 
      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
         {tabname=="home"? <span>HOME PAGE</span> :null}
         {tabname=="news"? <span>NEWS PAGE</span> :null}
         {tabname=="contact"? <span>CONTACT PAGE</span> :null}
         {tabname=="about"? <span>ABOUT PAGE</span> :null}
        </section>
      </div>
    </div>
  );
}