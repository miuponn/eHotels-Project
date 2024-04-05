-- trigger function to update elapsed bookings to cancelled if not checked in after 24h each time new reservation is inserted
CREATE OR REPLACE FUNCTION check_and_cancel_reservations() -- trigger functionto update status
RETURNS TRIGGER AS $$
BEGIN 
	-- Check and update status of existing reservations
	UPDATE RESERVATION
	SET Status = 'Cancelled'
	WHERE Status = 'Booked' AND Book_StartDate + INTERVAL '24 hours' < CURRENT_TIMESTAMP;
	
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_and_cancel_reservations_trigger -- trigger for trigger function
AFTER INSERT ON RESERVATION
FOR EACH STATEMENT
EXECUTE FUNCTION check_and_cancel_reservations();

----------------------------------------------------------------
-- trigger function that prevents checking out until payment status is true
CREATE OR REPLACE FUNCTION check_payment_before_checkout() -- trigger function to check status
RETURNS TRIGGER AS $$
BEGIN
	-- Check if trying to check out renting without payment
	IF NEW.Rent_CheckOutDate IS NOT NULL AND NEW.Rent_PayStatus = FALSE THEN
		RAISE EXCEPTION 'Cannot check out without payment.';
	END IF;
	
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_payment_before_checkout_trigger -- trigger for trigger function
BEFORE UPDATE OF Rent_CheckOutDate ON RESERVATION
FOR EACH ROW
EXECUTE FUNCTION check_payment_before_checkout();

----------------------------------------------------------------
-- trigger function that archives reservations that are checkedout or cancelled and deletes them
CREATE OR REPLACE FUNCTION archive_reservation() -- trigger function for archive and delete
RETURNS TRIGGER AS $$
BEGIN
	-- Check if the reservation is cancelled or checked out
	IF OLD.Status <> 'Cancelled' AND NEW.Status = 'Cancelled' OR NEW.Rent_CheckOutDate IS NOT NULL THEN
		-- Insert into ARCHIVE table
		INSERT INTO ARCHIVE(ArchiveID, HotelID, RoomNumber, GuestID, CheckInDate, CheckOutDate, StartDate, EndDate)
		VALUES (OLD.ReservationID, OLD.HotelID, OLD.RoomNumber, OLD.GuestID, OLD.Rent_CheckInDate, OLD.Rent_CheckOutDate, OLD.Book_StartDate, OLD.EndDate);
	
		-- Delete from RESERVATION table
		DELETE FROM RESERVATION WHERE ReservationID = OLD.ReservationID;
	END IF;
	
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER archive_reservation_trigger -- tigger for trigger function
AFTER UPDATE ON RESERVATION
FOR EACH ROW
EXECUTE FUNCTION archive_reservation();

----------------------------------------------------------------
-- Trigger function that handles booking-to-renting updates and immutability of reservation details
CREATE OR REPLACE FUNCTION handle_booking_to_renting()
RETURNS TRIGGER AS $$
BEGIN
	-- Check if Book_CheckedIn is updated to TRUE
	IF NEW.Book_CheckedIn = TRUE AND OLD.Book_CheckedIn = FALSE THEN
        -- Update Status to 'Rented', set Rent_CheckInDate to current date, and set Rent_PayStatus to TRUE
        NEW.Status := 'Rented';
        NEW.Rent_CheckInDate := CURRENT_DATE;
        NEW.Rent_PayStatus := TRUE;
    END IF;
    
    -- Prevent changes to booking details after reservation is made
    IF OLD.Book_CheckedIn = FALSE AND (
        NEW.RoomNumber <> OLD.RoomNumber OR
        NEW.StartDate <> OLD.StartDate OR
        NEW.EndDate <> OLD.EndDate OR
        NEW.HotelID <> OLD.HotelID OR
        NEW.GuestID <> OLD.GuestID OR
        NEW.Rent_PayAmount <> OLD.Rent_PayAmount OR
        (OLD.Status = 'Booked' AND (NEW.Rent_CheckInDate IS NOT NULL OR NEW.Rent_CheckOutDate IS NOT NULL))
    ) THEN
		RAISE EXCEPTION 'Reservation details cannot be changed after booking is made.';
    END IF;
    
    -- Prevent reassignment of the employee handling the booking
    IF OLD.EmployeeID IS NULL AND NEW.EmployeeID IS NOT NULL THEN
        IF NEW.EmployeeID <> OLD.EmployeeID THEN
            RAISE EXCEPTION 'Employee handling booking cannot be reassigned.';
        END IF;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for handling booking-to-renting updates and immutability of reservation details
CREATE TRIGGER handle_booking_to_renting_trigger
BEFORE UPDATE ON RESERVATION
FOR EACH ROW
EXECUTE FUNCTION handle_booking_to_renting();

----------------------------------------------------------------
-- trigger function that checks employee's hotel before updating manager
CREATE OR REPLACE FUNCTION check_manager_hotel() -- trigger function to check
RETURNS TRIGGER AS $$
BEGIN
	-- Check if the employee being assigned as a manager is associated with the hotel
	IF NEW.ManagerID IS NOT NULL AND NEW.ManagerID <> OLD.ManagerID THEN
		IF NOT EXISTS (SELECT 1 FROM EMPLOYEE WHERE EmployeeID = NEW.ManagerID AND HotelID = NEW.HotelID) THEN
			RAISE EXCEPTION 'Employee must be associated with the hotel to be assigned manager';
		END IF;
	END IF;
	
    -- Prevent removing a manager from a hotel
    IF OLD.ManagerID IS NOT NULL AND NEW.ManagerID IS NULL THEN
        RAISE EXCEPTION 'A hotel cannot be left without a manager';
    END IF;
    
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_manager_hotel_trigger -- trigger for trigger function
BEFORE UPDATE OF ManagerID ON HOTEL
FOR EACH ROW
EXECUTE FUNCTION check_manager_hotel();

----------------------------------------------------------------
-- trigger function to ensure SSN cannot be updated
CREATE OR REPLACE FUNCTION prevent_ssn_update() -- trigger function raises exception
RETURNS TRIGGER AS $$
BEGIN 
	IF OLD.SSN IS NOT NULL AND NEW.SSN <> OLD.SSN THEN
		RAISE EXCEPTION 'SSN is immutable and cannot be updated.';
	END IF;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER prevent_customer_ssn_update_trigger -- trigger for trigger function for customer SSNs
BEFORE UPDATE OF SSN ON CUSTOMER
FOR EACH ROW
EXECUTE FUNCTION prevent_ssn_update();

CREATE TRIGGER prevent_employee_ssn_update_trigger -- trigger for trigger function for employee SSNs
BEFORE UPDATE OF SSN ON EMPLOYEE
FOR EACH ROW
EXECUTE FUNCTION prevent_ssn_update();

----------------------------------------------------------------
-- trigger function to make archive columns immutable
CREATE OR REPLACE FUNCTION prevent_archive_updates() -- trigger function raises exception
RETURNS TRIGGER AS $$
BEGIN 
	RAISE EXCEPTION 'ARCHIVE records are immutable and cannot be updated.';
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER prevent_archives_updates_trigger -- trigger for trigger function
BEFORE UPDATE ON ARCHIVE
FOR EACH ROW
EXECUTE FUNCTION prevent_archive_updates();

----------------------------------------------------------------

