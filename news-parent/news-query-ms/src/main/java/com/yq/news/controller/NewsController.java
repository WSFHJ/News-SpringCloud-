package com.yq.news.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yq.news.pojo.News;
import com.yq.news.service.NewsQueryService;

@RestController
public class NewsController {

	
	@Autowired
	private NewsQueryService newsService;
	@RequestMapping(value="/getnewsList")
	public List<News> getNewsList()
	{
		List<News> newList = this.newsService.getNewList();
		return newList;
	}
}
