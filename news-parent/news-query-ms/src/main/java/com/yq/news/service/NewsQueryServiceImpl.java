package com.yq.news.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yq.news.mapper.CategoryMapper;
import com.yq.news.mapper.NewsMapper;
import com.yq.news.pojo.News;
import com.yq.news.pojo.NewsExample;


@Service
public class NewsQueryServiceImpl implements NewsQueryService{
	
	@Autowired
	private NewsMapper newsMapper;
	
	@Autowired
	private CategoryMapper categoryMapper;
	
	@Override
	public List<News> getNewList() {
		
		NewsExample example =new  NewsExample();
		// TODO Auto-generated method stub
		return this.newsMapper.selectByExample(example);
	}

	@Override
	public News getNewsById(Integer id) {
		
		return this.newsMapper.selectByPrimaryKey(id);
	}
	

}
