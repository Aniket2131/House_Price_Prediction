from flask import Flask, jsonify, request
import util
app = Flask(__name__)


@app.route("/get_location_names")
def get_location_names():
    response = jsonify({
        'locations': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route("/predict_home_price", methods=['post'])
def predict_home_price():
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    bhk = request.form['bhk']
    bath = request.form['bath']

    response = jsonify({
        'estimated_price': util.get_price(location,total_sqft,bhk,bath)
    })

    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    util.load_saved_artifacts()
    app.run(debug=True, port=5500)

