---
layout: post
title: Django_login
categories: PYTHON

---
[참고1]
[참고2]
[참고1]:https://docs.djangoproject.com/en/2.2/ref/contrib/auth/
[참고2]:http://ruaa.me/django-view/


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

# views.py  // View 클래스

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
                if form.is_valid():
                    user = form.save()
                    user.set_password(user.password)
                    user.save()
                    return HttpResponseRedirect('/main')

                context = { "form" : form }
                return render(request, self.template_name, context)
                
