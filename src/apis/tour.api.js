import { getData } from './commonFetching.api';

export const getTourList = () => getData('tours');
