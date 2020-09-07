import django
from django.db.models.functions import TruncDay, Now, TruncMonth, TruncYear, TruncHour
from datetime import timedelta, datetime

from sys import argv
import os
from django.utils import timezone
from django.db.models import Avg, Max, Min, Count, F, ExpressionWrapper, DecimalField
from ermapp.models import S1902000403, DashboardTable
from profiles.models import Setting

def daily_data():
    
    now = timezone.now()
    time_24_hours_ago = timezone.now() - timedelta(days=1)
    req_query = DashboardTable.objects.filter(date_time__gte=time_24_hours_ago)
    required_time = time_24_hours_ago.replace(
        minute=0, second=0, microsecond=0)
    req_list = []
    required_now = now.replace(minute=0, second=0, microsecond=0)
    while required_time < required_now:
        time_dict = {"time": str(required_time+timedelta(hours=1))}
        rerr = req_query.filter(date_time__range=[required_time, required_time+timedelta(hours=1)]).aggregate(
            Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_list.append(rerr)
        required_time += timedelta(hours=1)
    return req_list


def weekly_data():
    now = timezone.now()
    time_7_days_ago = timezone.now() - timedelta(days=7)
    req_query = DashboardTable.objects.filter(date_time__gte=time_7_days_ago)
    required_time = time_7_days_ago.replace(minute=0, second=0, microsecond=0)
    req_list = []
    required_now = now.replace(minute=0, second=0, microsecond=0)
    while required_time < required_now:
        time_dict = {"time": str(required_time+timedelta(hours=1))}
        rerr = req_query.filter(date_time__range=[required_time, required_time+timedelta(hours=1)]).aggregate(
            Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_list.append(rerr)

        required_time += timedelta(hours=1)
    return req_list


def monthly_data():
    now = timezone.now()
    req_list = []
    req_query = DashboardTable.objects.filter(
        date_time__year=now.year, date_time__month=now.month)

    for day_num in range(1, now.day+1):
        time_dict = {"time": str(datetime(now.year, now.month, day_num))}
        rerr = req_query.filter(date_time__day=day_num).aggregate(Avg('saving'), Avg(
            'usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_list.append(rerr)
    return req_list


def yearly_data():
    now = timezone.now()
    req_list = []
    req_query = DashboardTable.objects.filter(date_time__year=now.year)

    for mon_num in range(1, now.month+1):
        time_dict = {"time": str(datetime(now.year, mon_num, 1))}
        rerr = req_query.filter(date_time__month=mon_num).aggregate(Avg('saving'), Avg(
            'usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_list.append(rerr)

        # print(len(req_list))
        # required_time += timedelta(days=1)
    return req_list
