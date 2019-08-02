---
layout: post
title: Django_query
categories: PYTHON

---




* input = application_number, output = 해당 특허의 정보 가져오기

* Patent - 테이블 이름, application_number - 컬럼, app_n = input
* Patent와 Patent의 PK 를 FK로 받는 테이블 
  * Patent_applicant의 컬럼 applicant = Patent_applicant__applicant
  * Patent_status의 컬럼 status = Patent_status__status
  * Patent_ipc 의 컬럼 ipc = Patent_ipc__ipc 

    * 원하는 컬럼들을 values 에 넣음
    * queryset = Patent.objects.filter(application_number=app_n).values('title', 'application_number', 'application_date_year', 'application_date_day', 'application_date_month', 'patent_applicant__applicant', 'patent_status__status', 'patent_ipc__ipc')


---

*  input = year, applicant (html-form)
  * year, applicant = data['year'], data['applicant']
  
    * app_id__in= Patent 의 객체
    * applicant_year = Patent_applicant.objects.filter(applicant=applicant, app_id__in=Patent.objects.filter(application_date_year=year))
  
  * applicant_year_count = applicant_year.count()
  * context['applicant_year_count'], context['applicant'], context['year'] = applicant_year_count, applicant, year



---


* ipc 의 중복된 부분 삭제 - app_id 를 가지는 데이터 중 ipc 값이 같은 것 제거
x = Patent.obejcts.all()

for y in x:
    z = Patent_ipc.objects.filter(app_id=y)
    k = []
    for l in z:
        if not l in k:
            k.append(l)
        else:
            l.delete()

