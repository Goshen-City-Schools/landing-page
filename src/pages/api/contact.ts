import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const fname = data.get("fName");
  const lname = data.get("lName");
  const email = data.get("email");
  const phoneNumber = data.get("phoneNumber");

  console.log(data.get("fName"), fname, lname, email, phoneNumber);

  // Validate the data - you'll probably want to do more than this
  if (!fname || !lname || !email || !phoneNumber) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields,'uu",
      }),
      { status: 400 },
    );
  }

  // TODO: On sucess, save contact details to db, and send a mail to the email provided that their request is acknoledged.
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 },
  );
};
