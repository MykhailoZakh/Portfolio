import React from "react";
import "./resume.css";
import {Document, Page} from "react-pdf";
const Resume = () => {
  return (
    <article className="mt-24">
      <object
        className="pdf"
        type="application/pdf"
        data="./Mykhailo Zakharkiv Resume - Web Development.pdf"
      >
        <img src="./resume-new.jpg" className="pdf-img" />
        <p className="d-flex justify-content-around ">
          <a
            href="./Mykhailo Zakharkiv Resume - Web Development.pdf"
            download="Mykhailo-Profile"
            className="dowPdf"
          >
            Download PDF 📑
          </a>
        </p>
      </object>
    </article>
  );
};
export default Resume;
