from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, get_jwt
from flask_cors import CORS
from flask_jwt_extended import jwt_required, get_jwt_identity


app = Flask(__name__)
CORS(app)

admin_name = 'admin'
admin_password = 'admin123'

app.config['JWT_SECRET_KEY'] = 'code-red'
jwt = JWTManager(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(50), default='user')


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    password = data.get('password')

    hashed_password  = generate_password_hash(password) 
    
    new_user = User(name=name, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created successfully"})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    name = data.get('name')
    password = data.get('password')

    if name == admin_name and password == admin_password:
        access_token = create_access_token(identity=str(name), additional_claims={"role": "admin"})
        return jsonify({"message": "Login successful", "access_token": access_token, "role": "admin"})
    else:
        user = User.query.filter_by(name=name).first()
        if user and check_password_hash(user.password, password):
            access_token = create_access_token(identity=str(name), additional_claims={"role": user.role})
            return jsonify({"message" : "Login successful", "access_token": access_token, "role": user.role})
        else:
            return jsonify({"message": "Invalid credentials"})
    
@app.route('/dashboard', methods=['GET'])
@jwt_required()
def dashboard():
    current_user = get_jwt_identity()
    claims = get_jwt()
    if claims["role"] == "user":
        return jsonify({"message": f"Welcome {current_user} to the user dashboard"})
    else:
        return jsonify({"message": "You are a user"})



@app.route('/admin-dashboard', methods=['GET'])
@jwt_required()
def admin_dashboard():
    current_user = get_jwt_identity()
    claims = get_jwt()
    if claims["role"] != "admin":
        return jsonify({"message": "You are not authorized to access this page"}), 403
    else :
        return jsonify({"message": f"Welcome {current_user} to the admin dashboard"})




if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)