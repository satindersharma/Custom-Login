from .models import S1902000403, DashboardTable
import django_filters


'''


2016-07-01
2020-07-01

, empty_label='choose any date'

'''


class DashboardTableCustomFilter(django_filters.FilterSet):
    day = django_filters.NumberFilter(
        field_name='date_time', lookup_expr='day', label='enter day')
    week = django_filters.NumberFilter(
        field_name='date_time', lookup_expr='week', label='enter week')
    month = django_filters.NumberFilter(
        field_name='date_time', lookup_expr='month', label='enter month')
    year = django_filters.NumberFilter(
        field_name='date_time', lookup_expr='year', label='enter year')
    date_filter = django_filters.DateRangeFilter(
        field_name='date_time', label='date choice', empty_label='choose range')

    class Meta:
        model = DashboardTable
        fields = ['day', 'week', 'month', 'year']


class CustomFilter(django_filters.FilterSet):
    day = django_filters.NumberFilter(
        field_name='date_time', lookup_expr='day', label='enter day')
    week = django_filters.NumberFilter(
        field_name='date_time', lookup_expr='week', label='enter week')
    month = django_filters.NumberFilter(
        field_name='date_time', lookup_expr='month', label='enter month')
    year = django_filters.NumberFilter(
        field_name='date_time', lookup_expr='year', label='enter year')
    date_range = django_filters.DateFromToRangeFilter(
        field_name='date_time', label='enter date range')
    date_filter = django_filters.DateRangeFilter(
        field_name='date_time', label='date choice', empty_label='choose range')

    class Meta:
        model = S1902000403
        fields = ['day', 'week', 'month', 'year']
        # fields = '__all__'
