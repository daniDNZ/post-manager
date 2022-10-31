import { IPost } from "../features/posts/postsSlice";

export enum FetchMethods {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT'
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
    const res = await fetch(url, options);
    const linkHeaders = res.headers.get('Link');
    const data = await res.json();

    return {data, linkHeaders, success: true};
  } catch (err) {
    return {data: {}, linkHeaders: '', success: false};
  }
}