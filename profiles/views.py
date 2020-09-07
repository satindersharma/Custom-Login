from django.shortcuts import render
from django.views.generic import CreateView, UpdateView
from django.urls import reverse_lazy, reverse
from django.shortcuts import redirect, HttpResponseRedirect
from .forms import SettingForm
# Create your views here.
from .models import Profile, Setting
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import get_user_model
from django.db import IntegrityError


class SettingFormView(LoginRequiredMixin, CreateView):
    model = Setting
    form_class = SettingForm
    # fields = ["default_hour", "default_Week_start_day", "default_month", "default_year"]
    # fileds = ['__all__']
    template_name = 'profile/setting.html'

    def form_valid(self, form):
        if form.is_valid():
            try:
                form.instance.user = self.request.user
                # form.instance.slug = random_slug(title=self.request.POST['title'], new_slug=self.request.POST['title'])
                # form.save()
                return super().form_valid(form)
            except IntegrityError:
                return reverse_lazy("dashboard")
        else:
            # messages.warning(self.request, 'Please fill all required fields.')
            # redirect('dashdata')
            return super().form_invalid(form)


class SettingUpdateFormView(LoginRequiredMixin, UpdateView):
    model = Setting
    form_class = SettingForm
    # fields = ["default_hour", "default_Week_start_day"]
    template_name = 'profile/setting.html'
    # success_url = reverse_lazy('settingss')

    def get_object(self):
        object = super().get_object()
        # Record the last accessed date
        # obj.last_accessed = timezone.now()
        # obj.save()
        return object

    def form_valid(self, form):
        if form.is_valid():
            try:
                # print(form.instance.user)
                form.instance.user = self.request.user
                
                # form.instance.slug = random_slug(title=self.request.POST['title'], new_slug=self.request.POST['title'])
                # form.save()
                # reverse('settingss', args=[form.instance.id])

                return super().form_valid(form)
            except IntegrityError:
                return reverse("settingss", args=[str(form.instance.id)])
        else:
            # messages.warning(self.request, 'Please fill all required fields.')
            return super().form_invalid(form)
