package com.example.webDevfall2021serverjavaTeya.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webDevfall2021serverjavaTeya.models.Widget;
import com.example.webDevfall2021serverjavaTeya.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class WidgetService {
	@Autowired
	WidgetRepository widgetRepository;
	
	@PostMapping("/api/widget")
	public List<Widget> saveWidgets(@RequestBody List<Widget>widgets) {
		List<Widget> savedWidgets= new ArrayList<Widget>();
		widgetRepository.deleteAll();
		for(Widget widget: widgets) {
			savedWidgets.add(widgetRepository.save(widget));
		}
		return savedWidgets;
	}
}
