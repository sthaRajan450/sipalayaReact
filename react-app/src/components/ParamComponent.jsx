import React from "react";
import { useParams } from "react-router-dom";

const ParamComponent = () => {
  const { id } = useParams();
  return <div>Student_Id:{id}</div>;
};

export default ParamComponent;
