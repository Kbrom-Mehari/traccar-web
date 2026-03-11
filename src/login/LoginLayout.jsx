import { useMediaQuery, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import LogoImage from './LogoImage';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    // This will now switch between light and dark automatically
    backgroundColor: theme.palette.background.default, 
  },
  sidebar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
    paddingBottom: theme.spacing(5),
    width: theme.dimensions.sidebarWidth,
    [theme.breakpoints.down('lg')]: {
      width: theme.dimensions.sidebarWidthTablet,
    },
    [theme.breakpoints.down('sm')]: {
      width: '0px',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  form: {
    maxWidth: theme.spacing(92),
    width: '130%',
    padding: theme.spacing(5),
    // This ensures the card stays white in light mode and dark grey/black in dark mode
    backgroundColor: theme.palette.background.paper, 
    borderRadius: theme.spacing(2), 
    // Adjusting shadow for dark mode visibility
    boxShadow: theme.palette.mode === 'dark' 
      ? '0px 10px 30px rgba(0, 0, 0, 0.5)' 
      : '0px 10px 30px rgba(0, 0, 0, 0.08)', 
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const LoginLayout = ({ children }) => {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <main className={classes.root}>
      {/* <div className={classes.sidebar}>
        {!useMediaQuery(theme.breakpoints.down('lg')) && (
          <LogoImage color={theme.palette.secondary.contrastText} />
        )}
      </div> */}
      <Paper className={classes.paper}>
        <form className={classes.form}>{children}</form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
