import React from "react";

export default function ManageCoursePage(props) {
  // debugger;
  return (
    <>
      <h2>Manage Course</h2>
      {props.match.params.slug}
    </>
  );
}
