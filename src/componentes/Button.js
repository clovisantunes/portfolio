import React from "react";
import { useEffect } from "react";
import "./button.css";
import { useState } from "react";

function handleScrollInitial() {
  if (handleScrollInitial) window.scrollTo(0, 0);
}

function Button() {
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
     
    });
  }, []);
  console.log(show)
  return (
    <div
      className={`button ${show && "button_hidden"}`}
      onClick={handleScrollInitial}
    ></div>
  );
}
export default Button;
