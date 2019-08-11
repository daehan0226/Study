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



* {% if request.user.is_authenticated %} {{ user.username }} 님 로그아웃하기 {% else %} 로그인  {% endif %}



* Current generic views implementation allows for using login_required decorator in two ways:
  * By using decorator in urls:
    * urls.py - login_required(MyView.as_view())
  * By overriding dispatch method:
     
        @method_decorator(login_required)
        def dispatch(self, request, *args, **kwargs):
         return super(self.__class__, self).dispatch(request, *args, **kwargs)


* Views.py

        class MyView(TemplateView):
                login_required = True
                template_name = 'some_template.html'

