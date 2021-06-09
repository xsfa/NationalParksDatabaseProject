from flask import request

def getQuery(attribute, value, isCount):
    if not isCount:
        query = "SELECT campground_name, max_occupancy, CAST(C.latitude AS float) AS latitude, CAST(C.longitude AS float) AS longitude, park_name "\
                "FROM CAMPGROUND AS C JOIN NATIONAL_PARK ON P_park_id = park_id "\
                "WHERE {} = '{}'".format(attribute, value)
    else:
        if attribute == "C.latitude" or attribute == "C.longitude":
            query = "SELECT CAST({} AS float) AS {}, count(*) AS Count " \
                    "FROM CAMPGROUND AS C JOIN NATIONAL_PARK AS N ON C.P_park_id = N.park_id " \
                    "WHERE {} = '{}'".format(attribute, attribute[2:], attribute, value)
        else:
            query = "SELECT {}, count(*) AS Count "\
                    "FROM CAMPGROUND JOIN NATIONAL_PARK ON P_park_id = park_id " \
                    "WHERE {} = '{}'".format(attribute, attribute, value)
    print(query)
    return query


def campground_query():
    params = request.args
    attribute = params['searchBy']
    value = params['filterValue']
    count = params['count']
    isCount = True if count == 'true' else False

    ## need to map the attribute to real column name in the corresponding table(animal_inhabit and national_park)
    ## if input est_pop is range, need to be handled it separately
    ## now only support a specific number

    return getQuery(attribute, value, isCount)