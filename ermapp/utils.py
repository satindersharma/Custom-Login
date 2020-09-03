import django
from django.db.models.functions import TruncDay, Now, TruncMonth, TruncYear, TruncHour
from datetime import timedelta

from sys import argv
import os
from django.utils import timezone
from django.db.models import Avg, Max, Min, Count, F, ExpressionWrapper, DecimalField
from ermapp.models import S1902000403, DashboardTable


def daily_data():
    now = timezone.now()
    time_24_hours_ago = timezone.now() - timedelta(days=1)
    req_query = DashboardTable.objects.filter(date_time__gte = time_24_hours_ago)
    required_time = time_24_hours_ago.replace(minute=0, second=0, microsecond=0)
    req_dict = []
    required_now = now.replace(minute=0, second=0, microsecond=0)
    while required_time < required_now:
        time_dict = {"time": str(required_time+timedelta(hours=1))}
        rerr = req_query.filter(date_time__range = [required_time , required_time+timedelta(hours=1)]).aggregate(Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_dict.append(rerr)
        
        required_time += timedelta(hours=1)
    return req_dict

def weekly_data():
    now = timezone.now()
    time_7_days_ago = timezone.now() - timedelta(days=7)
    req_query = DashboardTable.objects.filter(date_time__gte = time_7_days_ago)
    required_time = time_7_days_ago.replace(minute=0, second=0, microsecond=0)
    req_dict = []
    required_now = now.replace(minute=0, second=0, microsecond=0)
    while required_time < required_now:
        time_dict = {"time": str(required_time+timedelta(hours=1))}
        rerr = req_query.filter(date_time__range = [required_time , required_time+timedelta(hours=1)]).aggregate(Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_dict.append(rerr)
        
        required_time += timedelta(hours=1)
    return req_dict