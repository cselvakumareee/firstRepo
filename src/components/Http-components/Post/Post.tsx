import React from 'react';

import './Post.scss';

const post = (props: any) => {
  console.log("Post"+props);
  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

export default post;
