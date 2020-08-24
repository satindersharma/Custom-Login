from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext, gettext_lazy as _


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username', 'email',  'is_staff',)
    # exclude = ('first_name', 'date_joined', 'last_name')
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('name', 'email',)}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        (_('Important dates'), {'fields': ('last_login',)}),
    )
# admin.site.register(Department)
# # admin.site.register(AdminProduction)
# admin.site.register(Role, RoleAdmin)




admin.site.register(CustomUser, CustomUserAdmin)