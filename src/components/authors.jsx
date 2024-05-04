import React from "react";

export const Authors = (props) => {
  return (
    <div id="authors">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="author">
                    <div className="author-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="author-content">
                      <p>"{d.text}"</p>
                      <div className="author-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
