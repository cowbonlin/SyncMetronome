from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from shortuuid import ShortUUID


app = Flask(__name__)
app.config.from_object('src.config.DevConfig')
CORS(app)

db = SQLAlchemy(app)
from src.models import Room, Connection


@app.route('/room/create', methods=['POST'])
def create_new_room():
    room_code = ShortUUID().random(length=5)
    
    room = Room(code=room_code)
    connection = Connection(room=room)
    
    db.session.add(room)
    db.session.add(connection)
    try:
        db.session.commit()
    except Exception as e:
        print(e)
        db.session.rollback()
        return jsonify(status='err', reason='db error')
    
    return jsonify(status='suc', roomcode=room_code, cid=connection.id)


@app.route('/room/leave', methods=['POST'])
def leave_room():
    cid = request.get_json()['cid']
    try:
        connection = Connection.query.filter_by(id=cid).one()
    except Exception as e:
        print(e)
        return jsonify(status='err', reason='invalid params')
    
    db.session.delete(connection)
    room = connection.room
    if not room.connections:
        db.session.delete(room)
    
    try:
        db.session.commit()
    except Exception as e:
        print(e)
        db.session.rollback()
        return jsonify(status='err', reason='db error')
    
    return jsonify(status='suc')
    
    
    