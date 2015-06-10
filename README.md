

###k-means

When you pass the K value and matrix to this function, return the matrix with labels.

####Sample
		
		#Ruby
		arr = Matrix.build(20, 3){rand(1..50)}.to_a
	
		l_arr, c_arr = kmeans(arr, 3)
		
		puts l_arr.to_s => [0, 2, 1, 0, 0, 2, 0, 0, 2, 0, 2, 0, 2, 1, 0, 1, 2, 1, 2, 0]
		puts c_arr.to_s => [[15, 36, 41], [44, 16, 27], [23, 29, 11]]

		//Javascript
		var arr = [];
		for (var i = 0; i < 10; i++){
		var a = [];
		for (var j = 0; j < 3; j++){
			a.push(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
		}
			arr.push(a);
		}

		var dst_arr = kmeans(arr, 2);

		console.log(dst_arr[0]); => 0,1,0,1,1,1,0,0,1,1
		console.log(dst_arr[1]); => 41.99999141693115,38.33333110809326,0,12.800000085998493,24.19999983131065,0



