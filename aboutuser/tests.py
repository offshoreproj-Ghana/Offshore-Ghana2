from django.test import TestCase
class PersonModelTest(TestCase):
    
    def setUp(self):
        Person.objects.create(First_name='Masahudu', Last_name='Sulemana',Email='smasahudu97@gmail.com',Age=29,Income=9.00)
        #Person.objects.create(First_name='sam', Last_name='Quans',Email='QUANShudu97@gmail.com',Age=24,Income=500)
    
    def test_First_name(self): 
        #TESTING IF FIELD NAME HAS REALLY BEEN CREATED AS 'First_name'>>>EXPECTED TO PASS 
        person = Person.objects.get(First_name ='Masahudu')
        field_label = person._meta.get_field('First_name').verbose_name
        self.assertEquals(field_label, 'First name')
    
    
    def test_First_name_len(self): 
        #TESTING IF LENGTH OF FIRST NAME IS  GREATER THAN 250 >>>EXPECTED TO PASS   
        person = Person.objects.get(First_name ='Masahudu')
        if len(person.First_name) > 250:
            print('failed test')
        else:
            print('\n \n')
            print('=====================test_First_name_len===========================')
            print('The length of First name column is ok>>>passed!!!')    
            #self.assertTrue()
      
    
    def test_Last_name_len(self):
        #TESTING IF LENGTH OF LAST NAME IS  GREATER THAN 250EXPECTED TO PASS 
        person = Person.objects.get(First_name ='Masahudu')
        if len(person.Last_name) > 250:
            print('failed test')
        else:
            print('\n \n')
            print('=====================test_Last_name_len===========================')
            print('The length of Last name column is ok>>>passed!!!')    
            #self.assertTrue()
            
    
    def test_Last_name(self):
        #TESTING IF LAST NAME IS CREATED AS 'Last_name" EXPECTED TO PASS
        person = Person.objects.get(Last_name = 'Sulemana')
        field_label = person._meta.get_field('Last_name').verbose_name
        self.assertEquals(field_label, 'Last name')  

    
     '''   
    Even though i could run various test such as confirming if a field input is an integer, i left that out for now because 
    i believe django integer field would really take care of it. but i tested for name of fields since the are developers decisions and can be 
    changed and are subject to breaking and the same goes for length of inputs. not withstanding the above reasons, subsequently the field types 
    will also be tested.
    '''
