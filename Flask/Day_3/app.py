from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


edges = []

@app.route('/add-edge', methods=['POST'])
def add_edge():
    data = request.get_json()
    edges.append(data)  
    print("Current edges:", edges)
    return jsonify({"message": "Edge added!", "edge": data})

@app.route('/edges', methods=['GET'])
def get_edges():
    return jsonify(edges)

if __name__ == "__main__":
    app.run(debug=True)
