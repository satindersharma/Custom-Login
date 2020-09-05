from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.
from django.utils import timezone
from django.urls import reverse
c_year_val = timezone.now().year
class Profile(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    birthdate = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.user.__str__()


class Setting(models.Model):
    HOUR_CHOICES = [("12:00 AM", "12:00 AM"), ("01:00 AM", "01:00 AM"), ("02:00 AM", "02:00 AM"), ("03:00 AM", "03:00 AM"), ("04:00 AM", "04:00 AM"), ("05:00 AM", "05:00 AM"), ("06:00 AM", "06:00 AM"), ("07:00 AM", "07:00 AM"), ("08:00 AM", "08:00 AM"), ("09:00 AM", "09:00 AM"), ("10:00 AM", "10:00 AM"), ("11:00 AM", "11:00 AM"),
                    ("12:00 PM", "12:00 PM"), ("01:00 PM", "01:00 PM"), ("02:00 PM", "02:00 PM"), ("03:00 PM", "03:00 PM"), ("04:00 PM", "04:00 PM"), ("05:00 PM", "05:00 PM"), ("06:00 PM", "06:00 PM"), ("07:00 PM", "07:00 PM"), ("08:00 PM", "08:00 PM"), ("09:00 PM", "09:00 PM"), ("10:00 PM", "10:00 PM"), ("11:00 PM", "11:00 PM"), ]

    MONTH_CHOICES = [('1', "January"), ('2', "February"), ('3', "March"), ('4', "April"), ('5', "May"), ('6', "June"),
                     ('7', "July"), ('8', "August"), ('9', "September"), ('10', "October"), ('11', "November"), ('12', "December"), ]
    WEEK_CHOICES = [("Monday", "Monday"), ("Tuesday", "Tuesday"), ("Wednesday", "Wednesday"), (
        "Thursday", "Thursday"), ("Friday", "Friday"), ("Saturday", "Saturday"), ("Sunday", "Sunday"), ]
    
    YEAR_CHOICES = [(str(c_year_val - x_v), str(c_year_val - x_v)) for x_v in range(10)]

    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    default_hour = models.CharField(
        max_length=8, choices=HOUR_CHOICES, default=HOUR_CHOICES[5][0], null=True, blank=True)
    default_Week_start_day = models.CharField(
        max_length=10, choices=WEEK_CHOICES, default=WEEK_CHOICES[0][0], null=True, blank=True)
    default_month = models.CharField(
        max_length=2, choices=MONTH_CHOICES, default=MONTH_CHOICES[0][0], null=True, blank=True)
    default_year = models.CharField(
        max_length=4, choices=YEAR_CHOICES, default=YEAR_CHOICES[0][0], null=True, blank=True)

    def __str__(self):
        return self.user.__str__()

    def get_absolute_url(self):
        return reverse("dashboard")
        # return reverse("view-post", kwargs={'slug': self.slug})
    
    def get_setting_update_url(self):
        return reverse("settingss",args=[str(self.id)])
