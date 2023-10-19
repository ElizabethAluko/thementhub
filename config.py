import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()
MONGO_URI = os.getenv("MONGODB_URI")
DB_NAME = os.getenv("DB_NAME")

# Connect to MongoDB using the credentials
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
Task = db["Task"]
User = db["User"]
