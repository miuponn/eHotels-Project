-- test queries to grab the proper information from the database (if we could):

-- query to find all hotels within Los Angeles that have over 150 rooms.

SELECT Addr_Number, Addr_Street, Addr_City, Addr_PostalCode
FROM HOTEL
WHERE NumberOfRooms > 150;


-- query to find the hotel chains that have more hotels than the average hotel chain.

SELECT HotelChainID
FROM HOTEL_CHAIN
WHERE HotelCount > (SELECT AVG(HotelCount) FROM HOTEL_CHAIN);

-- simple selection of all hotel addresses that are located in Las Vegas
SELECT Addr_Number, Addr_Street, Addr_PostalCode
FROM HOTEL
WHERE Addr_City = 'Las Vegas';

-- query to return the total number of hotels that are present in San Francisco. (Aggregation)

SELECT COUNT(*) AS NumberOfSFHotels
FROM HOTELS
WHERE Addr_City = 'San Francisco';