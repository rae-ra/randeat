import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "big_secret")
    MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/randeat_demo_00")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "big_jwt_secret")
