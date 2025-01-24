"use client";

import React, { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses from Supabase
  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from('courses').select('*');
      if (error) {
        console.error('Error fetching courses:', error);
      } else {
        setCourses(data);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Loading courses...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <li
              key={course.id}
              className="border p-4 rounded shadow hover:shadow-lg transition duration-200"
            >
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
              <p className="mt-2">
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <p>
                <strong>Categories:</strong> {course.categories}
              </p>
              <p>
                <strong>Pricing:</strong> {course.pricing_info}
              </p>
              <a
                href={course.syllabus}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-500 hover:underline"
              >
                View Syllabus
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseList;
