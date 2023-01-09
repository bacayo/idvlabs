from django.db import models

# Create your models here.


class Products(models.Model):
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    description = models.TextField(blank=True)
    image = models.URLField(blank=True)
    pub_date = models.DateTimeField(auto_now_add=True, null=True)
    category = models.CharField(max_length=50, blank=True)
    product_stock = models.IntegerField(default=0)
