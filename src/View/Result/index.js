import React from "react";
import './index.css';

export const Result = ({ result }) => {
  if(result){
    return (
          <div className="result-text">
            {result}
          </div>
    );
  }
};
