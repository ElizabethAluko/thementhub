from mongoengine import Document, StringField, ListField, ReferenceField

class User(Document):
    username = StringField(unique=True)
    password = StringField()
    email = StringField()
    tasks = ListField(ReferenceField('Task'))
