from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination


class Mypagination(PageNumberPagination):
    # page_size = 5
    page_query_param = 'mypage'
    page_size_query_param='num'
    max_page_size = 15
