from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/greet')
def greet():
    return {"message" : 'Vankam React Nanba!, welcome to the Flask API!'}

if __name__ == '__main__':
    app.run(debug=True)