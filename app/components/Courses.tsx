import Link from "next/link";

async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
}

const Courses = async () => {
  const courses = await fetchCourses();
  return (
    <div className="container">
      {courses.map((course) => (
        <div
          key={course.key}
          className="bg-slate-400 my-2 p-4 rounded-md shadow-md"
        >
          <h3 className="text-2xl font-semibold">{course.title}</h3>
          <small>{course.level}</small>
          <p className="text-slate-200">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="my-4 bg-blue-500 px-4 py-2 block w-1/4 text-blue-200 shadow-md rounded-md"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
