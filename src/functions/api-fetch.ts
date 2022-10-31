import { IPost } from "../features/posts/postsSlice";

export enum FetchMethods {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE'
}

type Params = {
  url: string;
  method: FetchMethods;
  body?: IPost;
}

export default async function apiFetch({ url, method, body = undefined }: Params) {
  try {
    const options: RequestInit = {
      method,
      body: body ? JSON.stringify(body) : undefined,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    const res = await fetch(`${process.env.REACT_APP_API_DOMAIN}${url}`, options);

    const data = await res.json();

    return data;
  } catch (err) {
    return [];
  }
}