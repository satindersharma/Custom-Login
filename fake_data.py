import os
import django
from faker import Faker
from django.utils import timezone
from datetime import timedelta
import warnings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CelecUserProject.settings')
django.setup()
# now = timezone.now()
# one_day_ago = timezone.now() - timedelta(days=1)
# print(now)
# print(one_day_ago)
from ermapp.models import DashboardTable
data = DashboardTable.objects.all()[:50]
for i in data:
    f = Faker('en_US')
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        i.date_time = f.past_datetime(start_date='-2d', tzinfo=None) # return one day  ago fake data
        # i.date_time = f.date_time_this_century(before_now=True, after_now=False, tzinfo=None)
        i.save()