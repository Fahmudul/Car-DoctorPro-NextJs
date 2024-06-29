import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });

    return Response.json({
      message: "Booking deleted successfully",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "No data found" }, { status: 400 });
  }
};

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
 
  const updatedDoc = await request.json();
  try {
    const resp = await bookingsCollection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          ...updatedDoc,
        },
      },
      {
        upsert: true,
      }
    );
    return Response.json({ message: "Updated Successfully", response: resp });
  } catch (error) {
    return Response.json({ message: "Something went wrong", status: 400 });
  }
};
export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({
      message: "Booking found successfully",
      response: resp,
    });
  } catch (error) {
    return Response.json({ message: "No data found", status: 400 });
  }
};
