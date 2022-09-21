from django.db import models

# Create your models here.
class Contact(models.Model):                        #model field references look it up if u want to
    name=models.CharField(max_length=122)
    phone=models.CharField(max_length=122)
    email=models.CharField(max_length=122)
    desc=models.TextField()
    date=models.DateField()


#to register your model go to admin and registerr


def _str_(self):
    return self.name            #to get the name in database instead of the obj namee

