---
layout: post
title: Sort(5)_review
categories: Algorithm

---


# 퀵 정렬 - 메모리 할당을 줄이기 위해 a b c 에 따로 할당하지 않고 자체를 파티션으로 나눠 정렬


        def partition(list, start, end):
            pivot = list[start]
            left = start+1
            right = end
            done = False


            ## left = 왼쪽에서 오른쪽으로
            ## right = 오른쪽에서 왼쪽으로
            ## left 가 피벗보다 크고 and right 가 피벗보다 작을때 교환
            ## x = [3, 7, 8, 5, 2, 1, 9, 5, 4] -> left 가 7 이고 right 가 1일 떄 교환하여 [3(피벗), 1, 8, 5, 2, 7, 9, 5, 4]
            ## ㄷ음 left 가 8 이고 right가 2 일때 교환 -> [ 3(피벗), 1, 2, 5, 8, 7, 9, 5, 4]
            ## 다음은 left(=5=list[3]) 의 인덱스가 right(=2=list[2])가 크므로 패스 ( done = True -> 시작과 오른쪽의 위치 변경
            ## right=2 값과 피벗(start)=3 위치 변경 ==> [2,1,3,5,8,7,9,5,4]  =right의 인덱스는 다시 
            ## 

            while not done:
                while left <= right and list[left] <= pivot:
                    print('left')
                    left += 1

                while left <= right and pivot <= list[right]:
                    print('right')
                    right -= 1

                if right < left:
                    done = True
                else:
                    print(list[left], list[right])
                    list[left], list[right] = list[right], list[left]
            list[start], list[right] = list[right], list[start]

            return right  # 다음 pivot이 됨됨


        def quick_sort(list, start, end):
            if start < end:
                pivot = partition(list, start, end)
                print(list)
                # 피벗을 기준으로 왼쪽 오른쪽 나누어 재귀
                quick_sort(list, start, pivot-1)
                quick_sort(list, pivot+1, end)

            return list
    
    
    
# Counting stairs

* 스텝이 1, 2, 아닌 1, 3, 5 스텝으로 계단 올라갈수 있을 때 n 계단에 갈 수 있는 방법의 수

        def num_ways(n):
            x = [1, 3, 5]

            if n == 0:
                return 1
            nums = [ i for i in range(n+1)]
            nums[0] = 1

            for i in range(1,n+1):
                total = 0

                # 각 i 번째 계단에 가기 위한 방법 수로 1, 3, 5 따로 구해서 total 로 다 더함. 
                for j in x:
                    if i - j >= 0:
                        total += num_ways(i - j)
                nums[i] = total

            return nums[n]

        
    
