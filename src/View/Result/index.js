import React from "react";
import './index.css';

export const Result = ({ result }) => {
  return (
    result && (
      <div>
        <h4>Result</h4>
        <div className="result-text">
          {result.join(",")}
        </div>
        <br/>
        <br/>
      </div>
    )
  );
};
