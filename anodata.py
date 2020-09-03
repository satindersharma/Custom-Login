
import django
from django.db.models.functions import TruncDay, Now, TruncMonth, TruncYear, TruncHour
from datetime import timedelta, date, datetime
from calendar import monthrange
import django
from sys import argv
import os
from django.utils import timezone
import random
from time import sleep
from django.db.models import Avg, Max, Min, Count, F, ExpressionWrapper, DecimalField
# the below line is copied from wsgi file
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CelecUserProject.settings')
django.setup()
from ermapp.models import S1902000403, DashboardTable
'''
if you get DJANGO_SETTINGS_MODULE
the import your model after os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CelecUserProject.settings')
'''

one_day_ago = timezone.now() - timedelta(days=1)
# day_ago = timezone.now() - timedelta(days=1)
# today = datetime.today()

resnow = DashboardTable.objects.filter(date_time__gte=(timezone.now(
) - timedelta(days=7))).aggregate(ene_avg=Avg('energy'), ene_max=Max('energy'), ene_min=Min('energy'))

# resnow1 = DashboardTable.objects.filter(date_time__gte=(timezone.now(
# ) - timedelta(days=100))).aggregate(TruncHour('date_time'), Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))

resnow1 = DashboardTable.objects.filter(date_time__gte=timezone.now(
) - timedelta(days=1)).aggregate(Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))

# resnow11 = DashboardTable.objects.filter(date_time__gte=(timezone.now(
# ) - timedelta(days=1))).anonotate(Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
# resnow = DashboardTable.objects.values(date_time__gte=Now()).aggregate(Avg(energ = 'energy',power = 'power_factor'), Max('energy'), Min('energy'))
result = DashboardTable.objects.filter(date_time__gte=(timezone.now(
) - timedelta(days=7))).annotate(average=ExpressionWrapper(F('date_time')/7, output_field=DecimalField())).aggregate(Avg('energy'), Max('energy'), Min('energy'))

# print(len(resnow))
# print(resnow[0].ene_avg)
# print(resnow)
# print(result)

# for xx in resnow:
#     print(xx.energy)


def daily_data():
    now = timezone.now()
    # time_24_hours_ago = timezone.now() - timedelta(days=1)
    # required_time = time_24_hours_ago - timedelta(hours=1)
    time_24_hours_ago = timezone.now() - timedelta(days=1)
    req_query = DashboardTable.objects.filter(date_time__gte=time_24_hours_ago)
    required_time = time_24_hours_ago.replace(
        minute=0, second=0, microsecond=0)
    req_list = []
    require_now = now.replace(minute=0, second=0, microsecond=0)
    # now.replace(minute=0, second=0, microsecond=0)
    while required_time < require_now:
        time_dict = {"time": str(required_time+timedelta(hours=1))}
        rerr = req_query.filter(date_time__range=[required_time, required_time+timedelta(hours=1)]).aggregate(
            Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        print(rerr)
        rerr.update(time_dict)
        req_list.append(rerr)

        required_time += timedelta(hours=1)
    print(req_list[0])
    print(req_list)
    print(len(req_list))

    # print(req_dict)




def weekly_data():
    now = timezone.now()
    time_7_days_ago = timezone.now() - timedelta(days=7)
    req_query = DashboardTable.objects.filter(date_time__gte=time_7_days_ago)
    print(len(req_query))
    required_time = time_7_days_ago.replace(minute=0, second=0, microsecond=0)
    req_list = []
    required_now = now.replace(minute=0, second=0, microsecond=0)
    while required_time < required_now:
        time_dict = {"time": str(required_time+timedelta(hours=1))}
        rerr = req_query.filter(date_time__range=[required_time, required_time+timedelta(days=1)]).aggregate(
            Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_list.append(rerr)
        
        required_time += timedelta(days=1)
    print(req_list)
    print(len(req_list))
    # return req_dict
# weekly_data()


def monthly_data():
    now = timezone.now()
    # p_m = date(now.year, now.month-1, now.day)
    # print(now)
    # print(p_m)
    # time_7_days_ago = timezone.now() - date(days=7)
    req_list = []
    req_query = DashboardTable.objects.filter(date_time__year=now.year, date_time__month=now.month)
    # print(now.day)
    # mr= monthrange(now.year, now.month)

    for day_num in range(1,now.day+1):
        time_dict = {"day": str(datetime(now.year,now.month,day_num))}
        rerr = req_query.filter(date_time__day = day_num).aggregate(Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_list.append(rerr)
    print(req_list)
    print(len(req_list))
        # required_time += timedelta(days=1)
    return req_list





def yearly_data():
    now = timezone.now()
    # p_m = date(now.year, now.month-1, now.day)
    # print(now)
    # print(p_m)
    # time_7_days_ago = timezone.now() - date(days=7)
    req_list = []
    req_query = DashboardTable.objects.filter(date_time__year=now.year)
    # print(now.day)
    # mr= monthrange(now.year, now.month)

    for mon_num in range(1,now.month+1):
        time_dict = {"month": mon_num}
        rerr = req_query.filter(date_time__month = mon_num).aggregate(Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_list.append(rerr)
        
        # print(len(req_list))
        # required_time += timedelta(days=1)
    print(req_list)
    # return req_list


# daily_data()
# weekly_data()
# monthly_data()
yearly_data()

'''
articles = metrics_models.Article.objects.filter(
    state__date__month=month,
    state__date__year=year
).annotate(
    min_views=Min('state__views'),
    min_downloads=Min('state__downloads')
).aggregate(
    sum_min_views=Sum('min_views'),
    sum_min_downloads=Sum('min_downloads')
)


resday = DashboardTable.objects.filter(date_time__gte=one_day_ago).aggregate(
    Avg('power_factor'), Max('power_factor'), Min('power_factor'))
resday1 = DashboardTable.objects.filter(date_time__day__gte=1).aggregate(
    Avg('volt1'), Max('volt1'), Min('volt1'))
resmonth = DashboardTable.objects.filter(date_time__month=1,date_time__year=2005).aggregate(
    Avg('volt1'), Max('volt1'), Min('volt1'))
resyear = DashboardTable.objects.filter(date_time__year=2005).aggregate(
    Avg('volt1'), Max('volt1'), Min('volt1'))  # for year 2005
resyear1 = DashboardTable.objects.filter(date_time__year__gte=2005).aggregate(
    Avg('volt1'), Max('volt1'), Min('volt1')) # from 2005 till now
resyear1 = DashboardTable.objects.filter(date_time__year__lte=2005).aggregate(
    Avg('volt1'), Max('volt1'), Min('volt1')) # till 2005
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
