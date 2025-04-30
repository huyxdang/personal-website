import React, { useState } from "react";

function BucketList() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Sample bucket list items - replace with your own
  const bucketListItems = [
    {
      id: 1,
      title: "Contribute to AI safety research",
      description: "Work on research that helps ensure AI systems remain beneficial and aligned with human values.",
      category: "professional",
      completed: false,
    },
    {
      id: 2,
      title: "Launch a tech startup in Vietnam",
      description: "Create a company that bridges technology and social impact in Southeast Asia.",
      category: "professional",
      completed: false,
    },
    {
      id: 3,
      title: "Hike to Everest Base Camp",
      description: "Complete the trek to the base camp of the world's highest mountain.",
      category: "travel",
      completed: false,
    },
    {
      id: 4,
      title: "Learn to play jazz piano",
      description: "Master enough piano skills to improvise and play jazz standards.",
      category: "personal",
      completed: false,
    },
    {
      id: 5,
      title: "Publish a research paper on LLMs",
      description: "Contribute novel research to the field of large language models.",
      category: "professional",
      completed: false,
    },
    {
      id: 6,
      title: "Travel to all continents",
      description: "Experience the diversity of cultures and landscapes across the world.",
      category: "travel",
      completed: false,
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "professional", name: "Professional" },
    { id: "personal", name: "Personal" },
    { id: "travel", name: "Travel" },
  ];

  const filteredItems = activeCategory === "all" 
    ? bucketListItems 
    : bucketListItems.filter(item => item.category === activeCategory);

  return (
    <section
      id="bucket-list"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f9f6f1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "6rem 2rem 3rem",
        boxSizing: "border-box",
        fontFamily: "'Lexend Deca', sans-serif",
        color: "#3b2f2f",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        <h2 style={{ 
          fontSize: "2.5rem", 
          fontWeight: 600, 
          marginBottom: "0.5rem",
          textAlign: "center" 
        }}>
          Bucket List
        </h2>
        <p style={{ 
          fontSize: "1.1rem", 
          maxWidth: "700px", 
          margin: "0 auto 2.5rem", 
          textAlign: "center",
          opacity: 0.8,
        }}>
          Things I aspire to accomplish in my lifetime. A public commitment to my goals and dreams.
        </p>

        {/* Category filters */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "1rem", 
          marginBottom: "2.5rem",
          flexWrap: "wrap" 
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "999px",
                border: "none",
                backgroundColor: activeCategory === category.id ? "#3b2f2f" : "transparent",
                color: activeCategory === category.id ? "#f9f6f1" : "#3b2f2f",
                cursor: "pointer",
                fontFamily: "'Lexend Deca', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 400,
                transition: "all 0.3s ease",
                boxShadow: activeCategory === category.id ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
                border: "1px solid #3b2f2f",
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Bucket list items */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "1.5rem",
          width: "100%" 
        }}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                transition: "transform 0.3s, box-shadow 0.3s",
                border: item.completed ? "1px solid #7CBA59" : "1px solid transparent",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
              }}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "flex-start", 
                marginBottom: "0.75rem" 
              }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 500, margin: 0 }}>
                  {item.title}
                </h3>
                <span style={{ 
                  fontSize: "0.8rem", 
                  backgroundColor: "#f0ece6", 
                  padding: "0.25rem 0.75rem", 
                  borderRadius: "999px",
                  textTransform: "capitalize"
                }}>
                  {item.category}
                </span>
              </div>
              <p style={{ fontSize: "0.95rem", margin: "0 0 1rem", opacity: 0.8, lineHeight: "1.5" }}>
                {item.description}
              </p>
              {item.completed && (
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem", 
                  color: "#7CBA59",
                  fontSize: "0.9rem",
                  fontWeight: 500
                }}>
                  <i className="fas fa-check-circle"></i>
                  <span>Completed</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BucketList;