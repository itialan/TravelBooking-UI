import { postData } from './commonFetching.api';

export const signin = (data) => postData('users/login', data);
