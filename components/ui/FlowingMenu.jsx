"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";

import "./FlowingMenu.css";

function FlowingMenu({
  items = [],
  speed = 15,
  textColor = "#fff",
  bgColor = "#120F17",
  marqueeBgColor = "#fff",
  marqueeTextColor = "#120F17",
  borderColor = "#fff",
}) {
  return (
    <div className="menu-wrap" style={{ backgroundColor: bgColor }}>
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
}) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);

  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = {
    duration: 0.6,
    ease: "expo",
  };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topDistance = distMetric(mouseX, mouseY, width / 2, 0);

    const bottomDistance = distMetric(mouseX, mouseY, width / 2, height);

    return topDistance < bottomDistance ? "top" : "bottom";
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;

    return xDiff * xDiff + yDiff * yDiff;
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      const inner = marqueeInnerRef.current;

      if (!inner) return;

      const content = inner.querySelector(".marquee__part");

      if (!content) return;

      const contentWidth = content.offsetWidth;

      if (!contentWidth) return;

      const needed = Math.ceil(window.innerWidth / contentWidth) + 2;

      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();

    window.addEventListener("resize", calculateRepetitions);

    return () => {
      window.removeEventListener("resize", calculateRepetitions);
    };
  }, [text, image]);

  useEffect(() => {
    const inner = marqueeInnerRef.current;

    if (!inner) return;

    const content = inner.querySelector(".marquee__part");

    if (!content) return;

    const contentWidth = content.offsetWidth;

    if (!contentWidth) return;

    animationRef.current?.kill();

    animationRef.current = gsap.to(inner, {
      x: -contentWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      animationRef.current?.kill();
    };
  }, [text, image, repetitions, speed]);

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) {
      return;
    }

    const rect = itemRef.current.getBoundingClientRect();

    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) {
      return;
    }

    const rect = itemRef.current.getBoundingClientRect();

    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  const isIconArray = Array.isArray(image);

  return (
    <div className="menu__item" ref={itemRef} style={{ borderColor }}>
      <div
        className="menu__item-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        {text}
      </div>

      <div
        className="marquee"
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div className="marquee__inner-wrap">
          <div
            className="marquee__inner"
            ref={marqueeInnerRef}
            aria-hidden="true"
          >
            {Array.from({ length: repetitions }, (_, idx) => (
              <div
                className="marquee__part"
                key={idx}
                style={{ color: marqueeTextColor }}
              >
                <span>{text}</span>

                {isIconArray ? (
                  <div
                    className="marquee__img marquee__icons"
                    aria-hidden="true"
                  >
                    {image.map((iconName, iconIdx) => (
                      <Icon
                        key={`${iconName}-${iconIdx}`}
                        icon={iconName}
                        width={36}
                        height={36}
                      />
                    ))}
                  </div>
                ) : (
                  <div
                    className="marquee__img"
                    style={{
                      backgroundImage: image ? `url("${image}")` : "none",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
