---
layout: post
title: Django_genericView
categories: PYTHON

---

* BaseView
  * View
  * TemplateView
  * RedirectView
  
* Generic Display View
  * ListView
  * DetailView
  
* Generic Edit View
  * FormView
  * CreateView
  * UpdateView
  * DeleteView
  
* Generic Data View
  * ArchiveIndexView - 조건에 맞는 객체, 객체에 대한 날짜정보
  * YearArchiveView - 연도가 주어지면 그 연도에 해당하는 객체 보여줌
  * MonthArchiveView
  * WeekArchiveView
  * DayArchiveView
  * TodayArchiveView
  

---

# Class view1

        class ArticleCreateView(CreateView):
            template_name = 'article_create.html'
            form_class = ArticleModelForm

            def form_valid(self, form):
                return super().form_valid(form)


# Class view2


        class CourseCreateView(View):
            template_name = "course_create.html"
            def get(self, request, *args, **kwargs):
                # GET method
                form = CourseModelForm()
                context = {"form": form}
                return render(request, self.template_name, context)

            def post(self, request, *args, **kwargs):
                # POST method
                form = CourseModelForm(request.POST)
                if form.is_valid():
                    print(form.cleaned_data)
                    form.save()
                    form = CourseModelForm()
                context = {"form": form}
                #return redirect('/courses/')
                return render(request, self.template_name, context)


# Method

        def product_create_view(request):
            my_form = RawProductForm()
            if request.method == "POST":
                # Data from html ( POST )
                my_form = RawProductForm(request.POST)
                if my_form.is_valid():
                    print(my_form.cleaned_data)  # Dic
                    Product.objects.create(**my_form.cleaned_data)

                # my_form is not valid
                else:
                    print(my_form.errors)
            context = {"form": my_form}  # Send a form to html
            return render(request, "product_create.html", context)
    
    
    
    
    
    





