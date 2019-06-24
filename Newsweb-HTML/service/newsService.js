//新闻业务层
app.service("newsService", function($http) {
	var news_query_list = "http://localhost:8899/news-query/";

	var news_eidt_url = "http://localhost:8899/news-eidt/";

	this.findAll = function() {
		return $http.get(news_query_list + "getNewsList");
	}

	this.findCategoryList = function() {
		return $http.get(news_query_list + "getCategoryList");
	}

	this.add = function(entity) {
		return $http.post(news_eidt_url + "addNews", entity);
	}

	this.update = function(entity) {
		return $http.post(news_eidt_url + "updateNews", entity);
	}

	this.findByOne = function(id) {
		return $http.get(news_query_list + "findNewsById/" + id);
	}

	this.deletes = function(ids) {
		return $http.get(news_eidt_url + "delNews?ids=" + ids);
	}

	this.findByPage = function(pageNum, pageSize) {
		return $http.get(news_query_list + "findPage?pageNum=" + pageNum + "&pageSize=" + pageSize);
	}

})