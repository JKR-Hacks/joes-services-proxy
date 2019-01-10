import React from 'react';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};

const Feed = ({ ramsFeed }) => (

  <div className="container">
      {ramsFeed.map(ramFeed => (
    <div className="row" key={ramFeed.id}>
      <div className="col-md-6">
        <div >
          <div><img src={`${ramFeed.bigphoto}`} width={500} height={350} style={style.image} /></div>
          <div>
            {ramFeed.title}
            {' '}
          </div>
          <div>
author:
            {' '}
            {ramFeed.author}
            {' '}
            <img src={`${ramFeed.authorphoto}`} />
          </div>
          <p>
Updates:
            {' '}
            {ramFeed.newsfeed}
            <br />
            {ramFeed.timestamp}
          </p>
        </div>
    </div>
    </div>
      ))}

  </div>
);

export default Feed;
