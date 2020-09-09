from django.db import models 


class Faq(models.Model):

	question = models.CharField(max_length=234)
	answer = models.TextField()

	def __str__(self):
		return self.name


class Principle(models.Model):

	name = models.CharField(max_length=234)
	description = models.TextField()

	def __str__(self):
		return self.name


class Portifolio(models.Model):

	name = models.CharField(max_length=234)
	description = models.TextField()

	def __str__(self):
		return self.name




class Galery(models.Model):
	name = models.CharField(max_length=234, blank=True, null=True)
	project = models.ForeignKey('pages.Project', null=True, related_name='gallery', on_delete=models.SET_NULL)
	


	def __str__(self):
		return self.name

	@property
	def images(self):
		return self.photos.all()
	


class Image(models.Model):
	galery = models.ForeignKey('Galery', on_delete=models.CASCADE, related_name='photos')
	image = image = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)


	def __str__(self):
		return self.galery.__str__()
		











