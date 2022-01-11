import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../../../../constants/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: `${DRAWER_WIDTH}px`,
    flexShrink: 0,
  },
  drawerPaper: {
    width: `${DRAWER_WIDTH}px`,
    paddingBottom: 50,
    backgroundColor: theme.palette.background.paper,
  },
  drawerHeader: {
    padding: theme.spacing(1),
    margin: '0 auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  },
  buttonLeaf: {
    display: 'flex',
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: 'auto',
  },
  active: {
    color: theme.palette.secondary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& $icon': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
