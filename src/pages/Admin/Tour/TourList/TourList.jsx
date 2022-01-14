import React, { useEffect } from 'react';
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

// components
import PaginationBase from '../../../../components/Common/PaginationBase/PaginationBase';

// hooks
import usePagination from '../../../../hooks/usePagination';

const createData = (name, price, imageCover, startLocation, duration) => {
  return { name, price, imageCover, startLocation, duration };
};

const rows = [
  createData(
    'Du Lịch Thác 1',
    15900000,
    'tour-613af02ac326b5898ccf7597-1631348046061-cover.jpeg',
    'Vũng Tàu',
    4
  ),
  createData(
    'Du Lịch Thác 2',
    15900000,
    'tour-613af02ac326b5898ccf7597-1631348046061-cover.jpeg',
    'Vũng Tàu',
    4
  ),
  createData(
    'Du Lịch Thác 3',
    15900000,
    'tour-613af02ac326b5898ccf7597-1631348046061-cover.jpeg',
    'Vũng Tàu',
    4
  ),
  createData(
    'Du Lịch Thác 4',
    15900000,
    'tour-613af02ac326b5898ccf7597-1631348046061-cover.jpeg',
    'Vũng Tàu',
    4
  ),
  createData(
    'Du Lịch Thác 5',
    15900000,
    'tour-613af02ac326b5898ccf7597-1631348046061-cover.jpeg',
    'Vũng Tàu',
    4
  ),
];

const TourList = () => {
  const history = useHistory();
  const classes = useStyles();
  const { page, perPage, changePage, changePerPage } = usePagination();

  useEffect(() => {
    console.log(page);
    console.log(perPage);
  }, [page, perPage]);

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
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align='center' component='th' scope='row'>
                  <img
                    className={classes.img}
                    src={`${URL.HOST}/img/tours/${row.imageCover}`}
                  />
                </TableCell>
                <TableCell className={classes.name} align='center'>
                  {row.name}
                </TableCell>
                <TableCell align='center'>{row.startLocation}</TableCell>
                <TableCell align='center'>{row.duration} days</TableCell>
                <TableCell align='center'>{handlePrice(row.price)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBase
        pageIndex={page}
        perPage={perPage}
        totalPage={50}
        changePage={changePage}
        changePerPage={changePerPage}
      />
    </div>
  );
};

export default TourList;
