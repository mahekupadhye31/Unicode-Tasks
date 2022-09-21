def dectobin(a,b):
    count=a    
    binary_dict={}    
    while(b>count):
        bin_eq=""           #taking it as a string as we dont want addition to take place
        copy=count
        while copy!=0:
            bin_eq+=str(copy%2)         #done to get the binary equivalent 
            copy//=2        #as we want it in integer only


        i=bin_eq.find('11')
        bool=False
        if(i!=-1):
            bool=True

        binary_dict.update({count:bool})
        count+=1
    print(binary_dict)                    

a=input("Enter the lower limit of the range")  
a=int(a) 
b=input("Enter the upper imit of the range")  
b=int(b)
dectobin(a,b)

