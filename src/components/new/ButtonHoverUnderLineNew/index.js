"use client"
import React, { useEffect, useRef ,memo} from "react";
import gsap from "gsap";
import Link from "next/link";
import PropTypes from "prop-types";
import './style.css';

 function ButtonHoverUnderLineNew({
  noName,
  autoLink,
  eventPass,
  data_link,
  data_type,
  children,
  color,
  classStyle,
}) {
    
  const aRef = useRef(null);
  const aUnderlineRef = useRef(null);
    const timelineRef = useRef(null)
  const handleClick = (e) => {
    if (eventPass) {
      eventPass(e);
    }
  };

  useEffect(() => {
    if (aRef.current.tl) return;
    console.log("Just One Time~~~~~~~~~~")
    // Set props for DOM
    const appliedColor = color || "#fffcf5";
    aRef.current.style.color = appliedColor;
    aUnderlineRef.current.style.backgroundColor = appliedColor;

    // Set timeline for DOM
    timelineRef.current = gsap.timeline({ paused: true });
    timelineRef.current.fromTo(aUnderlineRef.current, {
      width: "0%",
      left: "0%",
    }, {
      width: "100%",
      duration: 0.5,
    });

    timelineRef.current.add("midway");
    timelineRef.current.fromTo(aUnderlineRef.current, {
      width: "100%",
      left: "0%",
    }, {
      width: "0%",
      left: "100%",
      duration: 0.5,
      immediateRender: false,
    });

  

    const enterAnimation = () => {
        timelineRef.current.tweenFromTo(0, "midway");
    };

    const leaveAnimation = () => {
        timelineRef.current.play();
    };

    // Mouse enter
    aRef.current.addEventListener("mouseenter", enterAnimation);

    // Mouse leave
    aRef.current.addEventListener("mouseleave", leaveAnimation);

    // Cleanup event listeners and GSAP timeline on component unmount
    return () => {
        timelineRef.current.kill();
        timelineRef.current = null

        aRef.current?.removeEventListener("mouseenter", enterAnimation);
        aRef.current?.removeEventListener("mouseleave", leaveAnimation);
    };
  }, []);

  return (
    <div
      className="custom_noname"
      data_link={data_link || "empty"}
      data_type={data_type || "empty"}
      onClick={eventPass ? handleClick : null}
      ref={aRef}
    >
      {eventPass ? (
        <a
          data_link={data_link || "empty"}
          data_type={data_type || "empty"}
          className={classStyle}
        >
          {children}
        </a>
      ) : (
        <Link href={autoLink} className={classStyle}>
          {children}
        </Link>
      )}
      <span
        ref={aUnderlineRef}
        style={{ top: noName }}
        className="underline-effect-styles"
      ></span>
    </div>
  );
}

ButtonHoverUnderLineNew.propTypes = {
  noName: PropTypes.string,
  autoLink: PropTypes.string,
  eventPass: PropTypes.func,
  data_link: PropTypes.string,
  data_type: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  classStyle: PropTypes.string,
};

export default memo(ButtonHoverUnderLineNew)
