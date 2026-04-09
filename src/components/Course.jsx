import React from "react";

import Header from "./Header";
import Content from "./Content";

const Total = ({ total }) => <strong>total of exercises {total}</strong>;

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={course.parts.reduce((sum, part) => {
          return sum + part.exercises;
        }, 0)}
      />
    </div>
  );
};

export default Course;
