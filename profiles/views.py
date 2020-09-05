from django.shortcuts import render
from django.views.generic import CreateView, UpdateView
from django.urls import reverse_lazy, reverse
from django.shortcuts import redirect

# Create your views here.
from .models import Profile, Setting
class SettingFormView(CreateView):
    model = Setting
    fields = ["default_hour", "default_Week_start_day", "default_month", "default_year"]
    template_name = 'profile/setting.html'

    def form_valid(self, form):
        if form.is_valid():
            if not form.instance.user == self.request.user:
                form.instance.user = self.request.user
            # form.instance.slug = random_slug(title=self.request.POST['title'], new_slug=self.request.POST['title'])
            # form.save()
            return super().form_valid(form)
        else:
            # messages.warning(self.request, 'Please fill all required fields.')
            return super().form_invalid(form)


class SettingUpdateFormView(UpdateView):
    model = Setting
    fields = ["default_hour", "default_Week_start_day", "default_month", "default_year"]
    template_name = 'profile/setting.html'
    # success_url = reverse_lazy('settingss')

    def get_object(self):
        obj = super().get_object()
        # Record the last accessed date
        # obj.last_accessed = timezone.now()
        # obj.save()
        return obj

    def form_valid(self, form):
        if form.is_valid():
            form.instance.user = self.request.user
            # form.instance.slug = random_slug(title=self.request.POST['title'], new_slug=self.request.POST['title'])
            # form.save()
            # reverse('settingss', args=[form.instance.id])
            return super().form_valid(form)
        else:
            # messages.warning(self.request, 'Please fill all required fields.')
            return super().form_invalid(form)