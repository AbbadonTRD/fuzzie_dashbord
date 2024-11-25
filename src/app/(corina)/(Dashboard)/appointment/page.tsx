import React from "react";
import AllAppointments from "@/components/(corina)/appointment/all-appointments";
import InfoBar from "@/components/(corina)/infobar";
import Section from "@/components/(corina)/section-label";
import { Avatar, AvatarFallback } from "@/components/(corina)/ui/avatar";
import { Card, CardContent } from "@/components/(corina)/ui/card";
import { Separator } from "@/components/(corina)/ui/separator";

// Dummy user
const mockUser = {
  id: "user123",
  email: "user@example.com",
};

// Dummy bookings data
const dummyBookings = [
  {
    id: "booking1",
    date: new Date(),
    slot: "10:00 AM - 11:00 AM",
    createdAt: new Date(),
    email: "client1@example.com",
    Customer: {
      Domain: {
        name: "Example Domain",
      },
    },
  },
  {
    id: "booking2",
    date: new Date(),
    slot: "1:00 PM - 2:00 PM",
    createdAt: new Date(),
    email: "client2@example.com",
    Customer: {
      Domain: {
        name: "Another Domain",
      },
    },
  },
];

// Mock function to simulate fetching user bookings
const onGetAllBookingsForCurrentUser = async () => {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return dummy bookings
  return { bookings: dummyBookings };
};

const Page = async () => {
  const user = mockUser;

  if (!user) return null;
  const domainBookings = await onGetAllBookingsForCurrentUser();
  const today = new Date();

  if (!domainBookings)
    return (
      <div className="w-full flex justify-center">
        <p>No Appointments</p>
      </div>
    );

  const bookingsExistToday = domainBookings.bookings.filter(
    (booking) => booking.date.getDate() === today.getDate()
  );

  return (
    <>
      <InfoBar />
      <div className="grid grid-cols-1 lg:grid-cols-3 flex-1 h-0 gap-5">
        <div className="lg:col-span-2 overflow-y-auto">
          <AllAppointments bookings={domainBookings?.bookings} />
        </div>
        <div className="col-span-1">
          <Section
            label="Bookings For Today"
            message="All your bookings for today are mentioned below."
          />
          {bookingsExistToday.length ? (
            bookingsExistToday.map((booking) => (
              <Card
                key={booking.id}
                className="rounded-xl overflow-hidden mt-4"
              >
                <CardContent className="p-0 flex">
                  <div className="w-4/12 text-xl bg-peach py-10 flex justify-center items-center font-bold">
                    {booking.slot}
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between w-full p-3">
                      <p className="text-sm">
                        created
                        <br />
                        {booking.createdAt.getHours()}{" "}
                        {booking.createdAt.getMinutes()}{" "}
                        {booking.createdAt.getHours() > 12 ? "PM" : "AM"}
                      </p>
                      <p className="text-sm">
                        Domain <br />
                        {booking.Customer?.Domain?.name}
                      </p>
                    </div>
                    <Separator orientation="horizontal" />
                    <div className="w-full flex items-center p-3 gap-2">
                      <Avatar>
                        <AvatarFallback>{booking.email[0]}</AvatarFallback>
                      </Avatar>
                      <p className="text-sm">{booking.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="w-full flex justify-center">
              <p>No Appointments For Today</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
