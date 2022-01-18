import React, { useState } from 'react';

import PropTypes from 'prop-types';

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
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Close';

// FilePond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// styles
import useStyles from './styles';
import HotelAddModal from './components/HotelAddModal';
import LocationAddModal from './components/LocationAddModal';

// FilePond: Register the plugins
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const TourAdd = () => {
  const classes = useStyles();
  const [imageCover, setImageCover] = useState([]);
  const [images, setImages] = useState([]);
  const [isOpenAddHotel, setIsOpenAddHotel] = useState(false);
  const [isOpenAddLocation, setIsOpenAddLocation] = useState(false);

  console.log(imageCover);
  console.log(process.env.REACT_APP_MAPBOX_TOKEN);

  const handleCloseDialogAddHotel = () => {
    setIsOpenAddHotel(false);
  };

  const handleCloseDialogAddLocation = () => {
    setIsOpenAddLocation(false);
  };

  return (
    <>
      <Grid>
        <h3>Information</h3>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField size='small' fullWidth variant='outlined' label='Name' />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl size='small' variant='outlined' fullWidth>
            <InputLabel id='demo-simple-select-outlined-label'>
              Route
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              label='District'
              fullWidth
            >
              <MenuItem value='1'>Da Lat</MenuItem>
              <MenuItem value='2'>Ha Noi</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField size='small' fullWidth variant='outlined' label='Price' />
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
            >
              <MenuItem value='1'>1 days</MenuItem>
              <MenuItem value='2'>2 days</MenuItem>
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
              fullWidth
            >
              <MenuItem value='1'>1 people</MenuItem>
              <MenuItem value='2'>2 peoples</MenuItem>
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
            multiline
            rows={4}
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
            maxFiles={1}
            accept='image/png, image/jpeg, image/gif'
            itemInsertLocation='after'
            imagePreviewHeight='150'
            labelIdle='Image Cover <span class="filepond--label-action">Browse</span>'
          />
        </Grid>
        <Grid item xs={12} md={9}>
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
            onClick={() => setIsOpenAddHotel(true)}
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
                <TableRow key={1}>
                  <TableCell align='center' component='th' scope='row'>
                    Plaza
                  </TableCell>
                  <TableCell className={classes.name} align='center'>
                    123, Ha Noi
                  </TableCell>
                  <TableCell align='center'>Day 1</TableCell>
                  <TableCell align='center'>2 days</TableCell>
                  <TableCell align='center'>
                    <EditIcon />
                  </TableCell>
                </TableRow>
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
            onClick={() => setIsOpenAddLocation(true)}
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
                  <TableCell align='center'>Location</TableCell>
                  <TableCell align='center'>Address</TableCell>
                  <TableCell align='center'>Start Day</TableCell>
                  <TableCell align='center'>Description</TableCell>
                  <TableCell align='center'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1}>
                  <TableCell align='center' component='th' scope='row'>
                    Plaza
                  </TableCell>
                  <TableCell className={classes.name} align='center'>
                    123, Ha Noi
                  </TableCell>
                  <TableCell align='center'>Day 1</TableCell>
                  <TableCell align='center'>2 days</TableCell>
                  <TableCell align='center'>
                    <EditIcon />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container item sm={12} md={12} justifyContent='flex-end'>
        <Button variant='outlined' color='primary' className='mr-20'>
          Cancel
        </Button>
        <Button color='primary' variant='contained'>
          Submit
        </Button>
      </Grid>

      <HotelAddModal
        isOpen={isOpenAddHotel}
        handleCloseDialogAddHotel={handleCloseDialogAddHotel}
      />

      <LocationAddModal
        isOpen={isOpenAddLocation}
        handleCloseDialogAddLocation={handleCloseDialogAddLocation}
      />
    </>
  );
};

export default TourAdd;
