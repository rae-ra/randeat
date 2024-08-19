from flask_jwt_extended import JWTManager, create_access_token

jwt = JWTManager()


def create_token(identity):
    return create_access_token(identity=identity)
