import { makeStyles, fade } from '@material-ui/core/styles';
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
    marginLeft: `${DRAWER_WIDTH}px`,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuProfile: {
    minWidth: 115,
  },
  textRole: {
    padding: '6px 16px',
    marginBottom: 6,
    fontSize: '14px',
  },
  grow: {
    flexGrow: 1,
  },
  topBarSetting: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
