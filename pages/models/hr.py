from django.db import models


class Personel(models.Model):
	name = models.CharField(max_length=350)
	position = models.CharField(max_length=350)
	image = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)

	def __str__(self):
		return self.name


class BoardOfDirector(models.Model):
	name = models.CharField(max_length=350)
	position = models.CharField(max_length=350)
	image = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)

	def __str__(self):
		return self.name
		

class Partner(models.Model):
	name = models.CharField(max_length=350)
	image = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	
	def __str__(self):
		return self.name


