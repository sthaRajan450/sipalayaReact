import React, { useState } from "react";
import Box from "../components/Box";

const courseData = [
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/04/Blue-Illustrative-Employee-Training-Presentation-1-1.png",
    title: "Web Design | HTML , CSS & JS | 2 Months",
    originalprice: "14,999",
    salesprice: "9,999",
    releaseDate: "2024-04-01",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/03/UI-UX.png",
    title: "UI / UX Design | 2.5 Months",
    originalprice: "19,999",
    salesprice: "14,999",
    releaseDate: "2024-03-15",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/03/Dart-Flutter.png",
    title: "App Development with Flutter | 2.5 Months",
    originalprice: "119,999",
    salesprice: "14,999",
    releaseDate: "2024-03-10",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/03/Blue-Illustrative-Employee-Training-Presentation-1.png",
    title: "Java With Spring & Hibernate | 3 Months",
    originalprice: "24,999",
    salesprice: "19,999",
    releaseDate: "2024-03-12",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/03/Blue-Illustrative-Employee-Training-Presentation.png",
    title: "PHP With Laravel | 2.5 Months",
    originalprice: "14,999",
    salesprice: "9,999",
    releaseDate: "2024-03-05",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/02/Blue-Illustrative-Employee-Training-Presentation.png",
    title: "Python With Data Science | 3 Months",
    originalprice: "24,999",
    salesprice: "19,999",
    releaseDate: "2024-02-28",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/02/Blue-Illustrative-Employee-Training-Presentation-5.png",
    title: "Frontend Development With React JS | 2.5 Months",
    originalprice: "19,999",
    salesprice: "14,999",
    releaseDate: "2024-02-20",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/02/Blue-Illustrative-Employee-Training-Presentation-2.png",
    title: "MERN Stack | 3 Months",
    originalprice: "29,999",
    salesprice: "19,999",
    releaseDate: "2024-02-15",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/02/Blue-Illustrative-Employee-Training-Presentation-3.png",
    title: "Backend API Development | 2 Months",
    originalprice: "19,999",
    salesprice: "14,999",
    releaseDate: "2024-02-10",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2023/10/Blue-Illustrative-Employee-Training-Presentation-4.png",
    title: "Physical / Online Digital Marketing Training | 2.5 Months",
    originalprice: "19,999",
    salesprice: "14,999",
    releaseDate: "2023-10-20",
  },
];

const Courses = () => {
  const [sortOption, setSortOption] = useState("newest");
  const [courses, setCourses] = useState(courseData);

  const sortCourses = (option) => {
    let sorted = [...courses];

    switch (option) {
      case "newest":
        sorted.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        break;
      case "oldest":
        sorted.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
        break;
      case "title-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setCourses(sorted);
  };

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    sortCourses(option);
  };

  return (
    <div>
      <div className="flex justify-end px-36 pt-7">
        <select
          className="border border-gray-600 py-4 px-2 rounded-2xl outline-none"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="newest">Release Date (newest first)</option>
          <option value="oldest">Release Date (oldest first)</option>
          <option value="title-asc">Course Title (A-Z)</option>
          <option value="title-desc">Course Title (Z-A)</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {courses.map((course, idx) => (
          <Box key={idx} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
