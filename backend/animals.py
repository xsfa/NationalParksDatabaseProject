from flask import request
import json


def getQuery(attribute, value, isCount):
    if not isCount:
        query = "SELECT A_species AS Species, park_name AS Park_Name, Est_pop AS Est_Population "\
                "FROM ANIMAL_INHABIT AS A JOIN NATIONAL_PARK AS N ON A.A_park_id = N.park_id " \
                "WHERE {} = '{}'".format(attribute, value)
    else:
        query = "SELECT {}, count(*) AS Count " \
                "FROM ANIMAL_INHABIT AS A JOIN NATIONAL_PARK AS N ON A.A_park_id = N.park_id " \
                "WHERE {} = '{}'".format(attribute, attribute, value)
    return query


def animals_query():
    params = request.args
    attribute = params['searchBy']
    value = params['filterValue']
    count = params['count']
    isCount = True if count =='true' else False

    ## need to map the attribute to real column name in the corresponding table(animal_inhabit and national_park)
    ## if input est_pop is range, need to be handled it separately
    ## now only support a specific number
    return getQuery(attribute, value, isCount)



