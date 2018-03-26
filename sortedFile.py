# Program to sort file contents containing 10 million integer ranging between 0-99
# I have included a sample file 'unsortedFile.txt' with minimal data. Please replace the file 'usortedFile.txt' with your sample file and rename it 'unsortedFile.txt'
# Output will be genrated to file 'sortedNewFile.txt'
# Language used- Python. Reason- for using JS we would have to create a node server and install dependencoies if any. We were sort on time so used python instead.
# Also it was mentioned we can use any language.
# To execute: copy this file and and unsortedFile.txt to a directory. From terminal go that directory and run 'python sortedFile.py'

# create an array of size 100
sortedArrIndex = [0] * 100

with open('unsortedFile.txt') as f: #open file. this will close the file automatically on completion
	for line in f: #read line by line. previous line will be garbage collected
		content = line
		content = content.strip('\n')
		for val in content.split():
			if(int(val)<100 and int(val)>=0): #check if value is between 0 and 99 as the values are supposed to be between them as mentioned in question
				sortedArrIndex[int(val)] = sortedArrIndex[int(val)] + 1 #incremant the value at that index by 1

newFile = open('sortedNewFile.txt', 'w') #create a new file for storing sorted data

for i in range(len(sortedArrIndex)):
	if (sortedArrIndex[i]>0):
		for j in range(0,sortedArrIndex[i]):
			newFile.write(str(i))
			newFile.write(" ")

newFile.close()