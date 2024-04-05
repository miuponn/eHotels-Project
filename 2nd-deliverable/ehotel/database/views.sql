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