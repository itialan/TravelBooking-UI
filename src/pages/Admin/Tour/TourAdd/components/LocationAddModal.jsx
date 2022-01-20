import React from 'react';

// material core
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

// components
import Mapbox from './Mapbox';

// styles
import useStyles from '../styles';

const LocationAddModal = ({ isOpen, handleCloseDialogAddLocation }) => {
  const classes = useStyles();

  return (
    <>
      <Dialog
        fullWidth
        maxWidth='md'
        open={isOpen}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogContent>
          <Typography variant='h6' color='textPrimary'>
            Add Location
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid container item xs={6} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size='small'
                  id='place'
                  label='Place'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size='small'
                  id='address'
                  label='Address'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size='small'
                  disabled
                  id='latitude'
                  label='Latitude'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size='small'
                  disabled
                  id='longitude'
                  label='Longitude'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl size='small' fullWidth variant='outlined'>
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
                    <MenuItem value='Day 1'>Day 1</MenuItem>
                    <MenuItem value='Day 2'>Day 2</MenuItem>
                    <MenuItem value='Day 3'>Day 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subtitle1' color='textPrimary'>
                  Description
                </Typography>
                <TextField
                  multiline
                  size='small'
                  rows={5}
                  fullWidth
                  variant='outlined'
                  placeholder='Leave a message'
                />
              </Grid>
            </Grid>
            <Grid container item xs={6} spacing={2}>
              <Grid item xs={12}>
                <Mapbox />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogAddLocation} color='primary'>
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

export default LocationAddModal;
