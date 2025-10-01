import React, { useEffect, useRef } from 'react';
import './App.css';

const DragBackground = ({ animationDuration = 1200 }) => {
  const bgRef = useRef(null);

  let lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

  function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    const translate = `translate(${x}px, ${y}px) scale(1.1)`;

    if (bgRef.current) {
      bgRef.current.style.transform = translate;
      bgRef.current.style.webkitTransform = translate;
      bgRef.current.style.mozTransform = translate;
    }

    requestAnimationFrame(moveBackground);
  }

  useEffect(() => {
    function handleMove(e) {
      const mouseX = Math.max(
        -100,
        Math.min(100, window.innerWidth / 2 - e.clientX)
      );
      const mouseY = Math.max(
        -100,
        Math.min(100, window.innerHeight / 2 - e.clientY)
      );
      lFollowX = (20 * mouseX) / 100; // effet inversé ici
      lFollowY = (10 * mouseY) / 100;
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('click', handleMove);

    moveBackground();

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('click', handleMove);
    };
  }, []);

  useEffect(() => {
    const element = bgRef.current;
    if (!element) return;

    // Fix position initiale
    let startPos = {
      top: parseInt(element.style.top || 0, 10),
      left: parseInt(element.style.left || 0, 10),
    };

    let isDragging = false;
    let dragStartX, dragStartY;
    let currentTop = startPos.top;
    let currentLeft = startPos.left;

    function onMouseDown(e) {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      element.style.transition = '';
      e.preventDefault();
    }

    function onMouseMove(e) {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      currentLeft = startPos.left + dx;
      currentTop = startPos.top + dy;
      element.style.left = `${currentLeft}px`;
      element.style.top = `${currentTop}px`;
    }

    function onMouseUp() {
      if (!isDragging) return;
      isDragging = false;

      element.style.transition = `top ${animationDuration}ms, left ${animationDuration}ms`;
      element.style.left = `${startPos.left}px`;
      element.style.top = `${startPos.top}px`;

      setTimeout(() => {
        if (element) {
          element.style.transition = '';
        }
      }, animationDuration);
    }

    function onTouchStart(e) {
      isDragging = true;
      dragStartX = e.touches[0].clientX;
      dragStartY = e.touches[0].clientY;
      element.style.transition = '';
      e.preventDefault(); // empêche le scroll pendant le drag
    }
    
    function onTouchMove(e) {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - dragStartX;
      const dy = e.touches[0].clientY - dragStartY;
      currentLeft = startPos.left + dx;
      currentTop = startPos.top + dy;
      element.style.left = `${currentLeft}px`;
      element.style.top = `${currentTop}px`;
    }
    
    function onTouchEnd() {
      if (!isDragging) return;
      isDragging = false;
      element.style.transition = `top ${animationDuration}ms, left ${animationDuration}ms`;
      element.style.left = `${startPos.left}px`;
      element.style.top = `${startPos.top}px`;
    
      setTimeout(() => {
        if (element) {
          element.style.transition = '';
        }
      }, animationDuration);
    }
    

      element.addEventListener('mousedown', onMouseDown);
      element.addEventListener('touchstart', onTouchStart, { passive: false });

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);

      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onTouchEnd);


    return () => {

      element.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      element.addEventListener('mousedown', onMouseDown);
      element.addEventListener('touchstart', onTouchStart, { passive: false });

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);

      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onTouchEnd);

    };
  }, [animationDuration]);

  return (
    <h1
      ref={bgRef}
      className="bg text-4xl md:text-5xl font-bold mb-24"
      style={{
        cursor: 'grab',
        position: 'relative',
        top: 0,
        left: 0,
        userSelect: 'none',
        background: 'linear-gradient(135deg, #00c4cc 0%, #232a65 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '10px',
      }}
    >
      CANVA
    </h1>
    
  );
};

export default DragBackground;
