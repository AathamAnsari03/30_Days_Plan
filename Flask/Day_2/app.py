from flask import Flask, jsonify  
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/graph/<type>')
def graph(type):
    info = {
        "directed": "One way connection",
        "undirected": "Two way connection"
    }
    
    return jsonify({  
        "type": type,
        "description": info.get(type, "Unknown graph type")
    })

if __name__ == "__main__":
    app.run(debug=True)
