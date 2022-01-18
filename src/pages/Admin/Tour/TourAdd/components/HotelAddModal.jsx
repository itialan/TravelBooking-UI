import React from 'react';

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

const HotelAddModal = ({ isOpen, handleCloseDialogAddHotel }) => {
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
            Add Hotel
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth id='title' label='Name' variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='author'
                label='Address'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant='outlined'>
                <InputLabel id='demo-simple-select-outlined-label'>
                  Start Day
                </InputLabel>
                <Select
                  fullWidth
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  label='Severity'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='1'>Day 1</MenuItem>
                  <MenuItem value='2'>Day 2</MenuItem>
                  <MenuItem value='3'>Day 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant='outlined'>
                <InputLabel id='demo-simple-select-outlined-label'>
                  Start Day
                </InputLabel>
                <Select
                  fullWidth
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  label='Severity'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='1'>Day 1</MenuItem>
                  <MenuItem value='2'>Day 2</MenuItem>
                  <MenuItem value='3'>Day 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogAddHotel} color='primary'>
            Close
          </Button>
          <Button variant='contained' color='primary' size='small'>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HotelAddModal;
