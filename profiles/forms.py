from django import forms
from .models import Profile, Setting, HOUR_CHOICES, WEEK_CHOICES
from django.core.exceptions import ValidationError, ObjectDoesNotExist


class SettingForm(forms.ModelForm):
    # def __init__(self, *args, **kwargs):
    #     super(SettingForm, self).__init__(*args, **kwargs)
    #         ## add a "form-control" class to each form input
    #         ## for enabling bootstrap
    #     for name in self.fields.keys():
    #         print(self.fields[name].empty_value)
    #         self.fields[name].empty_label = None # here emptly labe don't work so implimented seprately
    #         self.fields[name].empty_value = None
    #         self.fields[name].widget.attrs.update({
    #             'class': 'form-control select2',
    #         })
    # user = forms.IntegerField(widget=forms.HiddenInput())

    default_hour = forms.ChoiceField(label="Choose start hour on chart", choices=HOUR_CHOICES, widget=forms.Select(
        attrs={'class': 'form-control select2 rounded-lg shadow-none mb-2', }))

    default_Week_start_day = forms.ChoiceField(label="Choose start day on chart", choices=WEEK_CHOICES, widget=forms.Select(
        attrs={'class': 'form-control select2 rounded-lg shadow-none mb-2', }))

    class Meta:
        model = Setting
        # fields = "__all__"
        fields = ['default_hour', 'default_Week_start_day', ]

        # widgets = {
        #     'default_hour': forms.TextInput(attrs={'class': 'form-control', 'rows': 20}),
        #     'default_Week_start_day': forms.TextInput(attrs={'class': 'form-control', 'rows': 20}),
        #     'default_month': forms.TextInput(attrs={'class': 'form-control', 'rows': 20}),
        #     'default_year': forms.TextInput(attrs={'class': 'form-control', 'rows': 20}),
        # }
    # def clean_user(self):
    #     form_user_data = self.cleaned_data['user']
    #     try:
    #         form_user = Setting.objects.get(user=form_user_data)

    #         if form_user.user != self.request.user:
    #             raise ValidationError("Not Authenticated")
    #     except ObjectDoesNotExist:
    #         pass
    #     return form_user_data
