package com.yq.news.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.yq.news.pojo.News;

@Controller
public class NewsController {

	@Autowired
	private RestTemplate restTemplete;
	
	private final String URL_NEWSLIST = "http://localhost:8899/news-query/getNewsList";
	
	@RequestMapping(value="/queryAllNews")
	public ModelAndView queryAllNews()
	{
	  ModelAndView mv = new ModelAndView();
	  List<News> newsList = this.restTemplete.getForObject(URL_NEWSLIST, List.class);
	  mv.addObject("newsList", newsList);
	  mv.setViewName("newslist");
	  return mv;
	}
}
