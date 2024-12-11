import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CollapsibleSection = () => {
  const items = [
    { id: 1, title: 'Etiam mollis libero vitae pulvinar bibendum.', content: 'Detailed information about this topic.' },
    { id: 2, title: 'Sed do eiusmod tempor incididunt ut labore.', content: 'More details on this topic.' },
    { id: 3, title: 'Etiam mollis libero vitae pulvinar bibendum.', content: 'Additional information here.' },
  ];

  return (
    <section className="text-center my-5 p-4 bg-dark text-white rounded">
      <h2 className="mb-4 text-primary">These cases are perfectly simple.</h2>
      <p className="mb-5">
        We make websites that are ranked number one in design, build, and marketing. 
        Creative and beautiful websites that will make you more successful.
      </p>

      <div className="accordion" id="accordionExample">
        {items.map((item) => (
          <div className="accordion-item bg-dark border-0" key={item.id}>
            <h2 className="accordion-header" id={`heading${item.id}`}>
              <button
                className="accordion-button bg-dark text-white collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded="false"
                aria-controls={`collapse${item.id}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${item.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${item.id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-muted">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollapsibleSection;
