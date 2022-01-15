import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// material core
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';

// constants
import { PATH, URL } from '../../../../constants/paths';

// styles
import useStyles from './styles';

// helpers
import { handlePrice } from '../../../../helpers/string';

// thunks
import { fetchTourList } from '../../../../redux/tour/tour.thunks';

// selectors
import {
  totalTourSelector,
  tourSelector,
} from '../../../../selectors/tour.selector';

// components
import PaginationBase from '../../../../components/Common/PaginationBase/PaginationBase';

// hooks
import usePagination from '../../../../hooks/usePagination';

const TourList = () => {
  const { page, perPage, changePage, changePerPage } = usePagination();
  const history = useHistory();
  const classes = useStyles();
  const tours = useSelector(tourSelector);
  const totalTours = useSelector(totalTourSelector);
  const totalPage = Math.ceil(totalTours / perPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const query = `?page=${page}&limit=${perPage}`;
    dispatch(fetchTourList(query));
  }, [dispatch, page, perPage]);

  return (
    <div>
      {true ? (
        <Grid container justifyContent='flex-end'>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            startIcon={<AddIcon />}
            onClick={() => history.push(PATH.ADMIN + PATH.TOUR_ADD)}
          >
            Add Tour
          </Button>
        </Grid>
      ) : null}
      <br />
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'></TableCell>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Location</TableCell>
              <TableCell align='center'>Duration</TableCell>
              <TableCell align='center'>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tours ? (
              tours.map((tour) => (
                <TableRow key={tour.id}>
                  <TableCell align='center' component='th' scope='row'>
                    <img
                      className={classes.img}
                      src={`${URL.HOST}/img/tours/${tour.imageCover}`}
                      alt={classes.img}
                    />
                  </TableCell>
                  <TableCell className={classes.name} align='center'>
                    {tour.name}
                  </TableCell>
                  <TableCell align='center'>{tour.startLocation}</TableCell>
                  <TableCell align='center'>{tour.duration} days</TableCell>
                  <TableCell align='center'>
                    {handlePrice(tour.price)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align='center'>Loading...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBase
        pageIndex={page}
        perPage={perPage}
        totalPage={totalPage}
        changePage={changePage}
        changePerPage={changePerPage}
      />
    </div>
  );
};

export default TourList;
