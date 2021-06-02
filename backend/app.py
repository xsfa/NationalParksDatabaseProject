# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.


from flask import Flask
import pymysql
import json
app = Flask(__name__)

conn = pymysql.connect(
    host='database-1.chd1p5k2qlty.us-west-2.rds.amazonaws.com',
    port=3306,
    user='admin',
    password='css475final',
    db='nationalParksDB'
)



@app.route('/')
def test():
    cur = conn.cursor()
    cur.execute("SELECT * FROM NATIONAL_PARK")
    details = cur.fetchall()
    return json.dumps(details)



# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    app.run(debug=True)

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
