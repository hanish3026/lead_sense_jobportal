import React, { useEffect, useRef } from 'react';
import "../css/TimeLine.css"

const Timeline = () => {
  const timelineRef = useRef(null);
  const timelineContainers = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            timelineRef.current.classList.add('show-line');
            timelineRef.current.classList.remove('hide-line');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    timelineContainers.current.forEach((container) => {
      observer.observe(container);
    });

    const handleScroll = () => {
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const top = timelineRect.top;
      const bottom = timelineRect.bottom;

      if (top > window.innerHeight / 2 || bottom < window.innerHeight / 2) {
        timelineRef.current.classList.remove('show-line');
        timelineRef.current.classList.add('hide-line');
      } else {
        timelineRef.current.classList.add('show-line');
        timelineRef.current.classList.remove('hide-line');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineItems = [
    { icon: 'fas fa-map-marked-alt', text: 'Explore the dummy map' },
    { icon: 'fas fa-filter', text: 'Filter dummy results' },
    { icon: 'fas fa-user', text: 'View dummy profiles' },
    { icon: 'fas fa-phone-alt', text: 'Schedule a dummy session' },
    { icon: 'fas fa-heart', text: 'Get dummy results' },
  ];

  return (
    <div className="timeline hide-line" ref={timelineRef}>
      {timelineItems.map((item, index) => (
        <div
          key={index}
          className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}
          ref={(el) => (timelineContainers.current[index] = el)}
        >
          <a href="#" className="content-link">
            <div className="content">
              <span className="icon">
                <i className={item.icon}></i>
              </span>
              {item.text}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
