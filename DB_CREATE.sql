CREATE TABLE NATIONAL_PARK
(
	park_id INT NOT NULL CHECK (park_id >=100 AND park_id <= 999),
	park_name VARCHAR(70) NOT NULL,
        state VARCHAR(20) NOT NULL,
	latitude FLOAT(10) NOT NULL,
        longitude FLOAT(10) NOT NULL,

	PRIMARY KEY (park_id)
);


CREATE TABLE OFFICE
(
        office_id INT NOT NULL CHECK (office_id >= 10000 AND office_id <= 99999),
        office_name VARCHAR(30) NOT NULL,
        address VARCHAR(40) NOT NULL,

        PRIMARY KEY(office_id)
);


CREATE TABLE CAMPGROUND
(
        P_park_id INT NOT NULL CHECK (P_park_id >=100 AND P_park_id <= 999),
        campground_name VARCHAR(70) NOT NULL,
        max_occupancy INT NOT NULL CHECK (max_occupancy >= 1),
        latitude FLOAT(10) NOT NULL,
        longitude FLOAT(10) NOT NULL,
        
        PRIMARY KEY(campground_name, P_park_id),
        FOREIGN KEY(P_park_id) References NATIONAL_PARK(park_id)
);


CREATE TABLE ATTRACTION 
(
        P_park_id INT NOT NULL CHECK ( P_park_id >=100 AND  P_park_id <= 999),
        attraction_name VARCHAR(70) NOT NULL,
        type VARCHAR(30) NOT NULL,
        latitude FLOAT(10) NOT NULL,
        longitude FLOAT(10) NOT NULL,


        PRIMARY KEY(attraction_name, P_park_id),
	FOREIGN KEY (P_park_id) References NATIONAL_PARK(park_id),
	CONSTRAINT type_check CHECK (type IN ('Waterfall', 'Mountain', 'Cave', 'River', 'Lake',
	'Wetland', 'Forest', 'Geyser', 'Canyon', 'Valley', 'Volcano', 'Basin', 'Viewpoint', 
	'Hot Springs', 'Glacier', 'Creek', 'Sand Dunes'))
);


CREATE TABLE HIKING_TRAIL
(
        trail_id INT NOT NULL CHECK (trail_id >= 1000 AND trail_id <= 9999),
	trail_name VARCHAR(70) NOT NULL,
        length FLOAT(3) NOT NULL,
        difficulty VARCHAR(30) NOT NULL,
        latitude FLOAT(10) NOT NULL,
        longitude FLOAT(10) NOT NULL,


        PRIMARY KEY(trail_id),
	CONSTRAINT difficulty_check CHECK (difficulty IN ('Easy', 'Moderate', 'Strenuous'))
);


CREATE TABLE STAFF
(
        ssn CHAR(11) NOT NULL,
        name VARCHAR(15) NOT NULL,
        gender CHAR,
        salary DECIMAL(10,2),
        super_ssn CHAR(11),
        O_office_id INT,
        P_park_id INT NOT NULL,


        PRIMARY KEY (ssn),
        FOREIGN KEY (O_office_id) REFERENCES OFFICE (office_id),
        FOREIGN KEY (P_park_id) REFERENCES NATIONAL_PARK (park_id),
        CONSTRAINT staffGender CHECK (gender in ('Male', 'Female','Non-Binary'))
);




CREATE TABLE CAMPGROUND_STAFF
(
        S_ssn CHAR(11) NOT NULL,
        CG_name VARCHAR(30) NOT NULL,
        P_park_id INT NOT NULL,


        PRIMARY KEY (S_ssn, CG_name, P_park_id),
        FOREIGN KEY (S_ssn) REFERENCES STAFF (ssn),
        FOREIGN KEY (CG_name, P_park_id) REFERENCES CAMPGROUND (campground_name, P_park_id)
);


CREATE TABLE ATTRACTION_STAFF
(
        S_ssn CHAR(11) NOT NULL,
        Att_name VARCHAR(30) NOT NULL,
        P_park_id INT NOT NULL,


        PRIMARY KEY (S_ssn, Att_name, P_park_id),
        FOREIGN KEY (S_ssn) REFERENCES STAFF (ssn),
        FOREIGN KEY (Att_name, P_park_id) REFERENCES ATTRACTION (attraction_name, P_park_id)
);


CREATE TABLE HIKING_TRAIL_STAFF
(
        S_ssn CHAR(11) NOT NULL,
        H_trail_id INT NOT NULL,


        PRIMARY KEY (S_ssn, H_trail_id),
        FOREIGN KEY (S_ssn) REFERENCES STAFF (ssn),
        FOREIGN KEY (H_trail_id) REFERENCES HIKING_TRAIL (trail_id)
);












CREATE TABLE VISITOR (
    V_park_ID INT NOT NULL CHECK (park_id >= 100 AND  park_id <= 999),
    fname VARCHAR(30) NOT NULL,
    lname VARCHAR(30) NOT NULL,
    gender VARCHAR(30) NOT NULL CHECK (gender IN ( 'Male', 'Non-binary', 'Female')),
    dob DATE,
    visitor_num INT NOT NULL,
    annual_pass_holder BIT(1),


    PRIMARY KEY(V_park_id, VisitorNum),
    FOREIGN KEY(V_park_id) REFERENCES NATIONAL_PARK(park_id)
);


CREATE TABLE FLORA (
    species VARCHAR(45) NOT NULL,


    PRIMARY KEY(species)
);


CREATE TABLE ANIMAL (
    species VARCHAR(45) NOT NULL,
    
    PRIMARY KEY(species)
);


CREATE TABLE FLORA_GROW (
    F_species VARCHAR(45) NOT NULL,
    F_park_id INT NOT NULL CHECK (park_id >= 100 AND  park_id <= 999),


   PRIMARY KEY(F_species, F_park_id),
   FOREIGN KEY(F_species) REFERENCES Flora(Species),
   FOREIGN KEY(F_park_id) REFERENCES NATIONAL_PARK(park_id)
);


CREATE TABLE ANIMAL_INHABIT (
    A_species VARCHAR(45) NOT NULL, 
    A_park_id INT NOT NULL CHECK (park_id >= 100 AND  park_id <= 999),
    Est_pop INT,


    PRIMARY KEY(A_species, A_park_id),
    FOREIGN KEY(A_species) REFERENCES ANIMAL(Species),
    FOREIGN KEY(A_park_id) REFERENCES NATIONAL_PARK(park_id)
);
