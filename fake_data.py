from faker import Faker

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CustomUser.settings')
# django.setup()
from ermapp.models import DashboardTable
data = DashboardTable.objects.all()
for i in data:
    f = Faker('en_US')
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        i.date_time = f.date_time_this_century(before_now=True, after_now=False, tzinfo=None)
        i.save()