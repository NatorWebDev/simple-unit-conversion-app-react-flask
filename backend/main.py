from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


@app.route("/length", methods=["POST"])
def length():
    data = request.get_json()
    initialUnit = data["unit"]
    finalUnit = data["targetUnit"]
    amount = float(data["amount"])

    match initialUnit:
        case "mm":
            amount /= 1000
        case "cm":
            amount = amount / 100
        case "m":
            amount = amount * 1
        case "km":
            amount = amount * 1000
        case "inch":
            amount /= 39.37
        case "foot":
            amount /= 3.281
        case "yard":
            amount /= 1.094
        case "mile":
            amount *= 1609

    match finalUnit:
        case "mm":
            amount = amount * 1000
        case "cm":
            amount = amount * 100
        case "m":
            amount = amount
        case "km":
            amount = amount / 1000
        case "inch":
            amount *= 39.37
        case "foot":
            amount *= 3.281
        case "yard":
            amount *= 1.094
        case "mile":
            amount /= 1609

    finalData = {
        "unit": finalUnit,
        "amount": amount
    }

    return jsonify(finalData)


@app.route("/weight", methods=["POST"])
def weight():
    data = request.get_json()
    initialUnit = data["unit"]
    finalUnit = data["targetUnit"]
    amount = float(data["amount"])

    match initialUnit:
        case "mg":
            amount /= 1000
        case "g":
            amount = amount
        case "kg":
            amount = amount * 1000
        case "ounce":
            amount = amount * 28.3495
        case "pound":
            amount *= 453.6

    match finalUnit:
        case "mg":
            amount *= 1000
        case "g":
            amount = amount / 1
        case "kg":
            amount = amount / 1000
        case "ounce":
            amount = amount / 28.3495
        case "pound":
            amount /= 453.6

    finalData = {
        "unit": finalUnit,
        "amount": amount
    }

    return jsonify(finalData)


@app.route("/temperature", methods=["POST"])
def temperature():
    data = request.get_json()
    initialUnit = data["unit"]
    finalUnit = data["targetUnit"]
    amount = float(data["amount"])

    match initialUnit:
        case "Celsius":
            amount = amount
        case "Fahrenheit":
            amount = (amount-32) / (9/5)
        case "Kelvin":
            amount = amount - 273.15

    match finalUnit:
        case "Celsius":
            amount = amount
        case "Fahrenheit":
            amount = (amount * (9/5)) + 32
        case "Kelvin":
            amount = amount + 273.15

    finalData = {
        "unit": finalUnit,
        "amount": amount
    }

    return jsonify(finalData)


@app.route("/")
def home():
    return "<h1>Hola</h1>"


if __name__ == "__main__":
    app.run(debug=True)
