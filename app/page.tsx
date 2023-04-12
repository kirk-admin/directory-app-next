import React from "react";
import Courses from "./components/Courses";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome To Course App</h1>
      {/* @ts-expect-error Async Server Component */}
      <Courses />
    </div>
  );
};

export default HomePage;
