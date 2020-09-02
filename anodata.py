from ermapp.models import S1902000403, DashboardTable
import django
from django.db.models.functions import TruncDay, Now, TruncMonth, TruncYear, TruncHour
from datetime import timedelta

import django
from sys import argv
import os
from django.utils import timezone
import random
from time import sleep
from django.db.models import Avg, Max, Min, Count
# the below line is copied from wsgi file
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CelecUserProject.settings')
django.setup()
'''
if you get DJANGO_SETTINGS_MODULE 
the import your model after os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CelecUserProject.settings')
'''

one_day_ago = timezone.now() - timedelta(days=1)
# day_ago = timezone.now() - timedelta(days=1)


resnow = DashboardTable.objects.filter(date_time__gte=(timezone.now(
) - timedelta(days=1))).aggregate(Avg('energy'), Max('energy'), Min('energy'))
resnow1 = DashboardTable.objects.filter(date_time__gte=(timezone.now(
) - timedelta(days=10))).values().aggregate(Avg('energy'), Max('energy'), Min('energy'))
# resnow = DashboardTable.objects.values(date_time__gte=Now()).aggregate(Avg(energ = 'energy',power = 'power_factor'), Max('energy'), Min('energy'))
print(resnow)
print(resnow1)

'''
resday = DashboardTable.objects.filter(date_time__gte=one_day_ago).aggregate(Avg('power_factor'), Max('power_factor'), Min('power_factor'))
resday1 = DashboardTable.objects.filter(date_time__day__gte=1).aggregate(Avg('volt1'), Max('volt1'), Min('volt1'))
resmonth = DashboardTable.objects.filter(date_time__month=1,date_time__year=2005).aggregate(Avg('volt1'), Max('volt1'), Min('volt1'))
resyear = DashboardTable.objects.filter(date_time__year=2005).aggregate(Avg('volt1'), Max('volt1'), Min('volt1'))  # for year 2005
resyear1 = DashboardTable.objects.filter(date_time__year__gte=2005).aggregate(Avg('volt1'), Max('volt1'), Min('volt1')) # from 2005 till now
resyear1 = DashboardTable.objects.filter(date_time__year__lte=2005).aggregate(Avg('volt1'), Max('volt1'), Min('volt1')) # till 2005
# res = S1902000403.objects.annotate(date=TruncDay("date_time")).values("date_time").annotate(y=Count("srl")).order_by("-date_time")
# Entry.objects.filter(pub_date__year=2005)
# Entry.objects.filter(pub_date__year__gte=2005)
print("One day",resday)
print("One day1",resday1)
print("One Month",resmonth)
print("One year",resyear)
print("One year1",resyear1)
# print("One year1",res)
'''
