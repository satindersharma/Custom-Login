from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class CustomUser(AbstractUser):
    
    # email_password = .CharField(db_column='department_name', max_length=45)
    user_id = models.SmallAutoField(primary_key=True)
    name = models.CharField(
        db_column='name', max_length=45, blank=True, null=True)
    ph_1 = models.PositiveIntegerField(
        db_column='ph_1', blank=True, null=True)
    ph_2 = models.PositiveIntegerField(
        db_column='ph_2', blank=True, null=True)
    user_info_id = models.PositiveSmallIntegerField(
        db_column='user_info_id', blank=True, null=True)
    department = models.CharField(
        db_column='department', max_length=45, blank=True, null=True)
    role = models.CharField(
        db_column='role', max_length=45, blank=True, null=True)
    # department = models.OneToOneField('Department',
    #     db_column='department', max_length=45, on_delete=models.CASCADE)
    # role = models.ManyToManyField('Role',db_column='role')
    # # department = models.OneToOneField(Department, on_delete=models.CASCADE, blank=True, null=True)
    # # role = models.ManyToManyField(Role)

    date_joined = None
    first_name = None
    last_name = None

    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        db_table = 'user'


# class Department(models.Model):
#     # id = models.PositiveSmallIntegerField(primary_key=True,editable=False)
#     id = models.SmallAutoField(primary_key=True)
#     department_name = models.CharField(
#         db_column='department_name', max_length=45, unique=True)
#     # user = models.OneToOneField(
#     #     'CustomUser', on_delete=models.CASCADE, default=1)

#     def __str__(self):
#         return self.department_name

#     class Meta:
#         db_table = "department"


# class Role(models.Model):
#     id = models.SmallAutoField(primary_key=True)
#     department = models.ForeignKey(Department, on_delete=models.CASCADE)
#     user = models.ManyToManyField(CustomUser, through='UserRole')
#     # user = models.ManyToManyField('CustomUser')
#     role_name = models.CharField(db_column='role_name', max_length=45)

#     def __str__(self):
#         return self.role_name

#     class Meta:
#         db_table = "role"


# class UserRole(models.Model):
#     id = models.SmallAutoField(primary_key=True)
#     role = models.ForeignKey(Role, on_delete=models.CASCADE)
#     user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    
#     class Meta:
#         db_table = "user_role"