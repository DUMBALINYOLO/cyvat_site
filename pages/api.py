from rest_framework import viewsets, pagination
from django.db.models import Q
from pages.models import (
						Faq,
						Principle,
						Portifolio,
						Galery,
						Personel,
						BoardOfDirector,
						Partner,
						Post,
						Project,
						TargetedBeneficiary,
						ProjectObjective,
						Province,
						District,
						Ward,
						Image

					)
from .serializers import (
						FaqSerializer,
						PrincipleSerializer,
						PortifolioSerializer,
						GallerySerializer,
						GalleryCreateUpdateSerializer,
						PersonelSerializer,
						BoardOfDirectorSerializer,
						PartnerSerializer,
						PostSerializer,
						ProjectCreateUpdateSerializer,
						ProjectListSerializer,
						ProjectDetailSerializer,
						TargetedBeneficiarySerializer,
						ProvinceSerializer,
						ProvinceDetailSerializer,
						DistrictDetailSerializer,
						DistrictListSerializer,
						DistrictCreateUpdateSerializer,
						WardSerializer,
						WardCreateUpdateSerializer,
						ProjectObjectiveSerializer,
						ImageCreateUpdateSerializer,
						ImageSerializer
					)

class ProjectPaginator(pagination.PageNumberPagination):
	page_size = 3
	page_size_query_param = 'page_size'
	max_page_size = '100'


class FaqViewSet(viewsets.ModelViewSet):

	queryset = Faq.objects.all().order_by('id')
	serializer_class = FaqSerializer



class PrincipleViewSet(viewsets.ModelViewSet):

	queryset = Principle.objects.all().order_by('id')
	serializer_class = PrincipleSerializer


class PortifolioViewSet(viewsets.ModelViewSet):

	queryset = Portifolio.objects.all().order_by('id')
	serializer_class = PortifolioSerializer


class GaleryViewSet(viewsets.ModelViewSet):

	queryset = Galery.objects.all().order_by('id')

	def get_serializer_class(self):
		if self.action in ['create', 'put', 'patch']:
			return GalleryCreateUpdateSerializer
		return GallerySerializer


class PersonelViewSet(viewsets.ModelViewSet):

	queryset = Personel.objects.all().order_by('id')
	serializer_class = PersonelSerializer


class BoardOfDirectorViewSet(viewsets.ModelViewSet):

	queryset = BoardOfDirector.objects.all().order_by('id')
	serializer_class = BoardOfDirectorSerializer


class PartnerViewSet(viewsets.ModelViewSet):

	queryset = Partner.objects.all().order_by('id')
	serializer_class = PartnerSerializer


class PostViewSet(viewsets.ModelViewSet):
	queryset = Post.objects.all().order_by('id')
	serializer_class = PostSerializer
	pagination_class = ProjectPaginator



class OngoingProjectViewSet(viewsets.ModelViewSet):
	pagination_class = ProjectPaginator

	def get_serializer_class(self):
		if self.action in ['create', 'put', 'patch']:
			return ProjectCreateUpdateSerializer
		elif self.action == 'retrieve':
			return ProjectDetailSerializer
		return ProjectListSerializer



	def get_queryset(self, *args, **kwargs):
		queryset = Project.objects.prefetch_related(
											'portifolios',
											'project_areas',
											'beneficiaries',
											'partners'
										).filter(
										Q(status__in=[
												'ongoing',
												'suspended',
												'not',
											])

									).order_by('id')
		return queryset 



class FinishedProjectViewSet(viewsets.ModelViewSet):
	pagination_class = ProjectPaginator

	def get_serializer_class(self):
		if self.action in ['create', 'PUT', 'PATCH', 'UPDATE']:
			return ProjectCreateUpdateSerializer
		elif self.action == 'retrieve':
			return ProjectDetailSerializer
		return ProjectListSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = Project.objects.prefetch_related(
											'portifolios',
											'project_areas',
											'beneficiaries',
											'partners'
										).filter(
										~Q(status__in=[
												'ongoing',
												'suspended',
												'not',
											])

									).order_by('id')
		return queryset 

			

class TargetedBeneficiaryViewSet(viewsets.ModelViewSet):

	queryset = TargetedBeneficiary.objects.all().order_by('id')
	serializer_class = TargetedBeneficiarySerializer



class ProvinceViewSet(viewsets.ModelViewSet):

	queryset = Province.objects.all().order_by('id')

	def get_serializer_class(self):
		if self.action == 'retrieve':
			return ProvinceDetailSerializer
		return ProvinceSerializer


class DistrictViewSet(viewsets.ModelViewSet):

	queryset = District.objects.all().order_by('id')

	def get_serializer_class(self):
		if self.action in ['create', 'put', 'patch']:
			return DistrictCreateUpdateSerializer
		elif self.action == 'retrieve':
			return DistrictDetailSerializer
		return DistrictListSerializer



class WardViewSet(viewsets.ModelViewSet):

	queryset = Ward.objects.all().order_by('id')

	def get_serializer_class(self):
		if self.action in ['create', 'put', 'patch']:
			return WardCreateUpdateSerializer
		return WardSerializer




class ProjectObjectiveViewSet(viewsets.ModelViewSet):

	queryset = ProjectObjective.objects.all().order_by('id')
	serializer_class = ProjectObjectiveSerializer


class ImageViewSet(viewsets.ModelViewSet):

	queryset = Image.objects.all().order_by('id')

	def get_serializer_class(self):
		if self.action in ['create', 'put', 'patch']:
			return ImageCreateUpdateSerializer
		return ImageSerializer
	
	















