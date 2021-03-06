from flask import request

def getQuery(attribute, value, isCount):
    if not isCount:
        query = "SELECT F_species AS Species, park_name AS Park_Name "\
                "FROM FLORA_GROW AS F JOIN NATIONAL_PARK AS N ON F.F_park_id = N.park_id "\
                "WHERE {} = '{}'".format(attribute, value)
    else:
        query = "SELECT {}, count(*) AS Count "\
                "FROM FLORA_GROW AS F JOIN NATIONAL_PARK AS N ON F.F_park_id = N.park_id " \
                "WHERE {} = '{}'".format(attribute, attribute, value)
    print(query)
    return query


def flora_query():
    params = request.args
    attribute = params['searchBy']
    value = params['filterValue']
    count = params['count']
    isCount = True if count =='true' else False

    ## need to map the attribute to real column name in the corresponding table(animal_inhabit and national_park)
    ## if input est_pop is range, need to be handled it separately
    ## now only support a specific number

    return getQuery(attribute, value, isCount)
