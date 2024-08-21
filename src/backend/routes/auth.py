from flask import Blueprint, request, jsonify, current_app

from src.backend.models.user import User
from src.backend.utils.jwt import create_token

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    print(username, email, password)

    user_model = User(current_app.config['db'])
    if user_model.find_by_username(username):
        return jsonify({"message": "User already exists"}), 409

    user_model.create_user(username, email, password)
    return jsonify({"message": "User created successfully"}), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user_model = User(current_app.config['db'])
    user = user_model.find_by_username(username)
    if not user or not user_model.validate_password(user['password'],
                                                    password):
        return jsonify({"message": "Invalid credentials"}), 401

    token = create_token(identity={"username": username})
    return jsonify({"token": token}), 200

# sudo service mongod restart
# sudo systemctl status mongod