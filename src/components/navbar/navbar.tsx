import React,{useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Drawer,List,Divider} from '@material-ui/core'
import { mainListItems } from './mainListItems';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }
  }),
);

export default function Navbar() {
  const classes = useStyles();

  const [drawerOpen,setDrawerOpen]= useState<boolean>(false)
  const handleDrawer=()=>{
    setDrawerOpen((prv) => !prv)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
          
        <Toolbar variant="dense">
          <IconButton onClick={handleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Nav
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" open={drawerOpen} onClose={handleDrawer}>       
          <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer} >
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <List>{mainListItems}</List>
      </Drawer>
    </div>
  );
}