from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView, View
from django.contrib.auth import get_user_model
from django.contrib import messages
from CelecUserProject.mixins import NextUrlMixin
from .forms import CustomUserCreationForm, CustomAuthenticationForm
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib.auth.views import LoginView, LogoutView, TemplateView
from django.http import HttpResponseRedirect
from django.contrib import messages
'''

192.168.0.221
celec
12345
name of db crm



def signup(request):
	if request.method == "POST":
		form = UserCreationForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data.get('username')
			password = form.cleaned_data.get('password1')
			user = authenticate(username=username, password=password)
			login(request, user)
			return redirect('home')
		else:
			form = UserCreationForm()

		return render(request, 'signup.html', {'form': form})

'''

class LogintTemp1(TemplateView):
    template_name = "dashboard.html"

class LogintTemp2(TemplateView):
    template_name = "registration/login2.html"

class LogintTemp3(TemplateView):
    template_name = "registration/login3.html"

class SignUpView(NextUrlMixin, CreateView):
    form_class = CustomUserCreationForm
    success_url = '/'
    template_name = 'registration/signup.html'
    success_message = 'You have signed up successfully'
    default_next = '/'

    def form_valid(self, form):
        # save the new user first
        form.save()
        # get the username and password
        # authenticate user then login
        user = authenticate(
            username=form.cleaned_data['username'], password=form.cleaned_data['password1'], )
        login(self.request, user)
        messages.success(self.request, 'You have signed up successfully')
        next_path = self.get_next_url()
        return HttpResponseRedirect(next_path)


class UserLoginView(NextUrlMixin, SuccessMessageMixin, LoginView):
    form_class = CustomAuthenticationForm
    # template_name = 'registration/login3.html'

class UserLogoutView(NextUrlMixin, SuccessMessageMixin, LogoutView):
    pass
