import { getData } from './commonFetching.api';

export const getDestinationList = () => getData('routes');
