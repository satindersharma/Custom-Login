from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
from django.utils import timezone
from django.urls import reverse
from django.db.models.signals import post_save
from django.dispatch import receiver


c_year_val = timezone.now().year
HOUR_CHOICES = [("12:00 AM", "12:00 AM"), ("01:00 AM", "01:00 AM"), ("02:00 AM", "02:00 AM"), ("03:00 AM", "03:00 AM"), ("04:00 AM", "04:00 AM"), ("05:00 AM", "05:00 AM"), ("06:00 AM", "06:00 AM"), ("07:00 AM", "07:00 AM"), ("08:00 AM", "08:00 AM"), ("09:00 AM", "09:00 AM"), ("10:00 AM", "10:00 AM"), ("11:00 AM", "11:00 AM"),
                ("12:00 PM", "12:00 PM"), ("01:00 PM", "01:00 PM"), ("02:00 PM", "02:00 PM"), ("03:00 PM", "03:00 PM"), ("04:00 PM", "04:00 PM"), ("05:00 PM", "05:00 PM"), ("06:00 PM", "06:00 PM"), ("07:00 PM", "07:00 PM"), ("08:00 PM", "08:00 PM"), ("09:00 PM", "09:00 PM"), ("10:00 PM", "10:00 PM"), ("11:00 PM", "11:00 PM"), ]

WEEK_CHOICES = [("Monday", "Monday"), ("Tuesday", "Tuesday"), ("Wednesday", "Wednesday"), (
    "Thursday", "Thursday"), ("Friday", "Friday"), ("Saturday", "Saturday"), ("Sunday", "Sunday"), ]
# MONTH_CHOICES = [('1', "January"), ('2', "February"), ('3', "March"), ('4', "April"), ('5', "May"), ('6', "June"),
#                  ('7', "July"), ('8', "August"), ('9', "September"), ('10', "October"), ('11', "November"), ('12', "December"), ]

# YEAR_CHOICES = [(str(c_year_val - x_v), str(c_year_val - x_v)) for x_v in range(10)]


class Profile(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    birthdate = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.user.__str__()


class Setting(models.Model):

    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    default_hour = models.CharField(
        max_length=8, choices=HOUR_CHOICES, default=HOUR_CHOICES[5][0], null=True, blank=True)
    default_Week_start_day = models.CharField(
        max_length=10, choices=WEEK_CHOICES, default=WEEK_CHOICES[0][0], null=True, blank=True)
    # default_month = models.CharField(
    #     max_length=2, choices=MONTH_CHOICES, default=MONTH_CHOICES[0][0], null=True, blank=True)
    # default_year = models.CharField(
    #     max_length=4, choices=YEAR_CHOICES, default=YEAR_CHOICES[0][0], null=True, blank=True)

    def __str__(self):
        return self.user.__str__()

    def get_absolute_url(self):
        return reverse("dashboard")
        # return reverse("view-post", kwargs={'slug': self.slug})

    def get_setting_update_url(self):
        # return reverse("settings")
        return reverse("settingss", args=[str(self.id)])


# @receiver(post_save, sender=get_user_model)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)
#         Setting.objects.create(user=instance)
#     instance.profile.save()
#     instance.setting.save()

# @receiver(post_save, sender=get_user_model)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()
#     instance.setting.save()


# def post_save_user_receiver(sender, instance, *args, **kwargs):
#     po = Profile.objects.create(user=instance)
#     so = Setting.objects.create(user=instance)
#     po.save()
#     so.save()


# post_save.connect(post_save_user_receiver, sender=get_user_model())
