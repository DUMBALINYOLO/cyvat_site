from django.db import models



PROJECT_STATUS_CHOICES = [
			('ongoing', 'ONGOING'),
			('finished', 'FINISHED'),
			('not', 'NOT COMMERNCED'), 
			('suspended', 'SUSPENDED')

		]



PROJECT_DURATION_CHOICES = [
			('1 month', 'ONE MONTH'),
			('2 months', 'TWO MONTHS'),
			('3 months', 'THREE MONTHS'),
			('4 months', 'FOUR MONTHS'),
			('5 months', 'FIVE MONTHS'),
			('6 months', 'SIX MONTHS'),
			('7 months', 'SEVEN MONTHS'),
			('8 months', 'EIGHT MONTHS'),
			('9 months', 'NINE MONTHS'),
			('10 months', 'TEN MONTHS'),
			('11 months', 'ELEVEN MONTHS'),
			('12 months', 'TWELVE MONTHS'),
			('13 months', 'THIRTEEN MONTHS'),
			('14 months', 'FOUTEEN MONTHS'),
			('15 months', 'FIFTEEN MONTHS'),
			('16 months', 'SIXTEEN MONTHS'),
			('17 months', 'SEVENTEEN MONTHS'),
			('18 months', 'EIGHTEEN MONTHS'),
			('19 months', 'NINTEEN MONTHS'),
			('20 months', 'TWENTY MONTHS'),
			('21 months', 'TWENTY-ONE MONTHS'),
			('22 months', 'TWENTY-TWO MONTHS'),
			('23 months', 'TWENTY-THREE MONTHS'),
			('24 months', 'TWENTY-FOUE MONTHS'),
			('25 months', 'TWENTY-FIVE MONTHS'),
			('26 months', 'TWENTY-SIX MONTHS'),
			('27 months', 'TWENTY-SEVEN MONTHS'),
			('28 months', 'TWENTY-EIGHT MONTHS'),
			('29 months', 'TWENTY-NINE MONTHS'),
			('30 months', 'THIRTY MONTHS'),
			('31 months', 'THIRTY-ONE MONTHS'),
			('32 months', 'THIRTY-TWO MONTHS'),
			('33 months', 'THIRTY-THREE MONTHS'),
			('34 months', 'THIRTY-FOUE MONTHS'),
			('35 months', 'THIRTY-FIVE MONTHS'),
			('36 months', 'THIRTY-SIX MONTHS'),



		]


class ProjectObjective(models.Model):
	title = models.CharField(max_length=340)
	description = models.TextField()

	def __str__(self):
		return self.title



class Province(models.Model):
	name = models.CharField(max_length=340)

	def __str__(self):
		return self.name

	@property
	def districts(self):
		return self.districts.all()
	

class District(models.Model):
	name = models.CharField(max_length=340)
	province  = models.ForeignKey('Province', on_delete=models.SET_NULL, related_name='districts', null=True)

	def __str__(self):
		return self.name


	@property
	def wards(self):
		return self.wards.all()


class Ward(models.Model):
	name = models.CharField(max_length=340)
	district  = models.ForeignKey('District', on_delete=models.SET_NULL, related_name='wards', null=True)

	def __str__(self):
		return self.name




class TargetedBeneficiary(models.Model):
	name = models.CharField(max_length=340)

	def __str__(self):
		return self.name




class Project(models.Model):

	name = models.CharField(max_length=340)
	status = models.CharField(max_length=340, choices=PROJECT_STATUS_CHOICES)
	start_date = models.DateField()
	end_date = models.DateField()
	description = models.TextField()
	image = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	portifolios = models.ManyToManyField('pages.Portifolio')
	duration = models.CharField(choices=PROJECT_DURATION_CHOICES, max_length=100)
	objectives = models.ManyToManyField('ProjectObjective')
	project_areas = models.ManyToManyField('Ward')
	beneficiary_population = models.IntegerField()
	beneficiaries = models.ManyToManyField('TargetedBeneficiary')
	partners = models.ManyToManyField('pages.Partner')
	image_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	image_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	image_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	image_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	image_5 = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	image_6 = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	image_7 = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	image_8 = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	image_9 = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	image_10 = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)	



	def __str__(self):
		return self.name

