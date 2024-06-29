import { connectDB } from "@/lib/connectDB";

export const POST = async (req) => {
  const bookings = await req.json();
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const newBooking = await bookingsCollection.insertOne(bookings);
    return Response.json(
      {
        message: "Service booked successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    Response.json({ message: "Something Went Wrong" }, { status: 400 });
  }
};
