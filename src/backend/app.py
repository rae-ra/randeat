from flask import Flask
from config import Config
from src.backend.models.user import User
from src.backend.models.recipe import Recipe
from routes.auth import auth_bp
from routes.recipe import recipe_bp
from utils.jwt import jwt
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)
# Initialize MongoDB
client = MongoClient(app.config['MONGO_URI'])
app.config['db'] = client.get_database()

# Initialize JWT
jwt.init_app(app)

# CORS
CORS(app, resources={r"/auth/*": {"origins": "http://localhost:3000"}})

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(recipe_bp, url_prefix='/recipes')

if __name__ == '__main__':
    app.run(debug=True)
