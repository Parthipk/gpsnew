import React from "react";
import "./BlogSection.css";

// Dummy image URL for example
const placeholderImage = 'https://via.placeholder.com/500x250'; 

const BlogSection = () => {
  const blogPosts = [
    { id: 1, title: "Lorem Ipsum 1", date: "August 20, 2024", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", url: "/blog" },
    { id: 2, title: "Lorem Ipsum 2", date: "August 21, 2024", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", url: "/blog1" },
    { id: 3, title: "Lorem Ipsum 3", date: "August 22, 2024", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", url: "/blog2" },
    { id: 4, title: "Lorem Ipsum 4", date: "August 23, 2024", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", url: "/blog3" },
  ];

  // Create an array with duplicates for smooth infinite sliding
  const slides = [...blogPosts, ...blogPosts];

  return (
    <div className="blog-section">
      <h1>Our Latest Blog Posts</h1>
      <div className="blog-slider">
        {slides.map((post) => (
          <div className="blog-box" key={post.id}>
            <div className="box-content">
              <div className="box-image" style={{ backgroundImage: `url(${placeholderImage})` }}></div>
              <div className="box-description">
                <h2>{post.title}</h2>
                <p className="date">{post.date}</p>
                <p>{post.description}</p>
                <a href={post.url} className="read-more">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
