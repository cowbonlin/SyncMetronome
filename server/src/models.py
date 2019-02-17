from datetime import datetime

from src.app import db


class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.now)
    code = db.Column(db.String(8), unique=True)
    connections = db.relationship('Connection', backref='room')

class Connection(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.now)
    room_code = db.Column(db.String(8), db.ForeignKey('room.code'))
