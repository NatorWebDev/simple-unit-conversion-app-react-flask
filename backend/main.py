from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


@app.route("/length")
def length():
    return "owo owo owo"


@app.route("/weight")
def weight():
    pass


@app.route("/temperature")
def temperature():
    pass


@app.route("/")
def home():
    return "<h1>Hola</h1>"


if __name__ == "__main__":
    app.run(debug=True)
