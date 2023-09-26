import fetch from "node-fetch";
export async function getPost() {
  const response = await fetch(`${process.env.API}posts`);
  const data = await response.json();
  return data;
}
