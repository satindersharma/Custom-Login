from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = "dashboard.html"

class PrivaryPage(TemplateView):
    template_name = "privacy-policy.html"

class TermsandConditionPage(TemplateView):
    template_name = "terms-and-conditions.html"
