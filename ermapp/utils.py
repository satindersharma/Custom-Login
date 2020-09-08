import django
from django.db.models.functions import TruncDay, Now, TruncMonth, TruncYear, TruncHour
from datetime import timedelta, datetime
from calendar import monthrange
from sys import argv
import os
from django.utils import timezone
from django.db.models import Avg, Max, Min, Count, F, ExpressionWrapper, DecimalField
from ermapp.models import S1902000403, DashboardTable
from profiles.models import Setting
'''

timezone.now().weekday() = 0
moday = 0
sunday = 6
mon - sun 0 - 6
sun - sat 6 - 5

            'yesterday': lambda qs, name: qs.filter(**{
            '%s__year' % name: (now() - timedelta(days=1)).year,
            '%s__month' % name: (now() - timedelta(days=1)).month,
            '%s__day' % name: (now() - timedelta(days=1)).day,

'''


def custom_data(Klass=None, r_year=None, r_month=None, r_day=None, r_hour=5):

    now = timezone.now()

    r_day = r_day or now.day
    r_month = r_month or now.month
    r_year = r_year or now.year
    # time_24_hours_ago = timezone.now() - timedelta(days=1)
    # req_query = DashboardTable.objects.filter(date_time__gte=time_24_hours_ago)

    req_query = DashboardTable.objects.filter(
        date_time__year=r_year, date_time__month=r_month, date_time__day=r_day).order_by('date_time')
    # print(req_query[0].value('date_time'))
    # required_time = req_query[0].date_time
    # r_hour = 5
    start_time = req_query[0].date_time.replace(
        hour=r_hour, minute=0, second=0, microsecond=0)
    end_time = req_query[-1].date_time
    print(" new time", required_time)
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


def yesterday_data(r_year=None, r_month=None, r_day=None, r_hour=5):
    print("req hour", r_hour)
    now = timezone.now()

    time_yesterday = now - timedelta(days=1)
    # time_24_hours_ago = timezone.now() - timedelta(days=1)
    # req_query = DashboardTable.objects.filter(date_time__gte=time_24_hours_ago)

    req_query = DashboardTable.objects.filter(date_time__year=time_yesterday.year, date_time__month=time_yesterday.month,
                                              date_time__day=time_yesterday.day, date_time__hour__gte=r_hour).order_by('date_time')
    required_time = req_query[0].date_time.replace(
        minute=0, second=0, microsecond=0)
    print("new time", required_time)
    req_list = []
    required_now = now.replace(hour=r_hour, minute=0, second=0, microsecond=0)
    print('it it true ', required_time < required_now)
    while required_time < required_now:
        time_dict = {"time": str(required_time+timedelta(hours=1))}
        rerr = req_query.filter(date_time__range=[required_time, required_time+timedelta(hours=1)]).aggregate(
            Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_list.append(rerr)
        required_time += timedelta(hours=1)
    return req_list


def today_data(r_year=None, r_month=None, r_day=None, r_hour=5):

    now = timezone.now()
    req_query = DashboardTable.objects.filter(
        date_time__year=now.year, date_time__month=now.month, date_time__day=now.day).order_by('date_time')
    required_time = req_query[0].date_time.replace(
        minute=0, second=0, microsecond=0)
    req_list = []
    required_now = now
    while required_time < required_now:
        time_dict = {"time": str(required_time+timedelta(hours=1))}
        rerr = req_query.filter(date_time__range=[required_time, required_time+timedelta(hours=1)]).aggregate(
            Avg('saving'), Avg('usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_list.append(rerr)
        required_time += timedelta(hours=1)
    return req_list


def last_weekly_data():
    now = timezone.now()

    time_7_days_ago = timezone.now() - timedelta(days=7)
    time_14_day_ago = timezone.now() - timedelta(days=14)
    req_query = DashboardTable.objects.filter(
        date_time__gte=time_14_day_ago, date_time__lte=time_7_days_ago)
    required_time = time_14_day_ago.replace(minute=0, second=0, microsecond=0)
    req_list = []
    required_now = time_7_days_ago.replace(minute=0, second=0, microsecond=0)
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


def last_month_data():
    now = timezone.now()
    # req = (now - timedelta())
    previous_month = (now.replace(day=1) - timedelta(1)).replace(hour=0,
                                                                 minute=0, second=0, microsecond=0)
    print(previous_month)
    print("fdfd", previous_month.year)
    print("fdfd", previous_month.month)
    print("fdfd", previous_month.day)
    req_list = []
    mr = monthrange(previous_month.year, previous_month.month)
    req_query = DashboardTable.objects.filter(
        date_time__year=previous_month.year, date_time__month=previous_month.month)

    for day_num in range(1, mr[1]+1):
        time_dict = {"time": str(
            datetime(previous_month.year, previous_month.month, day_num))}
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


def all_time_data():
    now = timezone.now()
    req_list = []
    # req_query = DashboardTable.objects.all().order_by('date_time')
    all_year = DashboardTable.objects.all().order_by(
        'date_time').dates('date_time', 'year')
    # for tx in all_year:
    #     print("distinct year",tx.year)
    for in_year in all_year:
        # time_dict = {"time": str(datetime(in_year.year, in_year.month, in_year.day))}
        time_dict = {"time": str(in_year)}
        rerr = DashboardTable.objects.filter(date_time__year=in_year.year).aggregate(Avg('saving'), Avg(
            'usage'), Avg('energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        rerr.update(time_dict)
        req_list.append(rerr)

        # print(len(req_list))
        # required_time += timedelta(days=1)
    return req_list
