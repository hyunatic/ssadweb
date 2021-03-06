import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const MarkDropDown = ({ questions }) => {
  /**
   * MarkDropDown
   */
  return (
    <MDBListGroup style={{ width: "22rem" }}>
      {questions.map((x, index) => {
        return (
          <MDBListGroupItem key={x.questid} href="#">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Solution #{index + 1}</h5>
            </div>
            <p className="mb-1">{x.solution}</p>
          </MDBListGroupItem>
        )
      })}
    </MDBListGroup>
  );
};

export default MarkDropDown;