from rest_framework.serializers import ModelSerializer
from .models import S1902000403, DashboardTable


class DashboardTableSerializer(ModelSerializer):

    class Meta:
        model = DashboardTable
        fields = '__all__'

class ProductSerializer(ModelSerializer):

    class Meta:
        model = S1902000403
        fields = '__all__'
        # exclude = ['srl','date_time']


class ExProductSerializer(ModelSerializer):

    class Meta:
        model = S1902000403
        # fields = '__all__'
        exclude = ['srl', 'date_time']
