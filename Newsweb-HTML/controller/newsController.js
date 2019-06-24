app.controller("NewsController", function($scope, newsService) {

	$scope.loadALlNewsList = function() {
		newsService.findAll().success(function(response) {
			//response --> 响应结果数据，json数据
			$scope.newslist = response;
		})
	}

	$scope.categoryList = function() {
		newsService.findCategoryList().success(function(response) {
			//alert(response)
			$scope.categorylist = response;
		})
	}

	$scope.save = function() {
		var seviceObj;

		if($scope.entity.id != null) {
			seviceObj = newsService.update($scope.entity);
		} else {
			seviceObj = newsService.add($scope.entity);
		}
		
		seviceObj.success(function(response) {
			if(response.success) {
				$scope.loadAllNewsList(); // 重新加载列表
			} else {
				alert("编辑数据失败!");
			}
		});

	}

	$scope.findOne = function(id) {

		// 发送请求
		newsService.findByOne(id).success(function(response) {

			$scope.entity = response;
		})

	}

	$scope.selectcheckedIds = []; // js的语法

	$scope.updateSelectchecked = function($event, id) {

		// 判断用户是否选择了checkbox
		if($event.target.checked) {
			// 用户选择了checkbox 
			$scope.selectcheckedIds.push(id);
		} else {

			// 获取到当前id在数组中对应的索引位置
			var index = $scope.selectcheckedIds.indexOf(id);
			// 用户没有选择checkbox
			$scope.selectcheckedIds.splice(index, 1);
		}

	}

	$scope.dele = function() {

		newsService.deletes($scope.selectcheckedIds).success(function(response) {

			if(response.success) {
				// 删除成功
				//$scope.loadNewsList(); //  异步再次加载列表数据 (让用户看到最新数据)

				$scope.reloadList(); // 调用 分页的查询方法
			} else {
				alert('删除失败');
			}
		})
	}

	//分页控件配置
	//currentPage当前页  
	//totalItems :总记录数  
	//itemsPerPage:每页记录数  
	//perPageOptions :分页选项  
	//onChange:当页码变更后自动触发的方法

	/*
	   1.onChange  初始化分页的显示 （查询数据库）
	   
	  
	  2.onChange 条件变更后，会立即出发该事件，重新加载条件对应的数据  
	   
	 * **/
	$scope.paginationConf = {
		currentPage: 1,
		totalItems: 5,
		itemsPerPage: 5,
		perPageOptions: [5, 10, 20, 30, 40, 50],
		onChange: function() {
			$scope.reloadList();
		}
	};

	// 分页的处理
	$scope.reloadList = function() {

		$scope.findPage($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);

	}

	// 真正实现分页处理

	$scope.findPage = function(pageNum, pageSize) {

		newsService.findByPage(pageNum, pageSize)
			.success(function(response) {

				$scope.newslist = response.rows; // list 集合
				$scope.paginationConf.totalItems = response.total; // 总记录数

			})

	}

})