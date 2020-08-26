from .models import S1902000403
import django_filters


class CustomFilter(django_filters.FilterSet):
    year = django_filters.NumberFilter(
        field_name ='date_time', lookup_expr='year')

    class Meta:
        model = S1902000403
        fields = ['date_time','year']
