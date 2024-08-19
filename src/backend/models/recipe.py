import random


class Recipe:
    def __init__(self, db):
        self.collection = db.recipes

    def create_recipe(self, title, ingredients, instructions):
        recipe = {
            "title": title,
            "ingredients": ingredients,
            "instructions": instructions
        }
        self.collection.insert_one(recipe)

    def get_random_recipe(self):
        count = self.collection.count_documents({})
        if count == 0:
            return None
        return self.collection.find().limit(-1).skip(
            random.randint(0, count - 1)).next()
