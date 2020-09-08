from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.edit import CreateView, FormView, View
from django.http import (Http404, HttpResponse, HttpResponseRedirect,
                         JsonResponse)
from django.db.models import Avg
# Create your views here.
# pip install --only-binary :all: mysqlclient
# S1902000403
# python manage.py dumpdata ConnectWithMYSQL.S1902000403 --indent 4 > fixtures/table_data.json
# python manage.py loaddata fixtures/table_data.json --app connectwithserver.S1902000403
# python manage.py dumpdata ConnectWithMYSQL.S1902000403 --indent 4 > table_data.json
# after dowloading json  replace the model identifier in json file
# python manage.py loaddata table_data.json --app ermapp.S1902000403

# i made a copyp of data after change
# python manage.py dumpdata ermapp.S1902000403 --indent 4 > changed_data.json
from rest_framework.views import APIView
from django.db.models import Avg, Max, Min, Count
from django_filters.rest_framework import DjangoFilterBackend
from .models import S1902000403, DashboardTable
from ermapp.serializers import ProductSerializer, ExProductSerializer, DashboardTableSerializer, DashSerializer
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveAPIView
from django.views.generic import View
from django.shortcuts import get_object_or_404
from .filters import CustomFilter, DashboardTableCustomFilter
from rest_framework.permissions import AllowAny
from rest_framework.renderers import JSONRenderer
from django.http import JsonResponse
from .utils import today_data, yesterday_data, weekly_data, monthly_data, yearly_data, last_weekly_data, last_month_data, all_time_data
from profiles.models import Setting


class Home(TemplateView):
    template_name = "home.html"


class ProAnotateAPIView(APIView):
    def get(self, request, format=None):
        qs = S1902000403.objects.annotate()
        serializer = ProductSerializer(qs)
        # print(serializer.data.get('id'))
        return Response(serializer.data)


class ExProductLastAPIView(APIView):
    def get(self, request, format=None):
        qs = S1902000403.objects.latest()
        serializer = ExProductSerializer(qs)
        # print(serializer.data.get('id'))
        return Response(serializer.data)


class DashLastAPIView(APIView):
    def get(self, request, format=None):
        qs = DashboardTable.objects.latest()
        serializer = DashSerializer(qs)
        # print(serializer.data.get('id'))
        return Response(serializer.data)


class ProductLastAPIView(APIView):
    def get(self, request, format=None):
        qs = S1902000403.objects.latest()
        serializer = ProductSerializer(qs)
        # print(serializer.data.get('id'))
        return Response(serializer.data)


class DashLilstAPIView(ListAPIView):
    queryset = DashboardTable.objects.all().order_by("date_time")
    serializer_class = DashboardTableSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = DashboardTableCustomFilter
    filterset_fields = ['date_time']
    # ordering_fields = ['date_time']
    # filterset_class = CustomFilter
    ordering = ['date_time']

    def filter_queryset(self, queryset):
        filter_backends = [DjangoFilterBackend]

        if 'geo_route' in self.request.query_params:
            filter_backends = [GeoRouteFilter, CategoryFilter]
        elif 'geo_point' in self.request.query_params:
            filter_backends = [GeoPointFilter, CategoryFilter]

        for backend in list(filter_backends):
            queryset = backend().filter_queryset(self.request, queryset, view=self)
        return queryset


class ProductLilstAPIView(ListAPIView):
    queryset = S1902000403.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = CustomFilter
    filterset_fields = ['date_time', 'srl']
    # ordering_fields = ['date_time', 'srl']
    filterset_class = CustomFilter
    ordering = ['date_time']


class ProductLilstJsonAPIView(ListAPIView):
    queryset = S1902000403.objects.all()
    serializer_class = ProductSerializer
    # filter_backends = [DjangoFilterBackend]
    filterset_class = CustomFilter
    filterset_fields = ['date_time', 'srl']
    # ordering_fields = ['date_time', 'srl']
    pagination_class = None
    filterset_class = CustomFilter
    permission_classes = [AllowAny]
    renderer_classes = [JSONRenderer]
    ordering = ['date_time']

# class ProductLilstAPIView(ListAPIView):
#     queryset = S1902000403.objects.all()
#     # Entry.objects.filter(pub_date__year=2010)
#     serializer_class = ProductSerializer
#     ordering = ['date_time']


class ProductRetriveAPIView(RetrieveAPIView):
    queryset = S1902000403.objects.all()
    # print(Product.objects)
    serializer_class = ProductSerializer
    # lookup_field = 'id'
    # def get_queryset(self):
    #     qs = Product.objects.latest()
    #     return qs


class HomeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'charts.html', {"customers": 10})


class SeparateChartView(TemplateView):
    template_name = 'Separate-chart.html'


class RealtimeChartView(TemplateView):
    template_name = 'Realtime-chart.html'


class DashChartAPIView(ListAPIView):
    # lookup_field = 'id'
    queryset = DashboardTable.objects.all().order_by("date_time")
    serializer_class = DashboardTableSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = DashboardTableCustomFilter
    filterset_fields = ['date_time']
    # ordering_fields = ['date_time']
    # filterset_class = CustomFilter
    ordering = ['date_time']

    def get(self, request, format=None):

        r_hour = request.GET.get('hour')
        r_day = request.GET.get('day')
        r_week = request.GET.get('week')
        r_month = request.GET.get('month')
        r_year = request.GET.get('year')
        r_date_range_after = request.GET.get('date_range_after')
        r_date_range_before = request.GET.get('date_range_before')
        r_date_filter = request.GET.get('date_filter')
        print(r_hour)
        print(r_day)
        print(r_week)
        print(r_month)
        print(r_year)
        print(r_date_range_after)
        print(r_date_range_before)
        print(r_date_filter)
        # req_time = Setting.objects.get(user=request.user)
        # print(req_time.default_hour)
        # print(req_time.default_Week_start_day)

        # queryset = DashboardTable.objects.all()
        filter_backends = [DjangoFilterBackend]

        if 'geo_route' in self.request.query_params:
            filter_backends = [GeoRouteFilter, DjangoFilterBackend]
        elif 'geo_point' in self.request.query_params:
            filter_backends = [GeoPointFilter, DjangoFilterBackend]

        for backend in list(filter_backends):
            queryset = backend().filter_queryset(self.request, self.queryset, view=self)

        print("lenght of qury", queryset[0].date_time)
        print("lenght of qury", len(queryset))
        # ‘%d %H:%M:%S.%f’
        queryset = queryset.aggregate(Avg('saving'), Avg('usage'), Avg(
            'energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
        data = {'daily': 'daily_data()',
                'weekly': 'weekly_data()',
                'monthly': 'monthly_data()',
                'yearly': 'yearly_data()'
                }
        queryset = data
        return Response(data)


def get_data(request, *args, **kwargs):
    # dd = request.GET.get('q')
    # ddd = request.GET.get('p')
    # print(dd)
    # print(ddd)
    # k = DjangoFilterBackend.filter_queryset(request=
    #     request.GET, queryset=DashboardTable.objects.all(),view=get_data)
    # k = DashboardTableCustomFilter(
    #     data=request.GET, queryset=DashboardTable.objects.all())
    # # dash/?hour=&day=&week=&month=&year=&date_range_after=&date_range_before=&date_filter=today
    # print("this is k ", k.queryset)
    # print(len(k.queryset))
    # re_p = k.queryset.aggregate(Avg('saving'), Avg('usage'), Avg(
    #     'energy'), Avg('power_factor'), Avg('thd'), Avg('tdi'))
    # print("this is k ", re_p)

    r_day = request.GET.get('day')
    r_week = request.GET.get('week')
    r_month = request.GET.get('month')
    r_year = request.GET.get('year')
    r_date_range_after = request.GET.get('date_range_after')
    r_date_range_before = request.GET.get('date_range_before')
    r_date_filter = request.GET.get('date_filter')
    print(r_day)
    print(r_week)
    print(r_month)
    print(r_year)
    print(r_date_range_after)
    print(r_date_range_before)
    print(r_date_filter)

    # print(dir(DashboardTableCustomFilter()))
    # req_time = Setting.objects.get_or_create(user=request.user)
    # print(req_time.default_hour)
    # print(req_time.default_Week_start_day)
    # print(req_time.default_month)
    # print(req_time.default_year)
    # default_hour = None
    # default_Week_start_day = None
    try:
        default_hour = Setting.objects.get(user=request.user).default_hour
        default_Week_start_day = Setting.objects.get(
            user=request.user).default_Week_start_day
            
        data = {'today': today_data(r_hour=default_hour-1),
                'yesterday': yesterday_data(r_hour=default_hour-1),
                'this-week': weekly_data(),
                'last-week': last_weekly_data(),
                'this-month': monthly_data(),
                'last-month': last_month_data(),
                'all-time': all_time_data()
                }

    except:
        data = {'today': today_data(),
                'yesterday': yesterday_data(),
                'this-week': weekly_data(),
                'last-week': last_weekly_data(),
                'this-month': monthly_data(),
                'last-month': last_month_data(),
                'all-time': all_time_data()
                }

    return JsonResponse(data)  # http response


class ChartData(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        # qs_count = User.objects.all().count()
        qs_count = 1
        labels = ["Users", "Blue", "Yellow", "Green", "Purple", "Orange"]
        default_items = [qs_count, 23, 2, 3, 12, 2]
        data = {
            "labels": labels,
            "default": default_items,
        }
        return Response(data)


class ProductLatestAPIView(APIView):
    pass
    # queryset = S1902000403.objects.latest('srl')
    # serializer_class = ProductSerializer
    # lookup_field = 'srl'

# class PollDetail(APIView):
#     def get(self, request, pk):
#         poll = get_object_or_404(Poll, pk=pk)
#         data = PollSerializer(poll).data
#         return Response(data)


'''
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "srl": 59755,
    "date_time": "2020-08-02T14:37:02Z",
    "volt1": 230,
    "amp1": 500,
    "kw1": 100,
    "pf1": -400,
    "kvar1": 300,
    "kva1": 900,
    "clo1": 1,
    "rct1": 1,
    "volt2": 231,
    "amp2": 501,
    "kw2": 101,
    "pf2": -401,
    "kvar2": 301,
    "kva2": 901,
    "clo2": 1,
    "rct2": 1,
    "volt3": 232,
    "amp3": 503,
    "kw3": 102,
    "pf3": -402,
    "kvar3": 302,
    "kva3": 902,
    "clo3": 1,
    "rct3": 1,
    "cap1": 0,
    "cap2": 0,
    "cap3": 0,
    "cap4": 0,
    "cap5": 0,
    "cap6": 0,
    "cap7": 0,
    "cap8": 0,
    "cap9": 0,
    "cap10": 0,
    "cap11": 0,
    "cap12": 0
}
'''
