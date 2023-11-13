from django.contrib import admin
from main.models import BloodPressure, Weight, FoodCategory, Food, Center, Notice
from import_export import resources
from import_export.admin import ImportExportModelAdmin


# Register your models here.
admin.site.register(BloodPressure)
admin.site.register(Weight)
admin.site.register(FoodCategory)
admin.site.register(Center)
admin.site.register(Notice)
#admin.site.register(Food)

class FoodResource(resources.ModelResource):
    class Meta:
        model = Food
        fields = ('id','foodName', 'calorie', 'natrium', 'category', 'amount')
        export_order = fields

class FoodAdmin(ImportExportModelAdmin):
    fields = ('foodName', 'calorie', 'natrium', 'category', 'amount')
    list_display = ('id','foodName', 'calorie', 'natrium', 'category', 'amount')
    resource_class = FoodResource


admin.site.register(Food, FoodAdmin)