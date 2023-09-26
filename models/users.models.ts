import fetch from "node-fetch";

export async function getUsers() {
  const response = await fetch(`${process.env.API}users`);
  const data = await response.json();
  return data;
}
