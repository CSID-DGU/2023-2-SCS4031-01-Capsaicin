from django.contrib import admin
from main.models import BloodPressure, Weight, FoodCategory, Food, Center, Notice, ExerciseCategory
from import_export import resources
from import_export.admin import ImportExportModelAdmin


# Register your models here.
admin.site.register(BloodPressure)
admin.site.register(Weight)
# admin.site.register(FoodCategory)
admin.site.register(Center)
admin.site.register(Notice)
# admin.site.register(ExerciseCategory)
#admin.site.register(Food)

class FoodResource(resources.ModelResource):
    class Meta:
        model = Food
        fields = ('id','foodName', 'calorie', 'natrium', 'category', 'amount', 'foodImgUrl')
        export_order = fields

class FoodAdmin(ImportExportModelAdmin):
    fields = ('foodName', 'calorie', 'natrium', 'category', 'amount', 'foodImgUrl')
    list_display = ('id','foodName', 'calorie', 'natrium', 'category', 'amount', 'foodImgUrl')
    resource_class = FoodResource

class FoodCategoryResource(resources.ModelResource):
    class Meta:
        model = FoodCategory
        fields = ('name','imgUrl')
        export_order = fields

class FoodCategoryAdmin(ImportExportModelAdmin):
    fields = ('name','imgUrl')
    list_display = ('id','name','imgUrl')
    resource_class = FoodCategoryResource

class ExerciseResource(resources.ModelResource):
    class Meta:
        model = ExerciseCategory
        fields = ('id', 'name', 'imgUrl', 'calorie')
        export_order = fields

class ExerciseAdmin(ImportExportModelAdmin):
    fields = ('name', 'imgUrl', 'calorie')
    list_display = ('id', 'name', 'imgUrl', 'calorie')
    resource_class = ExerciseResource


admin.site.register(Food, FoodAdmin)
admin.site.register(ExerciseCategory, ExerciseAdmin)
admin.site.register(FoodCategory, FoodCategoryAdmin)