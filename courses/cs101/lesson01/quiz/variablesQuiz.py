# Given the variables defined here, write Python 
# code that prints out the distance, in meters, 
# that light travels in one processor cycle. 

speed_of_light = 299792458 # meters per second
cycles_per_second = 2700000000 # 2.7GHz
cycle_distance = speed_of_light / cycles_per_second
print(cycle_distance);