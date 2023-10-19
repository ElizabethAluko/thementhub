from datetime import datetime


class User:
    def __init__(self, first_name, last_name,
                 email, password, role,
                 job_or_course_title, academic_level, age_range,
                 available_time, country, profile_picture, description):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password
        self.role = role
        self.job_or_course_title = job_or_course_title
        self.academic_level = academic_level
        self.age_range = age_range
        self.available_time = available_time
        self.country = country
        self.profile_picture = profile_picture
        self.description = description

class Task:
    def __init__(self, email, title, description, status, duedate):
        self.email = email
        self.title = title
        self.description = description
        self.status = status
        self.duedate = duedate

    def __str__(self):
        return f"email: {self.email}, title: {self.title}, description: {self.description}, status: {self.status}, duedate: {self.duedate}"
