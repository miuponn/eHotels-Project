CREATE DATABASE Brotels;

CREATE TABLE IF NOT EXISTS HOTEL_CHAIN(
	HotelChainID CHAR(4) PRIMARY KEY,
	NumberOfHotels INTEGER NOT NULL CHECK (NumberOfHotels >= 0),
	ContactEmail VARCHAR(255) UNIQUE, --assuming max domain of 255 characters
	PhoneNumber CHAR(12) UNIQUE CHECK (
    	PhoneNumber ~ '^\d{3}-\d{3}-\d{4}$' --assuming number format 234-567-8901
		),
	Addr_Number VARCHAR(10), --assuming addr number length varies
	Addr_Street VARCHAR(255), --assuming street name length varies
	Addr_City VARCHAR(100), --assuming city name length varies
	Addr_PostalCode CHAR(7) --assuming postal code format M47 295
);

CREATE TABLE IF NOT EXISTS HOTEL(
	HotelID CHAR(8) PRIMARY KEY,
	HotelChainID CHAR(4) NOT NULL REFERENCES HOTEL_CHAIN(HotelChainID) ON DELETE CASCADE,
	ManagerID VARCHAR(8) NOT NULL UNIQUE,
	Category INTEGER NOT NULL CHECK (Category BETWEEN 1 AND 5),
	NumberOfRooms INTEGER NOT NULL CHECK (NumberOfRooms > 0),
	ContactEmail VARCHAR(255) UNIQUE,
	PhoneNumber CHAR(12) UNIQUE CHECK (
    	PhoneNumber ~ '^\d{3}-\d{3}-\d{4}$' --assuming number format 234-567-8901
		),
	Addr_Number VARCHAR(10), 
	Addr_Street VARCHAR(255), 
	Addr_City VARCHAR(100), 
	Addr_PostalCode CHAR(7)
);

CREATE TYPE IF NOT EXISTS RoomViewType AS ENUM('Sea', 'Mountain', 'City'); -- new viewtype type
CREATE TYPE IF NOT EXISTS DamageType AS ENUM('None', 'Minor', 'Major'); -- new damagetype type

CREATE TABLE IF NOT EXISTS ROOM(
	HotelID CHAR(8) NOT NULL,
	RoomNumber INTEGER NOT NULL CHECK (RoomNumber >= 100), -- assuming room nums start from 100
	Price NUMERIC NOT NULL CHECK (Price > 0), -- price must be numeric value greater than 0
	Capacity INTEGER NOT NULL CHECK (Capacity IN (1, 2, 3, 4)), -- capacity must be 1, 2, 3, or 4
	ViewType RoomViewType NOT NULL,
	Damage DamageType NOT NULL,
	Extendability BOOLEAN NOT NULL,
	Amenities_TV BOOLEAN NOT NULL,
	Amenities_AC BOOLEAN NOT NULL,
	Amenities_Fridge BOOLEAN NOT NULL,
	Amenities_Jacuzzi BOOLEAN NOT NULL,
	PRIMARY KEY (HotelID, RoomNumber),
	FOREIGN KEY (HotelID) REFERENCES HOTEL(HotelID) ON DELETE CASCADE
);

CREATE TYPE IF NOT EXISTS EmployeeRole AS ENUM('Reception', 'Service', 'Maintenance'); -- new role type
CREATE TABLE IF NOT EXISTS EMPLOYEE(
	EmployeeID VARCHAR(8) PRIMARY KEY, -- assuming ID format requirement first initial + last name 4 chars + serial 'xxx'
	Name VARCHAR(100) NOT NULL,
	SSN CHAR(11) NOT NULL UNIQUE CHECK ( 
		SSN ~ '^\d{3}-\d{3}-\d{3}$' AND -- SSN format 'xxx-xxx-xxx'
		SSN NOT LIKE '%000-000-000%' AND
		SSN NOT LIKE '%111-111-111%' AND
		SSN NOT LIKE '%222-222-222%' AND
		SSN NOT LIKE '%333-333-333%' AND
		SSN NOT LIKE '%444-444-444%' AND
		SSN NOT LIKE '%555-555-555%' AND
		SSN NOT LIKE '%666-666-666%' AND
		SSN NOT LIKE '%777-777-777%' AND
		SSN NOT LIKE '%888-888-888%' AND
		SSN NOT LIKE '%999-999-999%'),
	Addr_Number VARCHAR(10), 
	Addr_Street VARCHAR(255), 
	Addr_City VARCHAR(100), 
	Addr_PostalCode CHAR(7),
	Role EmployeeRole,
	HotelID CHAR(8) NOT NULL REFERENCES HOTEL(HotelID) ON DELETE CASCADE
);

ALTER TABLE HOTEL
ADD CONSTRAINT fk_hotel_manager
FOREIGN KEY (ManagerID) REFERENCES EMPLOYEE(EmployeeID) ON DELETE NO ACTION;

CREATE TABLE IF NOT EXISTS CUSTOMER(
	GuestID VARCHAR(10) PRIMARY KEY, -- auto incrementing ID for each guest 
	Name VARCHAR(100) NOT NULL,
    SSN CHAR(11) NOT NULL UNIQUE CHECK ( 
		SSN ~ '^\d{3}-\d{3}-\d{3}$' AND -- SSN format 'xxx-xxx-xxx'
		SSN NOT LIKE '%000-000-000%' AND
		SSN NOT LIKE '%111-111-111%' AND
		SSN NOT LIKE '%222-222-222%' AND
		SSN NOT LIKE '%333-333-333%' AND
		SSN NOT LIKE '%444-444-444%' AND
		SSN NOT LIKE '%555-555-555%' AND
		SSN NOT LIKE '%666-666-666%' AND
		SSN NOT LIKE '%777-777-777%' AND
		SSN NOT LIKE '%888-888-888%' AND
		SSN NOT LIKE '%999-999-999%'),
	Addr_Number VARCHAR(10), 
	Addr_Street VARCHAR(255), 
	Addr_City VARCHAR(100), 
	Addr_PostalCode CHAR(7),
	RegistrationDate DATE NOT NULL
);

CREATE TYPE IF NOT EXISTS ReservationStatus AS ENUM('Booked', 'Rented', 'Cancelled'); -- new type for reservation status

CREATE TABLE IF NOT EXISTS RESERVATION(
    ReservationID SERIAL PRIMARY KEY,
    HotelID CHAR(8) NOT NULL,
    RoomNumber INTEGER NOT NULL,
    GuestID VARCHAR(10) NOT NULL,
    EmployeeID VARCHAR(8), 
    Status ReservationStatus NOT NULL,
    Book_StartDate DATE,
    EndDate DATE NOT NULL CHECK (EndDate >= Book_StartDate),
    Book_CheckedIn BOOLEAN DEFAULT FALSE,
    Rent_PayAmount NUMERIC(10, 2), -- Assuming payment format with two decimal places
    Rent_PayStatus BOOLEAN NOT NULL DEFAULT FALSE,
    Rent_CheckInDate DATE,
    Rent_CheckOutDate DATE DEFAULT NULL,
    FOREIGN KEY (HotelID, RoomNumber) REFERENCES ROOM(HotelID, RoomNumber) ON DELETE CASCADE,
    FOREIGN KEY (GuestID) REFERENCES CUSTOMER(GuestID) ON DELETE NO ACTION,
    FOREIGN KEY (EmployeeID) REFERENCES EMPLOYEE(EmployeeID) ON DELETE SET NULL    
);	
CREATE TABLE IF NOT EXISTS ARCHIVE(
ArchiveID SERIAL PRIMARY KEY,
	HotelID CHAR(8) NOT NULL,
    RoomNumber INTEGER NOT NULL,
	GuestID VARCHAR(10) NOT NULL,
	CheckInDate DATE,
	CheckOutDate DATE,
	StartDate DATE,
	EndDate DATE NOT NULL
);




