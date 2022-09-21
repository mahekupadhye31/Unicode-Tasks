from http.client import HTTPResponse
from django.shortcuts import render,HttpResponse        #render is used to render templates
from datetime import datetime
from home.models import Contact
from django.contrib import messages
import json
# from taskone import 

# Create your views here.
def index(request):
             
    context={                                   #context is  a python dictionary
        'var1':"hi",'var2':'hello'
    }  
    # messages.success(request,"this is a text message")
    # return render(request,'index.html',context)                 #when we return render        
    return HttpResponse(json.dumps(context))         #to get render string we need to use httpresponse

def about(request):
    # return HttpResponse("this is aboutpage")
    return render(request,'about.html')


def services(request):
    return render(request,"services.html") 

def contact(request):
    if request.method=="POST":
        name=request.POST.get('name')
        email=request.POST.get('email')
        phone=request.POST.get('phone')
        desc=request.POST.get('desc')              #date se import karo
        contact=Contact(name=name,email=email,phone=phone,desc=desc,date=datetime.today())
        contact.save()
        messages.success(request, 'Form has been submitted!')
    return render(request,"contact.html")
       

#u can use python manage.py shell to use django models
#  from home.models import Contact  
# then
#   Contact.objects.all()[0].email   