package com.yq.news;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
@MapperScan(value="com.yq.news.mapper")
public class AppQuery {
	public static void main(String[] args) {
		SpringApplication.run(AppQuery.class, args);
		
	}
}
