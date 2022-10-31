import { IPost } from '../features/posts/postsSlice';
import apiFetch, { FetchMethods } from './api-fetch';

describe('apiFetch function', () => {

  test('should return a non-empty array', async () => {
    const res: Array<IPost> = await apiFetch({ url: 'posts', method: FetchMethods.GET });
    expect(res.length).toBeGreaterThan(0);
  });

  test('should return an empty array', async () => {
    const res: Array<IPost> = await apiFetch({ url: '', method: FetchMethods.GET });
    console.log(res)
    expect(res.length).toBe(0);
  });

  test('should return one post', async () => {
    const res: IPost = await apiFetch({ url: 'posts/1', method: FetchMethods.GET });
    console.log(res)
    expect(typeof res.id).toBe("number");
  });

  test('should return NO post', async () => {
    const res: IPost = await apiFetch({ url: 'posts/234354334', method: FetchMethods.GET });
    console.log(res)
    expect(typeof res.id).toBe("undefined");
  });
  
})