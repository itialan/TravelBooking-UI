import React, { useCallback, useEffect, useState } from 'react';

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

// material labs
import Autocomplete from '@material-ui/lab/Autocomplete';

// components
import Mapbox from './Mapbox';

// libs
import cuid from 'cuid';
import _ from 'lodash';

// styles
import useStyles from '../styles';
import { getPlaces } from '../../../../../apis/mapbox.api';

const LocationAddModal = ({
  isOpen,
  selectedLocation = null,
  handleCloseDialogAddLocation,
  setLocations,
}) => {
  const initialValues = selectedLocation ?? {
    _id: cuid(),
    type: '',
    coordinates: [],
    address: '',
    description: '',
    day: '',
  };

  const classes = useStyles();
  const [location, setLocation] = useState(initialValues);
  const places = [
    { address: 'The Shawshank Redemption', coordinates: '123.123' },
    { address: 'The Godfather', coordinates: '123.123' },
    { address: 'The Godfather: Part II', coordinates: '312.321' },
  ];
  // const [places, setPlaces] = useState([]);

  useEffect(() => {
    setLocation({ ...initialValues });
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocation({ ...location, [name]: value });
    console.log(location);
  };

  const fetchPlaceFromMapbox = async (place) => {
    const result = await getPlaces(place);
    console.log(result.data.features);
  };

  // invoked fetching Mapbox API after 0.5 second
  const delayedFetching = _.debounce(fetchPlaceFromMapbox, 500);

  const onKeyUpSearch = (e) => {
    const place = e.target.value;
    delayedFetching(place);
  };

  const handleSubmit = () => {
    setLocations(location);
    handleCloseDialogAddLocation();
  };

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
                <Autocomplete
                  id='address-search'
                  freeSolo
                  options={places.map((option) => option.address)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      value={location.address}
                      label='address'
                      name='address'
                      size='small'
                      variant='outlined'
                      onKeyUp={(e) => onKeyUpSearch(e)}
                    />
                  )}
                />
                {/* <TextField
                  fullWidth
                  size='small'
                  id='address'
                  label='Address'
                  name='address'
                  value={location.address}
                  variant='outlined'
                  onChange={(e) => handleInputChange(e)}
                /> */}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size='small'
                  id='latitude'
                  label='Latitude'
                  value={location.coordinates[0]}
                  variant='outlined'
                  onChange={(e) =>
                    setLocation({
                      ...location,
                      coordinates: [e.target.value, location.coordinates[1]],
                    })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size='small'
                  id='longitude'
                  label='Longitude'
                  value={location.coordinates[1]}
                  variant='outlined'
                  onChange={(e) =>
                    setLocation({
                      ...location,
                      coordinates: [location.coordinates[0], e.target.value],
                    })
                  }
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
                    name='day'
                    value={location.day}
                    defaultValue=''
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
                  name='description'
                  value={location.description}
                  placeholder='Leave a message'
                  onChange={(e) => handleInputChange(e)}
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

export default LocationAddModal;
