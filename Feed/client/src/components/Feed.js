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
        <div>
          <div><img src={`${ramFeed.bigphoto}`} width={500} height={300} style={style.image} /></div>
          <div> <h2><strong>{ramFeed.title}{' '}</strong></h2></div>
          <div> author:{' '} {ramFeed.author}{' '} <img src={`${ramFeed.authorphoto}`} /> </div>
          <p> <strong>Updates:{' '} </strong> {ramFeed.newsfeed} <br /> </p>
          <div><img src={`${ramFeed.smallphoto}`} width={300} height={200} style={style.image} /></div>
          <p> {ramFeed.newsfeed} <br /> </p>
          <p><img src={'https://pbs.twimg.com/profile_images/1027403255607746560/dIyhrGOz_400x400.jpg'} width={25} height={25}/>{ramFeed.timestamp}</p>
        </div>
      </div>
    </div>))}
  </div>
);

export default Feed;
