import { connectDB } from "@/lib/connectDB";
export const GET = async (req, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const bookings = await bookingsCollection
      .find({ email: params.email })
      .toArray();
    return Response.json({bookings});
  } catch (error) {
    return Response.json({ message: "No data found" }, { status: 400 });
  }
};
