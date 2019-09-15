from flask import Flask, make_response
from flask_cors import CORS

import pandas as pd
import json

app = Flask(__name__, static_url_path='/static')
CORS(app)

@app.route('/api/gantt/')
def api_gantt():
    return make_response(open('Ganttchart.html').read())


@app.route('/api/constrmodelr/')
def api_constr():
    return make_response(open('ConstraintModeller.html').read())


@app.route('/api/data/')
def api_data():
    with open('.\static\data\_taskdata.json', 'r') as data:
        Data_dictionary = json.load(data)
        return make_response(json.dumps(Data_dictionary, ensure_ascii=True))

@app.route('/api/resource/')
def api_resource():
    with open('.\static\data\Resourcedata.json', 'r') as data:
        Data_dictionary = json.load(data)
        return make_response(json.dumps(Data_dictionary, ensure_ascii=True))

@app.route('/api/constraints/')
def api_constraints():
    with open('.\static\data\Constraintsdata.json', 'r') as data:
        Data_dictionary = json.load(data)
        return make_response(json.dumps(Data_dictionary, ensure_ascii=True))


@app.route('/')
def index():
    return make_response(open('StartPage.html').read())


if __name__ == '__main__':
    app.debug = True
    app.run()
