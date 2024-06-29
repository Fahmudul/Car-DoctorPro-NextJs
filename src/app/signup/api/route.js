import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST = async (req) => {
  const newUser = await req.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("Users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "User already exist" }, { status: 304 });
    }

    const hashedPassword = bcrypt.hashSync(newUser.password, 10);
    const resp = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return Response.json(
      { message: "User created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
};
