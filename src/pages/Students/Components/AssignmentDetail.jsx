import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Result } from "antd";

const AssignmentDetail = () => {
  const { id } = useParams();
  const assignments = [
    {
      id: 1,
      title: "Dynamic Routing Using Dummy JSON API 📡",
      detail: "Learn how to use React Router for dynamic routing. 🌐",
    },
    {
      id: 2,
      title: "Create Todo App Using useState and Components 📝",
      detail: "Build a functional Todo App using React state. ✅",
    },
    {
      id: 3,
      title: "Build a Blog Using React and Firebase 💻",
      detail: "Integrate Firebase with React to create a blog. 🔥",
    },
    {
      id: 4,
      title: "Create a Responsive Portfolio Website 🌐",
      detail: "Design and develop a portfolio website. 🖥️",
    },
    {
      id: 5,
      title: "Develop a Weather App Using React 🌦️",
      detail: "Fetch and display weather data using APIs. 🌍",
    },
  ];

  const assignmentIdFind = assignments.find((data) => data.id == id);

  // If assignment is not found
  if (!assignmentIdFind) {
    return (
      <Result
        status="404"
        title="Assignment Not Found"
        subTitle="Sorry, the assignment you're looking for doesn't exist."
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 ">
      <div className="leading-10 mb-6 text-center ms-64">
        <h2 className="font-semibold text-[2rem] ">{assignmentIdFind.title}</h2>
        <p className="text-gray-500 font-semibold text-[1.2rem]">{assignmentIdFind.detail}</p>
      </div>

      <Card
        bordered={false}
        style={{
          width: "25%",
          height: "200px", 
          marginRight: "10%", 
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
          borderRadius: "15px", 
          padding: "2px", 
        }}
      >
        <h3 className="font-semibold text-xl mb-4">Your Task</h3> 
        <Button
          type="dashed"
          style={{
            width: "100%",
            marginBottom: "10px",
            borderRadius: "5px",
            transition: "all 0.3s ease",
          }}
          className="hover:bg-gray-200"
        >
          Add or Create
        </Button>
        <Button
          type="primary"
          style={{
            width: "100%",
            borderRadius: "5px",
            transition: "all 0.3s ease", 
          }}
          className="hover:bg-blue-600"
        >
          Mark as Done
        </Button>
      </Card>
    </div>
  );
};

export default AssignmentDetail;
