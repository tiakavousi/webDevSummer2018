package com.example.webDevfall2021serverjavaTeya.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webDevfall2021serverjavaTeya.models.Course;
import com.example.webDevfall2021serverjavaTeya.repositories.CourseRepository;

@RestController
@CrossOrigin(origins="*")
public class CourseService {
	@Autowired
	CourseRepository courseRepository;

	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepository.findAll(); 
	}
	
	@PostMapping("/api/course")
	public Course createCourse(@RequestBody Course course) {
		return courseRepository.save(course);
	}
	
	@DeleteMapping("/api/course/{courseId}")
	public void deleteCourse(@PathVariable("courseId")int id) {
		courseRepository.deleteById(id);
	}
	
}
