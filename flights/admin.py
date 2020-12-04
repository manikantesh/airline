from django.contrib import admin
from .models import Flight, Airport

class FlightAdmin(admin.ModelAdmin):
    list_display = ("id", "origin", "destination", "duration")

# Register your models here.
admin.site.register(Flight, FlightAdmin)

# Register your models here.
admin.site.register(Airport)
# Register your models here.

