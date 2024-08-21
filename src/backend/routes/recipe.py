from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import jwt_required
from src.backend.models.recipe import Recipe

recipe_bp = Blueprint('recipe', __name__)


@recipe_bp.route('/create-recipe', methods=['POST'])
@jwt_required()
def create_recipe():
    print("KK_")
    data = request.get_json()
    title = data.get('title')
    ingredients = data.get('ingredients')
    instructions = data.get('instructions')
    print(data)
    recipe_model = Recipe(current_app.config['db'])
    recipe_model.create_recipe(title, ingredients, instructions)
    return jsonify({"message": "Recipe created successfully"}), 201


@recipe_bp.route('/random-recipe', methods=['GET'])
def get_random_recipe():
    recipe_model = Recipe(current_app.config['db'])
    recipe = recipe_model.get_random_recipe()
    if not recipe:
        return jsonify({"message": "No recipes available"}), 404
    return jsonify(recipe), 200
