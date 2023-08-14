import json
import pickle
import os

import numpy as np

__locations = None
__data_columns = None
__model = None


def get_price(location, sqft, bhk, bath):
    try:
        ind = __data_columns.index(location.lower())
    except:
        ind = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if ind >= 0:
        x[ind] = 1
    return round(__model.predict([x])[0], 2)


def get_location_names():
    return __locations


def load_saved_artifacts():
    print("loading started")
    global __data_columns
    global __locations
    global __model

    path = os.getcwd()
    fname = 'Server/artifacts/columns.json'
    sfname = 'Server/artifacts/home_price_model.pickle'

    with open(os.path.join(path, fname), 'r') as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]

    with open(os.path.join(path, sfname), 'rb') as f:
        __model = pickle.load(f)
    print("loading data done !")


if __name__ == '__main__':
    load_saved_artifacts()





