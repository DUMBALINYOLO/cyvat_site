from rest_framework import routers
from .api import (
		FaqViewSet,
		PrincipleViewSet,
		PortifolioViewSet,
		GaleryViewSet,
		PersonelViewSet,
		BoardOfDirectorViewSet,
		PartnerViewSet,
		PostViewSet,
		FinishedProjectViewSet,
		OngoingProjectViewSet,
		ProjectObjectiveViewSet,
		WardViewSet,
		DistrictViewSet,
		ProvinceViewSet,
		TargetedBeneficiaryViewSet,
		ImageViewSet,

	)



router = routers.DefaultRouter()

router.register(r'faqs', FaqViewSet)
router.register(r'principles', PrincipleViewSet)
router.register(r'portfolios', PortifolioViewSet)
router.register(r'galleries', GaleryViewSet)
router.register(r'personels', PersonelViewSet)
router.register(r'board-members', BoardOfDirectorViewSet)
router.register(r'partners', PartnerViewSet)
router.register(r'newsletters', PostViewSet)
router.register(r'ongoing-projects', OngoingProjectViewSet, basename='ongoing-projects')
router.register(r'finished-projects', FinishedProjectViewSet, basename='finished-projects')
router.register(r'project-objectives', ProjectObjectiveViewSet)
router.register(r'wards', WardViewSet)
router.register(r'images', ImageViewSet)
router.register(r'districts', DistrictViewSet)
router.register(r'provinces', ProvinceViewSet)
router.register(r'targeted-beneficiaries', TargetedBeneficiaryViewSet)

urlpatterns = router.urls

