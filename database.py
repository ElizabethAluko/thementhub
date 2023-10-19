from mongoengine import connect
from models.user import User
from models.task import Task

def connect_to_mongodb(uri, db_name):
    connect(db=db_name, host=uri)

def create_user(username, password, email):
    user = User(username=username, password=password, email=email)
    user.save()

def get_user_by_username(username):
    return User.objects(username=username).first()

def get_user_by_id(user_id):
    return User.objects(id=user_id).first()

def create_task(title, due_date, status, user):
    task = Task(title=title, due_date=due_date, status=status, user=user)
    task.save()

def get_tasks_by_user(user):
    return Task.objects(user=user)

def get_tasks_by_status(user, status):
    return Task.objects(user=user, status=status)

def update_task_status(task_id, new_status):
    task = Task.objects(id=task_id).first()
    if task:
        task.status = new_status
        task.save()

def delete_task(task_id):
    task = Task.objects(id=task_id).first()
    if task:
        task.delete()
