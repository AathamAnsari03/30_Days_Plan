from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///paths.db'

app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False

db = SQLAlchemy(app)

class Path(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    start = db.Column(db.String(200))
    end = db.Column(db.String(200))
    distance = db.Column(db.Integer)

    def to_dict(self):
        return {
            'id' : self.id,
            'start': self.start,
            'end' : self.end,
            'distance' : self.distance
        }


@app.route('/add-path', methods = ["POST"])
def add_path():
    data = request.get_json()
    print(data)
    start = data.get('start')
    end = data.get('end')
    distance = data.get('distance')

    new_path = Path(start=start, end=end, distance=distance)
    db.session.add(new_path)
    db.session.commit()

    return jsonify({"message" : "Edge Added Successfully!"})


@app.route('/all-paths')
def all_paths():
    paths = Path.query.all()
    output = [path.to_dict() for path in paths]
    return jsonify(output)


@app.route('/delete-path/<int:id>', methods = ["DELETE"])
def delete_path(id):
    trash = Path.query.get(id)
    db.session.delete(trash)
    db.session.commit()
    return jsonify({"message" : "Edge Deleted Successflly!"})


@app.route('/edit-path/<int:editingId>', methods=["PUT"])
def edit_path(editingId):
    edit = Path.query.get(editingId)
    data = request.get_json()

    edit.start = data['start']
    edit.end = data['end']
    edit.distance = data['distance']

    db.session.commit()
    return jsonify({"message": "Updated Successfully!"})






if __name__ == '__main__' :
    with app.app_context():
        db.create_all()
    app.run(debug=True)
    print('Databse and Table Created')

