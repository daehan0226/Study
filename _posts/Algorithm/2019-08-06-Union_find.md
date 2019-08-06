---
layout: post
title: Union_find
categories: Algorithm

---


        def getParent(parent, num):
            if parent[num] == num:
                return num
            else:
                return getParent(parent,parent[num])   # 재귀로 부모의 값 -> 최상위 부모의 값 출력


        # 각 부모 노드 합치기
        def unionParent(parent, num1, num2):
            a = getParent(parent, num1)  # num1 의 부모노드
            b = getParent(parent, num2) # num2 의 부모노드

            if a == b:
                return "이미 부모노드가 일치합니다"

            else:
                if a < b:
                    parent[b] = a   # b의 부모노드를 a로 할당당

                else:
                   parent[a] = b # a의 부모노드를 b로 할당

        def findParent(parent, num1, num2):
            a = getParent(parent, num1)  # num1 의 부모노드
            b = getParent(parent, num2)  # num2 의 부모노드

            if a == b:
                return "부모노드 일치"
            else:
                return "부모노드 불일치"

        parent = [ i for i in range(11)]

        # 노드 합치기    // 1-2-3-4   5-6-7-8
        unionParent(parent, 1,2)
        unionParent(parent, 2,3)
        unionParent(parent, 3,4)
        unionParent(parent, 5,6)
        unionParent(parent, 6,7)
        unionParent(parent, 7,8)

        print("노드 합친 후 :",parent)

        print('1과 5는 연결되어 있나요? %s' % findParent(parent,1,5))
        unionParent(parent, 1,5)
        print("1번노드, 5번노드 합친 후 :", parent)
        print('1과 5는 연결되어 있나요? %s' % findParent(parent,1,5))
        print('1과 5는 연결되어 있나요? %s' % findParent(parent,1,6))


        # 결과
                          1- 2- 3- 4  5- 6- 7- 8 
        노드 합친 후 : [0, 1, 1, 1, 1, 5, 5, 5, 5, 9, 10]
        1과 5는 연결되어 있나요? 부모노드 불일치
        1번노드, 5번노드 합친 후 : [0, 1, 1, 1, 1, 1, 5, 5, 5, 9, 10]
        1과 5는 연결되어 있나요? 부모노드 일치
        1과 5는 연결되어 있나요? 부모노드 일치
        
        
        unionParent(parent, 1,5) 의 과정 - 1, 5 각각 getparent 를 통해 부모 노드 가져옴 // 부모노드는 1,5이 각각 parent의 값을 가져옴 
                                         - parent 값은 처음 1,2,3,4   // 5,6,7,8 이 각각 uniconParent 를 진행하며 (1-2, 2-3, 3-4, 5-6, 6-7, 7-8작은 값이 부모로 할당됨)
                                         - 1-2 -> parent[2] = 1, 2-3 -> parent[3] = 1(patent[2]=1)~~ >  [1, 1, 1, 1, 5, 5, 5, 5]
