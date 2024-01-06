export const POST = () => {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() }),
  // })

  const data = { status: 200 };
  return Response.json(data, { status: 200 });
};
