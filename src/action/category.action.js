import { Action, baseURL } from './config';

export const getcategory = async () => {
  try {
    const header = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const res = await fetch(baseURL + '/category');
    
    const data = await res.json();
    console.log(data.data)
    console.log(data.data.length)

    // const res = await Action.get('/category', header)
    // console.log(res)
    return data.data;
  } catch (err) {
    return err;
  }
};
