import { IPost } from '../features/posts/postsSlice';
import apiFetch, { FetchMethods } from './apiFetch';

describe('apiFetch function', () => {

  test('should return a non-empty array', async () => {
    const res: { data: IPost[] | object; success: boolean } = await apiFetch({ url: `${process.env.REACT_APP_API_DOMAIN}posts`, method: FetchMethods.GET });
    expect(res.success).toBe(true);
  });

  test('should return an empty object', async () => {
    const res: { data: IPost[] | object; success: boolean } = await apiFetch({ url: '', method: FetchMethods.GET });
    expect(res.success).toBe(false);
    expect(Object.keys(res.data).length).toBe(0);
  });

  test('should return one post', async () => {
    const res: {data:IPost | object; success: boolean} = await apiFetch({ url: `${process.env.REACT_APP_API_DOMAIN}posts/1`, method: FetchMethods.GET });
    expect(Object.keys(res.data).length).toBeGreaterThan(0);
  });

  test('should return NO post', async () => {
    const res: {data:IPost | object; success: boolean} = await apiFetch({ url: `${process.env.REACT_APP_API_DOMAIN}posts/2342345245`, method: FetchMethods.GET });
    expect(Object.keys(res.data).length).toBe(0);
  });
  
})