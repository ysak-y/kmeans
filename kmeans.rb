
require "matrix"

def kmeans(arr, k)

	c_arr = []
	l_arr = Array.new(arr.length, 0)

	c_arr = arr.sample(k)
	
	50.times do 
		
		c_tmp_arr = Array.new(k){Array.new(arr[0].length, 0)}

		arr.each_with_index do |a, idx_a|
			min_k = 0
			min_dst = -1

			c_arr.each_with_index do |c_a, idx_c_a|
				dst = 0
				c_a.each_with_index do |v, idx_c_v|
					dst += Math.sqrt((v - a[idx_c_v]) ** 2)
				end

				if min_dst > dst || min_dst < 0
					min_dst = dst
					min_k = idx_c_a
				end
			end
			
			#for updating criterion axis
			c_tmp_arr[min_k] = c_tmp_arr[min_k].zip(a).map{|f, s| f + s}
			#update label number
			l_arr[idx_a] = min_k
		end
		
		#update center
		c_tmp_arr.each_with_index do |v, idx|
			new_c = v.map{|a| a / l_arr.count(idx)}	
			c_arr[idx] = new_c
		end	
	end
	puts "ラベルはそれぞれ#{l_arr.to_s}です"
	puts "最終的な中心点は#{c_arr.to_s}です"

	return l_arr, c_arr
end


if __FILE__ == $0
	
	#	sample
	#
	#	argments
	#		arr: N-dim arrray
	#		k: number of split
	#
	
	arr = Matrix.build(20, 3){rand(1..50)}.to_a
	
	l_arr, c_arr = kmeans(arr, 3)
	
	puts l_arr.to_s
	puts c_arr.to_s

end
