# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.


from flask import Flask
import pymysql
import json
from flask_cors import CORS
from animals import animals_query
from flora import flora_query
from hikingtrail import trail_query
from visitors import visitors_query
from attraction import attraction_query
from campground import campground_query
from national_park import national_park_query
from staff import staff_query

app = Flask(__name__)
CORS(app)

conn = pymysql.connect(
    host='database-1.chd1p5k2qlty.us-west-2.rds.amazonaws.com',
    port=3306,
    user='admin',
    password='css475final',
    db='nationalParksDB'
)


def execute_query(query):
    cur = conn.cursor()
    cur.execute(query)
    details = cur.fetchall()
    # get the column name
    description = cur.description
    columns = []
    for des in description:
        columns.append(des[0])
    print(columns)
    print(details)
    return {"columnNames": columns, "records": details}


# @app.route('/')
# def test():
#     cur = conn.cursor()
#     cur.execute("SELECT CAST(latitude AS float) FROM NATIONAL_PARK")
#     details = cur.fetchall()
#     print(details)
#     return json.dumps(details)


@app.route('/animals')
def animals():
    query = animals_query()
    return execute_query(query)


@app.route('/flora')
def flora():
    query = flora_query()
    return execute_query(query)


@app.route('/hikingtrails')
def hikingtrail():
    query = trail_query()
    return execute_query(query)


@app.route('/visitors')
def visitors():
    query = visitors_query()
    return execute_query(query)


@app.route('/attractions')
def attraction():
    query = attraction_query()
    return execute_query(query)


@app.route('/campgrounds')
def campground():
    query = campground_query()
    return execute_query(query)


@app.route('/parks')
def parks():
    query = national_park_query()
    return execute_query(query)


@app.route('/staff')
def staff():
    query = staff_query()
    return execute_query(query)



if __name__ == '__main__':
    app.run(debug=True)


