from pymongo import MongoClient
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

class User:
    def __init__(self, db):
        self.collection = db.users

    def create_user(self, username, email, password):
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user = {
            "username": username,
            "email": email,
            "password": hashed_password
        }
        self.collection.insert_one(user)

    def find_by_username(self, username):
        return self.collection.find_one({"username": username})

    def validate_password(self, stored_password, provided_password):
        return bcrypt.check_password_hash(stored_password, provided_password)
