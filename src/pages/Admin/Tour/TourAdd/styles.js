import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  myFilePond: {
    '& .filepond--item': {
      width: 'calc(100% - 0.5em)',
    },
  },
  [theme.breakpoints.up('sm')]: {
    myFilePond: {
      '& .filepond--item': {
        width: 'calc(50% - 0.5em)',
      },
    },
  },
  [theme.breakpoints.up('md')]: {
    myFilePond: {
      '& .filepond--item': {
        width: 'calc(33.33% - 0.5em)',
      },
    },
  },
  modalAddHotel: {
    marginRight: 10,
  },
  icon: {
    cursor: 'pointer',
    fontSize: 20,
  },
}));

export default useStyles;
