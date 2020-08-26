from django.contrib import admin

# Register your models here.
from ermapp.models import S1902000403

class ProductAdmin(admin.ModelAdmin):
    # list_display = ['title','description','timestamp']
    pass

admin.site.register(S1902000403,ProductAdmin)