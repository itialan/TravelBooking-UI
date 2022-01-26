import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// material core
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';

// material icons
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

// FilePond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import PostImage from '../../../../components/Common/PostImage/PostImage';

// selectors
import { routeSelector } from '../../../../selectors/route.selector';

// styles
import useStyles from './styles';
import HotelAddModal from './components/HotelAddModal';
import LocationAddModal from './components/LocationAddModal';

// thunks
import { createTourItem } from '../../../../redux/tour/tourItem/tourItem.thunks';
import { fetchDestinationList } from '../../../../redux/destination/destination.thunks';

// FilePond: Register the plugins
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const TourAdd = () => {
  const initialValues = {
    name: '',
    route: '',
    duration: '',
    price: '',
    maxGroupSize: '',
    startLocation: '',
    summary: '',
    description: '',
    imageCover: [],
    images: [],
    locations: [],
    hotels: [],
  };

  const classes = useStyles();
  const dispatch = useDispatch();
  const routes = useSelector(routeSelector);

  const [isOpenAddHotel, setIsOpenAddHotel] = useState({
    isOpen: false,
    currHotel: null,
  });
  const [isOpenAddLocation, setIsOpenAddLocation] = useState({
    isOpen: false,
    currLocation: null,
  });
  const [imageCover, setImageCover] = useState([]);
  const [images, setImages] = useState([]);
  const [values, setValues] = useState(initialValues);

  const handleCloseDialogAddHotel = useCallback(() => {
    setIsOpenAddHotel({ ...isOpenAddHotel, isOpen: false });
  }, [isOpenAddHotel]);

  const handleCloseDialogAddLocation = () => {
    setIsOpenAddLocation({ ...isOpenAddLocation, isOpen: false });
  };

  console.log('asd');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const uploadImages = images?.map((img) => img.file);
    console.log(values);
    //dispatch(createTourItem(values, imageCover[0].file, uploadImages));
  };

  const showEditHotelModal = (hotelId) => {
    console.log('curretHotel: ', hotelId);
    const selectedHotel = values.hotels.find((hotel) => hotel._id === hotelId);
    setIsOpenAddHotel({
      ...isOpenAddHotel,
      isOpen: true,
      currHotel: selectedHotel,
    });
  };

  const showEditLocationModal = (locationId) => {
    const selectedLocation = values.locations.find(
      (location) => location._id === locationId
    );
    setIsOpenAddLocation({
      ...isOpenAddLocation,
      isOpen: true,
      currLocation: selectedLocation,
    });
  };

  // Using for CRUD advande fields (hotels, locations)
  const addNewField = useCallback(
    (fieldName, value, sortName) => {
      return [...values[fieldName], value].sort((a, b) =>
        a[sortName] < b[sortName] ? -1 : 1
      );
    },
    [values]
  );

  const updateFieldValue = useCallback(
    (fieldName, value, sortName) => {
      return [
        ...values[fieldName].filter((item) => item._id !== value._id),
        value,
      ].sort((a, b) => (a[sortName] < b[sortName] ? -1 : 1));
    },
    [values]
  );

  function deleteFieldValue(fieldName, id) {
    console.log(id);
    setValues({
      ...values,
      [fieldName]: [...values[fieldName].filter((item) => item._id !== id)],
    });
  }

  const setHotelValue = useCallback(
    (hotel) =>
      setValues({
        ...values,
        hotels: isOpenAddHotel.currHotel
          ? updateFieldValue('hotels', hotel, 'startDay')
          : addNewField('hotels', hotel, 'startDay'),
      }),
    [values, addNewField, isOpenAddHotel.currHotel, updateFieldValue]
  );

  useEffect(() => {
    dispatch(fetchDestinationList());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Grid>
          <h3>Information</h3>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextField
              size='small'
              fullWidth
              variant='outlined'
              label='Name'
              name='name'
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl size='small' variant='outlined' fullWidth>
              <InputLabel id='demo-simple-select-outlined-label'>
                Route
              </InputLabel>
              <Select
                labelId='demo-simple-select-outlined-label'
                id='demo-simple-select-outlined'
                label='Route'
                fullWidth
                name='route'
                defaultValue=''
                onChange={(e) => handleInputChange(e)}
              >
                {routes
                  ? routes.map((route) => (
                      <MenuItem key={route.id} value={route.id}>
                        {`${route.startLocation} - ${route.destination}`}
                      </MenuItem>
                    ))
                  : 'Loading...'}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              size='small'
              fullWidth
              variant='outlined'
              label='Price'
              name='price'
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl size='small' variant='outlined' fullWidth>
              <InputLabel id='demo-simple-select-outlined-label'>
                Duration
              </InputLabel>
              <Select
                labelId='demo-simple-select-outlined-label'
                id='demo-simple-select-outlined'
                label='Duration'
                fullWidth
                name='duration'
                defaultValue=''
                onChange={(e) => handleInputChange(e)}
              >
                {[...Array(31)].map((e, i) => (
                  <MenuItem key={i} value={i + 1}>
                    {i + 1} days
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl size='small' variant='outlined' fullWidth>
              <InputLabel id='demo-simple-select-outlined-label'>
                Max Group Size
              </InputLabel>
              <Select
                size='small'
                labelId='demo-simple-select-outlined-label'
                id='demo-simple-select-outlined'
                label='Max Group Size'
                name='maxGroupSize'
                fullWidth
                defaultValue=''
                onChange={(e) => handleInputChange(e)}
              >
                {[...Array(31)].map((e, i) => (
                  <MenuItem key={i} value={i + 1}>
                    {i + 1} people(s)
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              size='small'
              fullWidth
              variant='outlined'
              label='Summary'
              name='summary'
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              size='small'
              fullWidth
              variant='outlined'
              label='Description'
              name='description'
              multiline
              rows={4}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
        </Grid>
        <Grid>
          <h3>Advance</h3>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <FilePond
              files={imageCover}
              onupdatefiles={setImageCover}
              name='imageCover'
              maxFiles={1}
              accept='image/png, image/jpeg, image/gif'
              itemInsertLocation='after'
              imagePreviewHeight='150'
              labelIdle='Image Cover <span class="filepond--label-action">Browse</span>'
            />
            {/* <PostImage
              images={values.imageCover}
              setImages={(files) => {
                setValues({ ...values, ['imageCover']: files[0].file });
              }}
              maxFiles={1}
              description={'Image Cover'}
            /> */}
          </Grid>
          <Grid item xs={12} md={9}>
            {/* <PostImage
              images={values.images}
              setImages={(files) => {
                setValues({ ...values, ['images']: files.map((f) => f.file) });
              }}
              maxFiles={3}
              description={'Images'}
            /> */}
            <FilePond
              className={classes.myFilePond}
              files={images}
              onupdatefiles={setImages}
              allowMultiple={true}
              maxFiles={3}
              accept='image/png, image/jpeg, image/gif'
              itemInsertLocation='after'
              imagePreviewHeight='150'
              labelIdle='Images <span class="filepond--label-action">Browse</span>'
            />
          </Grid>
        </Grid>
        <Grid container alignItems='center'>
          <Grid item sm={8}>
            <h4>Hotels</h4>
          </Grid>
          <Grid container item sm={4} justifyContent='flex-end'>
            <Button
              variant='contained'
              color='primary'
              size='small'
              startIcon={<AddIcon />}
              onClick={() =>
                setIsOpenAddHotel({
                  ...isOpenAddHotel,
                  isOpen: true,
                  currHotel: null,
                })
              }
            >
              Add Hotel
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Name</TableCell>
                    <TableCell align='center'>Address</TableCell>
                    <TableCell align='center'>Start Day</TableCell>
                    <TableCell align='center'>Day</TableCell>
                    <TableCell align='center'></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {values.hotels.length !== 0 ? (
                    values.hotels.map((hotel) => (
                      <TableRow key={hotel._id}>
                        <TableCell align='center' component='th' scope='row'>
                          {hotel.name}
                        </TableCell>
                        <TableCell className={classes.name} align='center'>
                          {hotel.address}
                        </TableCell>
                        <TableCell align='center'>
                          Day {hotel.startDay}
                        </TableCell>
                        <TableCell align='center'>
                          {hotel.nights} days
                        </TableCell>
                        <TableCell align='center'>
                          <div>
                            <EditIcon
                              className={classes.icon}
                              onClick={() => showEditHotelModal(hotel._id)}
                            />
                            <DeleteIcon
                              className={classes.icon}
                              onClick={() =>
                                deleteFieldValue('hotels', hotel._id)
                              }
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell align='center' component='th' scope='row'>
                        Add new hotel
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid container alignItems='center'>
          <Grid item sm={8}>
            <h4>Locations</h4>
          </Grid>
          <Grid container item sm={4} justifyContent='flex-end'>
            <Button
              variant='contained'
              color='primary'
              size='small'
              startIcon={<AddIcon />}
              onClick={() =>
                setIsOpenAddLocation({
                  ...isOpenAddLocation,
                  isOpen: true,
                  currLocation: null,
                })
              }
            >
              Add Location
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Address</TableCell>
                    <TableCell align='center'>Start Day</TableCell>
                    <TableCell align='center'></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {values.locations.length !== 0 ? (
                    values.locations.map((location) => (
                      <TableRow key={location._id}>
                        <TableCell align='center' component='th' scope='row'>
                          {location.address}
                        </TableCell>
                        <TableCell align='center'>Day {location.day}</TableCell>
                        <TableCell align='center'>
                          <div>
                            <EditIcon
                              className={classes.icon}
                              onClick={() =>
                                showEditLocationModal(location._id)
                              }
                            />
                            <DeleteIcon
                              className={classes.icon}
                              onClick={() =>
                                deleteFieldValue('locations', location._id)
                              }
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell align='center' component='th' scope='row'>
                        Add new location
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid container item sm={12} md={12} justifyContent='flex-end'>
          <Button variant='outlined' color='primary' className='mr-20'>
            Cancel
          </Button>
          <Button type='submit' color='primary' variant='contained'>
            Submit
          </Button>
        </Grid>

        <HotelAddModal
          isOpen={isOpenAddHotel.isOpen}
          selectedHotel={isOpenAddHotel.currHotel}
          handleCloseDialogAddHotel={handleCloseDialogAddHotel}
          setHotels={setHotelValue}
        />

        <LocationAddModal
          isOpen={isOpenAddLocation.isOpen}
          selectedLocation={isOpenAddLocation.currLocation}
          handleCloseDialogAddLocation={handleCloseDialogAddLocation}
          setLocations={(location) =>
            setValues({
              ...values,
              locations: isOpenAddLocation.currLocation
                ? updateFieldValue('locations', location, 'day')
                : addNewField('locations', location, 'day'),
            })
          }
        />
      </form>
    </>
  );
};

export default TourAdd;
