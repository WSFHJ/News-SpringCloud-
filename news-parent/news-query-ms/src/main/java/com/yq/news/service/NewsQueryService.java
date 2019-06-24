package com.yq.news.service;

import java.util.List;

import com.yq.news.pojo.News;

public interface NewsQueryService {

	
	public List<News>getNewList();
	
	
	public News getNewsById(Integer id);
	
	
}
