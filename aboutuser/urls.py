from rest_framework import routers

from .api import PersonViewSet


router = routers.DefaultRouter()
router.register('Person', PersonViewSet, 'aboutuser')

urlpatterns = router.urls
