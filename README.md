

###kmeans法
k値と行列をを引数に渡すと、行列の各要素にラベルをつけて返します

####サンプル

		arr = Matrix.build(20, 3){rand(1..50)}.to_a
	
		l_arr, c_arr = kmeans(arr, 3)
		
		puts l_arr.to_s => [0, 2, 1, 0, 0, 2, 0, 0, 2, 0, 2, 0, 2, 1, 0, 1, 2, 1, 2, 0]
		puts c_arr.to_s => [[15, 36, 41], [44, 16, 27], [23, 29, 11]]


