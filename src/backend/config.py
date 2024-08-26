import os
from dotenv import load_dotenv

load_dotenv('.env.development.local')

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    MONGO_URI = os.getenv("MONGO_URI")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    VERIFICATION_EMAIL = os.getenv("VERIFICATION_EMAIL")
    PASSWORD_VERIFICATION_EMAIL = os.getenv("PASSWORD_VERIFICATION_EMAIL")