package com.example.webDevfall2021serverjavaTeya.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webDevfall2021serverjavaTeya.models.Course;
import com.example.webDevfall2021serverjavaTeya.repositories.CourseRepository;

@RestController
public class CourseService {
	@Autowired
	CourseRepository courseRepository;
	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepository.findAll(); 
	}
	
}
