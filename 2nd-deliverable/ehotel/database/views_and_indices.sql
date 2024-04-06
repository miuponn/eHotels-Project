-- 2f. View 1: Number of available rooms per area
CREATE VIEW AvailableRoomsPerArea AS
SELECT
	h.Addr_City AS Area,
	COUNT(*) AS AvailableRooms
FROM
	ROOM r
LEFT JOIN
	HOTEL h ON r.HotelID = h.HotelID
LEFT JOIN
	RESERVATION res ON r.HotelID = res.HotelID and r.RoomNumber = res.RoomNumber
	AND res.Status NOT IN ('Booked', 'Rented')
WHERE
    res.ReservationID IS NULL OR res.Status = 'Cancelled'
GROUP BY 
	h.Addr_City

-- 2f. View 2: Aggregated capacity of all the rooms of a specific hotel
CREATE VIEW AggregatedCapacityPerHotel AS
SELECT
	h.HotelID,
	SUM(r.Capacity) AS TotalCapacity
FROM 
	ROOM r
JOIN 
	HOTEL h ON r.HotelID = h.HotelID
GROUP BY 
	h.HotelID

-- View by hotel chain & cateogory (rating)
CREATE VIEW HotelsByChainAndCategory AS
SELECT
	hc.HotelChainID,
	h.HotelID,
	h.Category
FROM
	HOTEL h
JOIN
	HOTEL_CHAIN hc ON h.HotelChainID = hc.HotelChainID
ORDER BY 
	hc.HotelChainID, h.Category;

-- View of hotel room pricing 
CREATE VIEW HotelRoomPrices AS
SELECT
    h.HotelID,
    MIN(r.Price) AS MinRoomPrice,
    AVG(r.Price) AS AvgRoomPrice,
    MAX(r.Price) AS MaxRoomPrice
FROM 
    ROOM r
JOIN 
    HOTEL h ON r.HotelID = h.HotelID
GROUP BY
    h.HotelID;

CREATE VIEW AvailableRoomCapacitiesByHotel AS
SELECT
    h.HotelID,
    h.Name AS HotelName,
    SUM(CASE WHEN r.Capacity = 1 AND (res.ReservationID IS NULL OR res.Status = 'Cancelled') THEN 1 ELSE 0 END) AS SingleRooms,
    SUM(CASE WHEN r.Capacity = 2 AND (res.ReservationID IS NULL OR res.Status = 'Cancelled') THEN 1 ELSE 0 END) AS DoubleRooms,
    SUM(CASE WHEN r.Capacity = 3 AND (res.ReservationID IS NULL OR res.Status = 'Cancelled') THEN 1 ELSE 0 END) AS TripleRooms,
    SUM(CASE WHEN r.Capacity = 4 AND (res.ReservationID IS NULL OR res.Status = 'Cancelled') THEN 1 ELSE 0 END) AS QuadRooms
FROM 
    ROOM r
JOIN 
    HOTEL h ON r.HotelID = h.HotelID
LEFT JOIN 
    RESERVATION res ON r.HotelID = res.HotelID AND r.RoomNumber = res.RoomNumber
GROUP BY
    h.HotelID, h.Name;

-- View amenities available in each hotel
CREATE VIEW HotelsByAvailableAmenities AS
SELECT
    h.HotelID,
    MAX(CASE WHEN r.Amenities_AC = TRUE AND (res.ReservationID IS NULL OR res.Status = 'Cancelled') THEN 1 ELSE 0 END) AS Has_AC,
    MAX(CASE WHEN r.Amenities_TV = TRUE AND (res.ReservationID IS NULL OR res.Status = 'Cancelled') THEN 1 ELSE 0 END) AS Has_TV,
    MAX(CASE WHEN r.Amenities_Jacuzzi = TRUE AND (res.ReservationID IS NULL OR res.Status = 'Cancelled') THEN 1 ELSE 0 END) AS Has_Jacuzzi
FROM 
    ROOM r
JOIN 
    HOTEL h ON r.HotelID = h.HotelID
LEFT JOIN 
    RESERVATION res ON r.HotelID = res.HotelID AND r.RoomNumber = res.RoomNumber
GROUP BY
    h.HotelID;