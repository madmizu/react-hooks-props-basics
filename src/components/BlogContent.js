import React from "react";

function BlogContent(props) {
  console.log(props);

  // conditional rendering
  if (!props.isPublished) {
    return null; // will not display any DOM elements here
  } else {
    return (
      <div id="blog-content">
        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead} minutes to read</p>
      </div> 
    );
  }
}
  // return <div id="blog-content">{props.articleText}</div>;

export default BlogContent;
