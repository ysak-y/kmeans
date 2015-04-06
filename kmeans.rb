
require "matrix"

def kmeans(arr, axis, k)

	c_arr = []

	k.times do |i|
		r = rand(k)
		c_arr.push(arr[r].sample)
	end
	puts "c_arr は #{c_arr}です。"

end


if __FILE__ == $0
	
	#	サンプルコード
	#
	#	引数
	#		arr: n次元の行列
	#		axis: 次元数n
	#		k: 分割する数
	#
	
	arr = Matrix.build(20){rand(1.0..50.0)}.to_a
	puts kmeans(arr, 2, 4)

end
