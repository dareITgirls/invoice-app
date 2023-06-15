import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    console.log("UpdatedComponent");
    //render OriginalComponent and pass on its props.
    let html = "";
    try {
      html = <OriginalComponent {...props} />;
    } catch (error) {
      console.log("UpdatedComponent catched error", error);
      // return UI to display error
      return <div>{error}</div>;
    }
    return html;
  }
  return NewComponent;
};
export default UpdatedComponent;
