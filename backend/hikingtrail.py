from flask import request

def getQuery(attribute, value, isCount):
    if not isCount:
        query = "SELECT trail_name, length, difficulty, latitude, longitude " \
                "FROM HIKING_TRAIL " \
                "WHERE {} = '{}'".format(attribute, value)
    else:
        query = "SELECT {}, count(*) AS Count" \
                "FROM HIKING_TRAIL " \
                "WHERE {} = '{}'".format(attribute, attribute, value)
    print(query)
    return query


def trail_query():
    params = request.args
    attribute = params['searchBy']
    value = params['filterValue']
    count = params['count']
    isCount = True if count == 'true' else False

    # need to map the attribute to real column name in the corresponding table(animal_inhabit and national_park)
    # if input est_pop is range, need to be handled it separately
    # now only support a specific number
    # length float can't compare precisely
    return getQuery(attribute, value, isCount)
