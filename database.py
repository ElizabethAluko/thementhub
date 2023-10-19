from pymongo import MongoClient
from config import MONGO_URI, DB_NAME

# Connect to MongoDB using credentials from config.py
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
Task = db["Task"]
User = db["User"]
