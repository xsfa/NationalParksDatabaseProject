from flask import request

def getQuery(attribute, value, isCount):
    if not isCount:
        query = "SELECT attraction_name, type, A.latitude AS latitude, A.longitude AS longitude, park_name "\
                "FROM ATTRACTION AS A JOIN NATIONAL_PARK ON P_park_id = park_id "\
                "WHERE {} = '{}'".format(attribute, value)
    else:
        query = "SELECT {}, count(*) AS Count "\
                "FROM ATTRACTION JOIN NATIONAL_PARK ON P_park_id = park_id " \
                "WHERE {} = '{}'".format(attribute, attribute, value)
    print(query)
    return query


def attraction_query():
    params = request.args
    attribute = params['searchBy']
    value = params['filterValue']
    count = params['count']
    isCount = True if count == 'true' else False

    ## need to map the attribute to real column name in the corresponding table(animal_inhabit and national_park)
    ## if input est_pop is range, need to be handled it separately
    ## now only support a specific number

    return getQuery(attribute, value, isCount)