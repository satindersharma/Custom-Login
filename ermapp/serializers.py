from rest_framework.serializers import ModelSerializer
from .models import S1902000403


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
