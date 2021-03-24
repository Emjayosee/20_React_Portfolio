import React from "react";

function CardImg({ image }) {
  return (
    <div>
      <img className="card-img" src={"./components/Images/TheGAARTBoard.jpeg"} alt="user thumbnail" />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;