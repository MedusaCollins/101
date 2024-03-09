# task: sınıf içerisinde laboratuvar isimli bir nesne var, bu nesnenin özelliklerini ve işlevlerini belirleyip bir kod yazınız.
students = ["x", "y", "z"]
class laboratuvar:
    def __init__( self, labId, labTime, labName, labTeacher, labStudents ):
        self.labId = labId;
        self.labTime = labTime
        self.labName = labName;
        self.labTeacher = labTeacher;
        self.labStudents = labStudents;
    
    def handleChangeValue(self, value, newValue):
        if hasattr(self, value):
            setattr(self, value, newValue)
        else:
            print("Değer değiştirme isteğiniz reddedildi.\nDesteklenen değerler: labId, labName, labTeacher, labStudents")

    def callLab(self):
        studentList = ', '.join(self.labStudents)
        return print( f"\n\n labId: {self.labId}\n labName: {self.labName}\n labTeacher: {self.labTeacher}\n labStudents: {studentList}" );

obj = laboratuvar( 0, "Bilgisayar Laboratuvarı", "10:00 - 12:50" , "Serhat DALGALIDERE", students )
obj.handleChangeValue( "labId", 1 )

obj.callLab()