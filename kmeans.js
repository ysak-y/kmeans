


var kmeans = function(arr, k){
	
	console.log("kmeans start");
	var c_arr = [];
	var l_arr = [];
	var row = arr.length;
	var col = arr[0].length;
	var area = row * col;
	
	//---------------initialize l_arr---------------

	for (var i = 0; i < row; i++){
		var a = [];
		for (var j = 0; j < col; j++){
			a.push(0);
		}
		l_arr.push(a);
	}

	//---------------decide of initial point---------------
	var index_arr = [];
	for (var i = 0; i < row; i++){
		index_arr.push(i);	
	}
	
	for (var i = 0; i < k; i++){
		var r = Math.floor(Math.random() * (index_arr.length - 0) + 0);
		var r_num = index_arr.splice(r, 1);
		var new_c = arr[r_num];
		c_arr.push(new_c);
	}

	//----------------kmeans--------------
	for (var i = 0; i < 50; i++){
		var c_tmp_arr = [];
		for (var j = 0; j < k; j++){
			var a = [];
			for (var l = 0; l < col; l++){
				a.push(0);
			}
			c_tmp_arr.push(a);
		}
		
		for (var j = 0; j < row; j++){
			var a = arr[j];	
			var min_k = 0;
			var min_dst = -1;
			
	//-----------------caluclate distance of center-------------
			for (var l = 0; l < k; l++){
				var dst = 0;
				var c_a = c_arr[l];
				for (var m = 0; m < col; m++){
					var diff = parseInt(c_a[m]) - a[m];
					var c_v = Math.sqrt(Math.pow(diff, 2));
					dst += c_v;
				}
	//------------------update if shorter than min_dst------------
				if (min_dst > dst || min_dst < 0){
					min_dst = dst;
					min_k = l;
				}

			}

	//------------------update c_tmp_arr------------
			var c_tmp_a = c_tmp_arr[min_k];
			for (var n = 0; n < k; n++){
				c_tmp_a[n] += a[n];
			}

			c_tmp_arr[min_k] = c_tmp_a;
			l_arr[j] = min_k;
		}	
		//----------------count elements of each labels--------------
		var num_of_labels = {};

		for (var j = 0; j < row; j++){
			var v = String(l_arr[j])
			if (v in num_of_labels){
				num_of_labels[v] += 1;
			}else{
				num_of_labels[v] = 1;
			}
			
		}
		//update center
		for (var o = 0; o < k; o++){
			var new_c = [];
			for (var p = 0; p < col; p++){
				new_c = c_tmp_arr[o][p] / num_of_labels[o];
				c_arr[o][p] = new_c;
			}
		}
	}
	return [l_arr, c_arr]; 
};


(function(){
	var arr = [];
	for (var i = 0; i < 10; i++){
		var a = [];
		for (var j = 0; j < 3; j++){
			a.push(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
		}
		arr.push(a);
	}

	var dst_arr = kmeans(arr, 2);

	console.log(dst_arr[0]);
	console.log(dst_arr[1]);
})();
