from flask import request

def getQuery(attribute, value, isCount):
    if not isCount:
        query = "SELECT park_name AS Park_Name, fname as First_Name, lname AS Last_Name, gender AS Gender, date_format(dob, '%Y-%m-%d') AS DoB, CAST(annual_pass_holder AS UNSIGNED) AS Annual_Pass_Holder "\
                "FROM VISITOR AS V JOIN NATIONAL_PARK AS N ON V.V_park_id = N.park_id "\
                "WHERE {} = '{}'".format(attribute, value)
    else:
        query = "SELECT {}, count(*) AS Count "\
                "FROM FLORA_GROW AS F JOIN NATIONAL_PARK AS N ON F.F_park_id = N.park_id " \
                "WHERE {} = '{}'".format(attribute, attribute, value)
    print(query)
    return query


def visitors_query():
    params = request.args
    attribute = params['searchBy']
    value = params['filterValue']
    count = params['count']
    isCount = True if count =='true' else False

    ## need to map the attribute to real column name in the corresponding table(animal_inhabit and national_park)
    ## need to handle passholder, map the value to 1 or 0

    return getQuery(attribute, value, isCount)