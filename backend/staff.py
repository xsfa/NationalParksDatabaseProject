from flask import request

def getQuery(attribute, value, isCount):

    if not isCount:
        if attribute == "ssn" or attribute == "name" or attribute == "O_office_id" or attribute == "P_park_id":
            query = "SELECT name as Name, gender as Gender, salary as Salary, super_ssn as Supervisor SSN, O_office_id as Office_ID, P_park_id as National_Park_ID " \
            "FROM STAFF " \
            "WHERE {} = '{}'".format(attribute, value)

        elif attribute == "park_name":
            query = "SELECT S.name as Staff_Name, S.gender as Gender, S.salary as Salary, S.super_ssn as Supervisor SSN, S.O_office_id as Office_ID "\
            "FROM STAFF S JOIN NATIONAL_PARK N ON S.P_park_id = N.park_id " \
            "WHERE {} = '{}'".format(attribute, value)

        elif  attribute == "Overseeing_Area_Name":
            query = "With OVERLOOKING_AREAS_STAFF as ( " \
            "SELECT HS.S_ssn as SSN, S.name as Staff_Name, HT.trail_name as Overlooking_Area_Name " \
            "FROM HIKING_TRAIL_STAFF HS  " \
            "JOIN STAFF S ON HS.S_ssn = S.ssn " \
            "JOIN HIKING_TRAIL HT ON HS.H_trail_id = HT.trail_id " \
            "UNION " \
            "SELECT A.S_ssn as SSN, S.name as Staff_Name, A.Att_name as Overlooking_Area_Name " \
            "FROM ATTRACTION_STAFF A " \
            "JOIN STAFF S ON A.S_ssn = S.ssn " \
            "UNION " \
            "SELECT C.S_ssn as SSN, S.name as Staff_Name, C.CG_name as Overlooking_Area_Name " \
            "FROM CAMPGROUND_STAFF C " \
            "JOIN STAFF S ON C.S_ssn = S.ssn) " \
            "SELECT SSN, Staff_Name" \
            "FROM OVERLOOKING_AREAS_STAFF " \
            "WHERE {} = '{}'".format(attribute, value)
    
    #NEED TO EDIT THIS ELSE:
    else:
        if attribute = "ssn" or attribute == "name" or attribute == "O_office_id" or attribute == "P_park_id": 
            query = "SELECT {}, count(*) AS Count " \
                    "FROM STAFF " \
                    "WHERE {} = '{}'".format(attribute, attribute, value)
        
        elif attribute == "park_name":
            query = "SELECT {}, count(*) AS COUNT "\
                    "FROM STAFF S JOIN NATIONAL_PARK N ON S.P_park_id = N.park_id " \
                    "WHERE {} = '{}'".format(attribute, value)
            
  
        elif  attribute == "Overseeing_Area_Name":
            query = "With OVERLOOKING_AREAS_STAFF as ( " \
                    "SELECT HS.S_ssn as SSN, S.name as Staff_Name, HT.trail_name as Overlooking_Area_Name " \
                    "FROM HIKING_TRAIL_STAFF HS  " \
                    "JOIN STAFF S ON HS.S_ssn = S.ssn " \
                    "JOIN HIKING_TRAIL HT ON HS.H_trail_id = HT.trail_id " \
                    "UNION " \
                    "SELECT A.S_ssn as SSN, S.name as Staff_Name, A.Att_name as Overlooking_Area_Name " \
                    "FROM ATTRACTION_STAFF A " \
                    "JOIN STAFF S ON A.S_ssn = S.ssn " \
                    "UNION " \
                    "SELECT C.S_ssn as SSN, S.name as Staff_Name, C.CG_name as Overlooking_Area_Name " \
                    "FROM CAMPGROUND_STAFF C " \
                    "JOIN STAFF S ON C.S_ssn = S.ssn) " \
                    "SELECT COUNT(SSN)" \
                    "FROM OVERLOOKING_AREAS_STAFF " \
                    "WHERE {} = '{}'".format(attribute, value)
        
            
    print(query)
    return query

def staff_query():
    params = request.args
    attribute = params['searchBy']
    value = params['filterValue']
    count = params['count']
    isCount = True if count == 'true' else False

    ## need to map the attribute to real column name in the corresponding table(national_park)
    ## if input est_pop is range, need to be handled it separately
    ## now only support a specific number

    return getQuery(attribute, value, isCount)
