---
layout: post
title: Django_login
categories: PYTHON

---
[참고1]
[참고2]

# views.py 수정 후 // 


        from django.views.generic import FormView
        from django.contrib.auth.models import User

        class CreateUser(FormView):
            form_class = UserRegisterForm 
            template_name = 'user/register.html'
            success_url = '/main'

            def form_valid(self, form):
                user = User.objects.create_user(
                        username=form.cleaned_data['username'],
                        password=form.cleaned_data['password1'],
                        email=form.cleaned_data['email'],
                        first_name=form.cleaned_data['first_name'],
                        last_name=form.cleaned_data['last_name'],
                )
                return super(CreateUser, self).form_valid(form)




# froms.py
* User form 꾸미기

        class UserRegisterForm(UserCreationForm):
            class Meta:
                model = User
                fields = ['first_name', 'last_name' , 'username', 'email', 'password1','password2']
                widgets = {
                    'first_name': forms.TextInput(
                        attrs={"class": "form-control form-control-user", "id": "exampleFirstName", "placeholder": "First name"}),
                    'last_name': forms.TextInput(
                        attrs={"class": "form-control form-control-user", "id": "exampleFirstName", "placeholder": "Last name"}),
                    'username' : forms.TextInput(attrs={"class": "form-control form-control-user", "id": "exampleFirstName", "placeholder": "Username"}),
                    'email' : forms.TextInput(attrs={"class": "form-control form-control-user", "id": "exampleInputEmail","placeholder": "Email Address"}),
                    'password1' : forms.PasswordInput(attrs={ "class": "form-control form-control-user", "id" : "exampleInputPassword", "placeholder" : "Password" }),
                    'password2': forms.PasswordInput(
                        attrs={"class": "form-control form-control-user", "id": "exampleInputPassword",
                               "placeholder": "Password"}),

                }

                label = {
                    'first_name' : '이름',
                    'last_name' : '성',
                    'username' : '닉네임',
                    'email' : '이메일',
                    'password1' : '패스워드',
                    'password2' : '패스워드 확인',
                }

# views.py  // View 클래스 수정 전 // 에러 : 회원가입 해도 로그인이 안됌

        class registerView(View):
            form_class = UserRegisterForm # UserCreationForm
            initial = { 'key' : 'value' }
            template_name = 'user/register.html'

            def get(self, request, *args, **kwargs):
                form = self.form_class(initial=self.initial)
                context = { "form" : form }
                return render(request, self.template_name, context)


            def post(self, request, *args, **kwargs):
                form = self.form_class(request.POST)
                print(form)
                if form.is_valid():                               ### user 테이블에 저장은 되나 로그인 
                    user = form.save()
                    user.set_password(user.password)
                    user.save()
                    return HttpResponseRedirect('/main')

                context = { "form" : form }
                return render(request, self.template_name, context)
                


# urls.py

            from django.contrib.auth import views as auth_views
            path('login/', auth_views.LoginView.as_view(template_name="user/login.html"), name='login'),
            path('logout/', auth_views.LogoutView.as_view(next_page='/'), name='logout'),

* django.contrib.auth  LoginView, LogoutView import 하여 template, url 설정 // form - html에서 직접 설정. 










[참고1]:https://docs.djangoproject.com/en/2.2/ref/contrib/auth/
[참고2]:http://ruaa.me/django-view/

