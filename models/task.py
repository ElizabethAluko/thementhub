from mongoengine import Document, StringField, DateTimeField, ReferenceField

class Task(Document):
    title = StringField()
    due_date = DateTimeField()
    status = StringField()  # You can use an enum for predefined statuses
    user = ReferenceField('User')
