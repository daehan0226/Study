---
layout: post
title: Django_login(2)
categories: PYTHON

---


* 로그인 상태에서 register 접근


        class CreateUser(FormView):
            form_class = UserRegisterForm # UserCreationForm
            template_name = 'user/register.html'
            success_url = '/main'


            ### redirect
            def get(self, request, *args, **kwargs):
                if request.user.is_authenticated():
                    return HttpResponseRedirect('/main')
                return super(CreateUser, self).get(request, *args, **kwargs)


            def form_valid(self, form):
                user = User.objects.create_user(
                        username=form.cleaned_data['username'],
                        password=form.cleaned_data['password1'],
                        email=form.cleaned_data['email'],
                        first_name=form.cleaned_data['first_name'],
                        last_name=form.cleaned_data['last_name'],
                )
                return super(CreateUser, self).form_valid(form)


# 로그인 관련 템플릿

[참고1]:
[참고2]:

* {% if request.user.is_authenticated %} {{ user.username }} 님 로그아웃하기 {% else %} 로그인  {% endif %}



* Current generic views implementation allows for using login_required decorator in two ways:
  * By using decorator in urls:
        
        from django.contrib.auth.decorators import login_required

        app_name='patenttrends'

        urlpatterns = [
            path('table/',  login_required(TableList_page.as_view()), name='table_page'),
        ]



  * By overriding dispatch method:
     
     
        from django.utils.decorators import method_decorator
        from django.contrib.auth.decorators import login_required

        class TableList_page(View):
            template_name = 'main/tables.html'
            context = {}

            @method_decorator(login_required)
            def dispatch(self, *args, **kwargs):
              return super().dispatch(*args, **kwargs)
              
              # urls 에서 as_view() 에 의해 class의 인스턴스를 생성하고 dispatch() 메소드를 호출 
              # dispatch는 request를 살펴보고 GET인지 POST인지 혹은 다른 형태인지 결정
              # 결정이 되면 request를 매칭되는 메소드로 전달해주며, 그렇지 않으면 HttpResponsNotAllowed 에러를 발생시킨다





# Display form errors

          {% if form.errors %}
            {% for field in form %}
                {% for error in field.errors %}
                    <div class="alert alert-danger">
                        <strong>{{ error|escape }}</strong>
                    </div>
                {% endfor %}
            {% endfor %}
            {% for error in form.non_field_errors %}
                <div class="alert alert-danger">
                    <strong>{{ error|escape }}</strong>
                </div>
            {% endfor %}
          {% endif %}



[참고3]




[참고1]:https://code.djangoproject.com/ticket/16626
[참고2]:https://ssungkang.tistory.com/entry/Django-FBV-%EC%99%80-CBV-%EC%9D%98-decorators-%EC%82%AC%EC%9A%A9%EB%B2%95

[참고3]:https://stackoverflow.com/questions/14647723/django-forms-if-not-valid-show-form-with-error-message
