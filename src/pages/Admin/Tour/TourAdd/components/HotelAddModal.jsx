import React, { useEffect, useMemo, useState, memo, useRef } from 'react';

// marerial core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// libs
import cuid from 'cuid';

const HotelAddModal = ({
  isOpen,
  selectedHotel = null,
  handleCloseDialogAddHotel,
  setHotels,
}) => {
  const initialValues = selectedHotel ?? {
    _id: cuid(),
    name: '',
    address: '',
    startDay: '',
    nights: '',
  };
  const temp = useRef(0);

  console.log('check selected values: ', initialValues);
  console.log('-----');
  console.log('isOpen:', isOpen);
  console.log('selectedHotel:', selectedHotel);
  console.log('handleCloseDiaglogAddHotel:', handleCloseDialogAddHotel);
  console.log('setHotels:', setHotels);
  console.log('-----');

  const [hotel, setHotel] = useState(initialValues);

  useEffect(() => {
    console.log('useEffect');
    setHotel({ ...initialValues });
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = () => {
    setHotels(hotel);
    handleCloseDialogAddHotel();
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth='sm'
        open={isOpen}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogContent>
          <Typography variant='h6' color='textPrimary'>
            Add Hotel {temp.current++}
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='title'
                label='Name'
                name='name'
                size='small'
                variant='outlined'
                value={hotel.name}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='author'
                label='Address'
                name='address'
                size='small'
                variant='outlined'
                value={hotel.address}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl size='small' fullWidth variant='outlined'>
                <InputLabel id='demo-simple-select-outlined-label'>
                  Start Day
                </InputLabel>
                <Select
                  fullWidth
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  defaultValue=''
                  label='Severity'
                  name='startDay'
                  value={hotel.startDay}
                  onChange={(e) => handleInputChange(e)}
                >
                  {[...Array(31)].map((e, i) => (
                    <MenuItem key={i} value={i + 1}>
                      Day {i + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl size='small' fullWidth variant='outlined'>
                <InputLabel id='demo-simple-select-outlined-label'>
                  Nights
                </InputLabel>
                <Select
                  fullWidth
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  defaultValue=''
                  label='Severity'
                  value={hotel.nights}
                  name='nights'
                  onChange={(e) => handleInputChange(e)}
                >
                  {[...Array(31)].map((e, i) => (
                    <MenuItem key={i} value={i + 1}>
                      {i + 1} Night(s)
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogAddHotel} color='primary'>
            Close
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='small'
            onClick={handleSubmit}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(HotelAddModal);
