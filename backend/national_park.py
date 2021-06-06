from flask import request

def getQuery(attribute, value, isCount):
    if not isCount:
        query = "SELECT park_name, state, latitude, longitude " \
                "FROM NATIONAL_PARK " \
                "WHERE {} = '{}'".format(attribute, value)
    else:
        query = "SELECT {}, count(*) AS Count " \
                "FROM NATIONAL_PARK " \
                "WHERE {} = '{}'".format(attribute, attribute, value)
    print(query)
    return query


def national_park_query():
    params = request.args
    attribute = params['searchBy']
    value = params['filterValue']
    count = params['count']
    isCount = True if count == 'true' else False

    ## need to map the attribute to real column name in the corresponding table(national_park)
    ## if input est_pop is range, need to be handled it separately
    ## now only support a specific number

    return getQuery(attribute, value, isCount)
