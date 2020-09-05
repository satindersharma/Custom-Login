# Generated by Django 3.1 on 2020-09-05 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='setting',
            name='default_Week_start_day',
            field=models.CharField(blank=True, choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], default=1, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='setting',
            name='default_hour',
            field=models.CharField(blank=True, choices=[('12:00 AM', '12:00 AM'), ('01:00 AM', '01:00 AM'), ('02:00 AM', '02:00 AM'), ('03:00 AM', '03:00 AM'), ('04:00 AM', '04:00 AM'), ('05:00 AM', '05:00 AM'), ('06:00 AM', '06:00 AM'), ('07:00 AM', '07:00 AM'), ('08:00 AM', '08:00 AM'), ('09:00 AM', '09:00 AM'), ('10:00 AM', '10:00 AM'), ('11:00 AM', '11:00 AM'), ('12:00 PM', '12:00 PM'), ('01:00 PM', '01:00 PM'), ('02:00 PM', '02:00 PM'), ('03:00 PM', '03:00 PM'), ('04:00 PM', '04:00 PM'), ('05:00 PM', '05:00 PM'), ('06:00 PM', '06:00 PM'), ('07:00 PM', '07:00 PM'), ('08:00 PM', '08:00 PM'), ('09:00 PM', '09:00 PM'), ('10:00 PM', '10:00 PM'), ('11:00 PM', '11:00 PM')], default='05:00 AM', max_length=8, null=True),
        ),
        migrations.AlterField(
            model_name='setting',
            name='default_month',
            field=models.CharField(blank=True, choices=[(1, 'January'), (2, 'February'), (3, 'March'), (4, 'April'), (5, 'May'), (6, 'June'), (7, 'July'), (8, 'August'), (9, 'September'), (10, 'October'), (11, 'November'), (12, 'December')], default=1, max_length=2, null=True),
        ),
    ]
