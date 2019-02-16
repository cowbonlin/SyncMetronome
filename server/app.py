from flask import Flask, jsonify
from shortuuid import ShortUUID
app = Flask(__name__)


@app.route('/room/create')
def create_new_room():
    new_room_code = ShortUUID().random(length=5)
    return jsonify(roomcode=new_room_code)


if __name__ == '__main__':
    app.run()