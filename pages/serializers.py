from rest_framework import serializers
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
						Image,

					)


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class FaqSerializer(serializers.ModelSerializer):

	class Meta:
		model = Faq
		fields = ['id', 'question', 'answer']


class PrincipleSerializer(serializers.ModelSerializer):

	class Meta:
		model = Principle
		fields = ['id', 'name', 'description']



class PortifolioSerializer(serializers.ModelSerializer):

	class Meta:
		model = Portifolio
		fields = ['id', 'name', 'description']


class ImageCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Image
		fields = ['galery', 'image']


class ImageSerializer(serializers.ModelSerializer):
	galery = StringSerializer()

	class Meta:
		model = Image
		fields = ['galery', 'image']




class GallerySerializer(serializers.ModelSerializer):
	images = ImageSerializer(many=True, read_only=True)
	
	class Meta:
		model = Galery
		fields = ['id', 'name', 'images', 'project']


class GalleryCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Galery
		fields = ['name', 'project']


class PersonelSerializer(serializers.ModelSerializer):
	

	class Meta:
		model = Personel
		fields = ['id', 'name', 'position', 'image']



class BoardOfDirectorSerializer(serializers.ModelSerializer):
	

	class Meta:
		model = BoardOfDirector
		fields = ['id', 'name', 'position', 'image']



class PartnerSerializer(serializers.ModelSerializer):
	

	class Meta:
		model = Partner
		fields = ['id', 'name', 'image']


		
class PostSerializer(serializers.ModelSerializer):


	class Meta:
		model = Post
		fields = [
			'id', 
			'title', 
			'content', 
			'published_date',
			'image',
			'image_1',
			'image_2',
			'image_3',
			'image_4',
			'image_5',
			'image_6',
			'image_7',
			'image_8',
			'image_9',

			]








class ProjectDetailSerializer(serializers.ModelSerializer):
	portifolios = serializers.StringRelatedField(many=True)
	objectives = serializers.StringRelatedField(many=True)
	project_areas = serializers.StringRelatedField(many=True)
	beneficiaries = serializers.StringRelatedField(many=True)
	partners = serializers.StringRelatedField(many=True)
	status = serializers.SerializerMethodField()
	duration = serializers.SerializerMethodField()

	



	class Meta:
		model = Project
		fields = [
			'id', 
			'name', 
			'status', 
			'start_date', 
			'end_date', 
			'description', 
			'image',
			'portifolios',
			'duration',
			'objectives',
			'project_areas',
			'beneficiary_population',
			'beneficiaries',
			'partners',
			'image_1',
			'image_2',
			'image_3',
			'image_4',
			'image_5',
			'image_6',
			'image_7',
			'image_8',
			'image_9',
			# 'image_10',
		]

	def get_status(self, obj):
		return obj.get_status_display()

	def get_duration(self, obj):
		return obj.get_duration_display()


class ProjectListSerializer(serializers.ModelSerializer):
	project_areas = serializers.StringRelatedField(many=True)
	status = serializers.SerializerMethodField()
	duration = serializers.SerializerMethodField()
	
	



	class Meta:
		model = Project
		fields = [
			'id', 
			'name', 
			'status', 
			'start_date', 
			'end_date', 
			'image',
			'duration',
			'project_areas',
			'beneficiary_population',
		]

	def get_status(self, obj):
		return obj.get_status_display()

	def get_duration(self, obj):
		return obj.get_duration_display()



class ProjectCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Project
		fields = [
			'id', 
			'name', 
			'status', 
			'start_date', 
			'end_date', 
			'description', 
			'image',
			'portifolios',
			'duration',
			'objectives',
			'project_areas',
			'beneficiary_population',
			'beneficiaries',
			'partners',
			'image_1',
			'image_2',
			'image_3',
			'image_4',
			'image_5',
			'image_6',
			'image_7',
			'image_8',
			'image_9',
			'image_10', 

		]




class ProjectObjectiveSerializer(serializers.ModelSerializer):


	class Meta:
		model = ProjectObjective
		fields = ['id', 'title', 'description']





class WardCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
			
		fields = ['id', 'name', 'district']

		model = Ward


class WardSerializer(serializers.ModelSerializer):
	district = StringSerializer()

	class Meta:
			
		fields = ['id', 'name', 'district']

		model = Ward




class DistrictCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
			
		fields = ['id', 'name', 'province']

		model = District


class DistrictListSerializer(serializers.ModelSerializer):
	province = StringSerializer()


	class Meta:
			
		fields = ['id', 'name', 'province']

		model = District


class DistrictDetailSerializer(serializers.ModelSerializer):
	wards = WardSerializer(many=True)
	province = StringSerializer()


	class Meta:
			
		fields = ['id', 'name', 'province', 'wards']

		model = District



class ProvinceDetailSerializer(serializers.ModelSerializer):
	districts = DistrictListSerializer(many=True)

	class Meta:

		fields = ['id', 'name', 'districts']
		model = Province


class ProvinceSerializer(serializers.ModelSerializer):
	

	class Meta:

		fields = ['id', 'name']
		model = Province




class TargetedBeneficiarySerializer(serializers.ModelSerializer):

	class Meta:
		model = TargetedBeneficiary
		fields = ['name']














