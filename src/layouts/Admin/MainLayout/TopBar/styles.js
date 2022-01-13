import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../../../../constants/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.light,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuLanguage: {
    color: '#fff',
  },
  menuProfile: {
    minWidth: 115,
  },
  topBar_setting: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  textRole: {
    padding: '6px 16px',
    marginBottom: 6,
    fontSize: '1rem',
  },
}));

export default useStyles;
