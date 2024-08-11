import React from 'react';

const Movie = ({ title, image }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
      <div className="card shadow-sm px-0 py-0 rounded bg-dark h-100">
        <div className="card-img-wrapper" style={{ height: '300px', overflow: 'hidden' }}>
          <img 
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${image}`} 
            className="card-img-top w-100 h-100" 
            alt={title} 
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="card-body text-white d-flex flex-column justify-content-between">
          <h6 className="card-title text-wrap text-center mt-auto">{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default Movie;
