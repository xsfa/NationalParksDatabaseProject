from flask import request
import json


def getQuery(attribute, value, isCount):
    if not isCount:
        query = "SELECT F_species, park_name "\
                "FROM F"





def flora_query(conn):
    params = request.args
    attribute = params['searchBy']
    value = params['filterValue']
    count = params['count']
    isCount = True if count=='true' else False

    ## need to map the attribute to real column name in the corresponding table(animal_inhabit and national_park)
    ## if input est_pop is range, need to be handled it separately
    ## now only support a specific number
    query= getQuery(attribute, value, isCount)
    print(query)
    cur = conn.cursor()
    cur.execute(query)
    details = cur.fetchall()
    return json.dumps(details)