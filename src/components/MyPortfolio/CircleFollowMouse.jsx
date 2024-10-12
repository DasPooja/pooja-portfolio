import React, { useEffect, useRef } from "react";
import "../styles/CircleFollowMouse.css";

const CircleFollowMouse = () => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false); // Track if the mouse is moving

  useEffect(() => {
    const circle = circleRef.current;
    const dot = dotRef.current;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      isMoving.current = true;
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      mousePos.current = { x: touch.clientX, y: touch.clientY };
      isMoving.current = true;
    };

    const animateCircle = () => {
      // Calculate distance between current circle position and mouse
      const dx = mousePos.current.x - circlePos.current.x;
      const dy = mousePos.current.y - circlePos.current.y;

      // Update circle position (ease towards the mouse)
      circlePos.current.x += dx * 0.1;
      circlePos.current.y += dy * 0.1;

      // Apply new circle position
      circle.style.transform = `translate(${circlePos.current.x - 25}px, ${
        circlePos.current.y - 25
      }px)`;

      if (dot) {
        if (isMoving.current) {
          // Dot moves slightly ahead of the circle position (e.g., free movement)
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 160; // Max distance for dot to move

          if (distance < maxDistance) {
            dot.style.transform = `translate(${dx}px, ${dy}px)`; // Follow mouse within limit
          } else {
            const angle = Math.atan2(dy, dx);
            dot.style.transform = `translate(${
              Math.cos(angle) * maxDistance
            }px, ${Math.sin(angle) * maxDistance}px)`; // Limit the dot's movement
          }
        } else {
          // Smoothly bring the dot back to center if the mouse stops moving
          dot.style.transform = `translate(0, 0)`; // Center the dot in the circle
        }
      }

      // Reset `isMoving` after the movement has slowed down
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        isMoving.current = false;
      }

      // Recursively animate for smooth transitions
      requestAnimationFrame(animateCircle);
    };

    // Add event listeners for both desktop and mobile
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    // Start the animation loop
    animateCircle();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div ref={circleRef} className="mouse-circle">
      <div ref={dotRef} className="mouse-dot"></div>
    </div>
  );
};

export default CircleFollowMouse;
