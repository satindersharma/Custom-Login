from django import forms
from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, UsernameField, AuthenticationForm, PasswordResetForm
from django.core.exceptions import ValidationError

# from .models import CustomUser, GENDER_CHOICES
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate
# from django.utils.translation import ugettext_lazy as _
from django.utils.translation import gettext_lazy as _
# from django.conf import settings
# User = settings.AUTH_USER_MODEL
'''
class SignUpForm(UserCreationForm):
	username = forms.CharField(
		label='',
		max_length=30,
		min_length=5,
		required=True,
		widget=forms.TextInput(
			attrs={
				"placeholder": "Username",
				"class": "form-control"
			}
		)
	)

	password1 = forms.CharField(
		label='',
		max_length=30,
		min_length=8,
		required=True,
		widget=forms.PasswordInput(
			attrs={
				"placeholder": "Password",
				"class": "form-control"
			}
		)
	)

	password2 = forms.CharField(
		label='',
		max_length=30,
		min_length=8,
		required=True,
		widget=forms.PasswordInput(
			attrs={
				"placeholder": "Confirm Password",
				"class": "form-control"
			}
		)
	)

	class Meta:
		model = get_user_model()
		fields = ('username', 'name', 'email', 'password1', 'password2',)

'''


class CustomUserCreationForm(UserCreationForm):
    # def __init__(self, *args, **kwargs):
    #     super(UserCreationForm, self).__init__(*args, **kwargs)
    #     self.fields['first_name'] = forms.CharField(required=True)
    #     self.fields['gender'] = forms.ChoiceField(choices=GENDER_CHOICES,
    #                                               widget=forms.RadioSelect,
    #
    #
    username = forms.CharField(
        label='',
        # max_length=30,
        # min_length=2,
        required=True,
        widget=forms.TextInput(
            attrs={
                "placeholder": "Username",
                "class": "input100 register100"
            }
        )
    )

    email = forms.EmailField(
        label='',
        # max_length=30,
        # min_length=5,
        required=True,
        widget=forms.EmailInput(
            attrs={
                "placeholder": "Email",
                "class": "input100 register100"
            }
        )
    )

    password1 = forms.CharField(
        label='',
        # max_length=30,
        # min_length=8,
        required=True,
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password",
                "class": "input100 register100"
            }
        )
    )

    password2 = forms.CharField(
        label='',
        # max_length=30,
        # min_length=8,
        required=True,
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Confirm Password",
                "class": "input100 register100"
            }
        )
    )

    class Meta:
        model = get_user_model()
        fields = ('username','email', 'password1', 'password2',)


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = get_user_model()
        fields = UserChangeForm.Meta.fields


class CustomAuthenticationForm(AuthenticationForm):

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        # rem = self.request.POST.get('remember-me')
        # print(self.cleaned_data)
        # print(self.request.session.get_expiry_age())
        # print(rem)

        if username is not None and password:
            self.user_cache = authenticate(
                self.request, username=username, password=password)

            if not self.request.POST.get('remember-me', None):
                self.request.session.set_expiry(0)

            if self.user_cache is None:
                raise self.get_invalid_login_error()
            else:
                self.confirm_login_allowed(self.user_cache)

        return self.cleaned_data


'''
another example

class FriendForm(forms.ModelForm):
    # change the widget of the date field.
    dob = forms.DateField(
        label='What is your birth date?',
        # change the range of the years from 1980 to currentYear - 5
        widget=forms.SelectDateWidget(
            years=range(1980, datetime.date.today().year-5))
    )

    def __init__(self, *args, **kwargs):
        super(FriendForm, self).__init__(*args, **kwargs)
        # add a "form-control" class to each form input
        # for enabling bootstrap
        for name in self.fields.keys():
            self.fields[name].widget.attrs.update({
                'class': 'form-control',
            })

    class Meta:
        model = Friend
        fields = ("__all__"

'''


class CustomPasswordResetForm(PasswordResetForm):
    def clean_email(self):
        email = self.cleaned_data['email']
        if not get_user_model().objects.filter(email__iexact=email, is_active=True).exists():
            msg = _(f"No user registered with the {email} E-Mail address.")
            self.add_error('email', msg)
        return email
