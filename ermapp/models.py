from django.db import models

# Create your models here.


class S1902000403(models.Model):
    # Field name made lowercase.
    srl = models.AutoField(db_column='SRL', primary_key=True)
    # Field name made lowercase.
    date_time = models.DateTimeField(db_column='DATE_TIME')
    # Field name made lowercase.
    volt1 = models.SmallIntegerField(db_column='Volt1', blank=True, null=True)
    # Field name made lowercase.
    amp1 = models.SmallIntegerField(db_column='Amp1', blank=True, null=True)
    # Field name made lowercase.
    kw1 = models.SmallIntegerField(db_column='Kw1', blank=True, null=True)
    # Field name made lowercase.
    pf1 = models.SmallIntegerField(db_column='PF1', blank=True, null=True)
    # Field name made lowercase.
    kvar1 = models.SmallIntegerField(db_column='KVAr1', blank=True, null=True)
    # Field name made lowercase.
    kva1 = models.SmallIntegerField(db_column='KVA1', blank=True, null=True)
    # Field name made lowercase.
    clo1 = models.IntegerField(db_column='CLO1', blank=True, null=True)
    # Field name made lowercase.
    rct1 = models.IntegerField(db_column='RCT1', blank=True, null=True)
    # Field name made lowercase.
    volt2 = models.SmallIntegerField(db_column='Volt2', blank=True, null=True)
    # Field name made lowercase.
    amp2 = models.SmallIntegerField(db_column='Amp2', blank=True, null=True)
    # Field name made lowercase.
    kw2 = models.SmallIntegerField(db_column='Kw2', blank=True, null=True)
    # Field name made lowercase.
    pf2 = models.SmallIntegerField(db_column='PF2', blank=True, null=True)
    # Field name made lowercase.
    kvar2 = models.SmallIntegerField(db_column='KVAr2', blank=True, null=True)
    # Field name made lowercase.
    kva2 = models.SmallIntegerField(db_column='KVA2', blank=True, null=True)
    # Field name made lowercase.
    clo2 = models.IntegerField(db_column='CLO2', blank=True, null=True)
    # Field name made lowercase.
    rct2 = models.IntegerField(db_column='RCT2', blank=True, null=True)
    # Field name made lowercase.
    volt3 = models.SmallIntegerField(db_column='Volt3', blank=True, null=True)
    # Field name made lowercase.
    amp3 = models.SmallIntegerField(db_column='Amp3', blank=True, null=True)
    # Field name made lowercase.
    kw3 = models.SmallIntegerField(db_column='Kw3', blank=True, null=True)
    # Field name made lowercase.
    pf3 = models.SmallIntegerField(db_column='PF3', blank=True, null=True)
    # Field name made lowercase.
    kvar3 = models.SmallIntegerField(db_column='KVAr3', blank=True, null=True)
    # Field name made lowercase.
    kva3 = models.SmallIntegerField(db_column='KVA3', blank=True, null=True)
    # Field name made lowercase.
    clo3 = models.IntegerField(db_column='CLO3', blank=True, null=True)
    # Field name made lowercase.
    rct3 = models.IntegerField(db_column='RCT3', blank=True, null=True)
    # Field name made lowercase.
    cap1 = models.IntegerField(db_column='CAP1', blank=True, null=True)
    # Field name made lowercase.
    cap2 = models.IntegerField(db_column='CAP2', blank=True, null=True)
    # Field name made lowercase.
    cap3 = models.IntegerField(db_column='CAP3', blank=True, null=True)
    # Field name made lowercase.
    cap4 = models.IntegerField(db_column='CAP4', blank=True, null=True)
    # Field name made lowercase.
    cap5 = models.IntegerField(db_column='CAP5', blank=True, null=True)
    # Field name made lowercase.
    cap6 = models.IntegerField(db_column='CAP6', blank=True, null=True)
    # Field name made lowercase.
    cap7 = models.IntegerField(db_column='CAP7', blank=True, null=True)
    # Field name made lowercase.
    cap8 = models.IntegerField(db_column='CAP8', blank=True, null=True)
    # Field name made lowercase.
    cap9 = models.IntegerField(db_column='CAP9', blank=True, null=True)
    # Field name made lowercase.
    cap10 = models.IntegerField(db_column='CAP10', blank=True, null=True)
    # Field name made lowercase.
    cap11 = models.IntegerField(db_column='CAP11', blank=True, null=True)
    # Field name made lowercase.
    cap12 = models.IntegerField(db_column='CAP12', blank=True, null=True)

    # def __str__(self):
    #     return self.srl

    class Meta:
        db_table = 'S_19020004_03'
        get_latest_by = 'srl'
        ordering = ['-date_time']


class DashboardTable(models.Model):
    date_time = models.DateTimeField()
    saving = models.IntegerField()
    usage = models.IntegerField()
    energy = models.IntegerField()
    power_factor = models.IntegerField()
    thd = models.IntegerField()
    tdi = models.IntegerField()

    class Meta:
        get_latest_by = 'id'
        ordering = ['-date_time']
