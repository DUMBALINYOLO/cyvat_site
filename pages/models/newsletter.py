from django.db import models

class Post(models.Model):
	title = models.CharField(max_length=234)
	image = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	content = models.TextField()
	published_date = models.DateField()
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
		return self.title
