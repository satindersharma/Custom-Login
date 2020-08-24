from django.views.generic import TemplateView
from django.shortcuts import redirect
# from django.shortcuts import get_object_or_404, redirect, render
# from django.template.defaultfilters import slugify
# from django.urls import path, reverse, reverse_lazy

class Home(TemplateView):
    template_name = "dashboard.html"

    def get(self, request, *args, **kwargs):
        return redirect('login')

class PrivaryPage(TemplateView):
    template_name = "privacy-policy.html"

class TermsandConditionPage(TemplateView):
    template_name = "terms-and-conditions.html"
