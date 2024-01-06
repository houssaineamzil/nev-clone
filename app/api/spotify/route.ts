export const GET = async () => {
  // const response = await fetch("", {
  // 	next: { revalidate: 120 },
  // })

  const data = "make it yourself 😁";
  return Response.json(data, { status: 200 });
};
