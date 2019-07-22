---
layout: post
title: Count-sort
categories: Algorithm

---


        class Count_sort():
            def __init__(self, list, max_number):
                self.items= list
                self.max_number = max_number

            def sort(self):
                items = self.items
                max_number = self.max_number
                n = len(items)
                count = []

                for i in range(max_number):
                    count.append(0)

                for i in range(n):
                    count[items[i]-1] += 1  # Key point

                return count
            def print_list(self):
                items =self.items
                count = self.sort()
                Count_list = []

                for i in range(len(count)):
                    for j in range(count[i]):
                        Count_list.append(i+1)
                return Count_list


        x= [1,3,5,2,3,2,2,2,3,5,1,2,3,2,3,5,3,2,2,1,2,2,2,3,3,2,1,1,5,3,2]
        y = Count_sort(x, 5)
        print(x)
        print(y.sort())
        print(y.print_list())


        [1, 3, 5, 2, 3, 2, 2, 2, 3, 5, 1, 2, 3, 2, 3, 5, 3, 2, 2, 1, 2, 2, 2, 3, 3, 2, 1, 1, 5, 3, 2]
        [5, 13, 9, 0, 4]
        [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5]

