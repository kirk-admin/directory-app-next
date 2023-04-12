"use client";
import React, { useEffect, useState } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [course, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1 className="text-3xl">Welcome To Course App</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={course} />
    </>
  );
};

export default HomePage;
