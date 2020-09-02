import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import StoreIcon from '@material-ui/icons/Store';

const useStyles = makeStyles((theme) => ({
    listItem: {
        color: theme.palette.primary.main,
    }
}));

const AppDrawer = (props)=> {
    const {open, setDrawerOpen} = props;
    const classes = useStyles();

    const itemList = [
        {
            text: 'Головна',
            path: '/',
            icon: <HomeIcon/>
        },
        {
            text: 'Контакти',
            path: '/contacts',
            icon: <ContactsIcon/>
        },
        {
            text: 'Товари',
            path: '/products',
            icon: <StoreIcon/>
        }
    ];

    const list = itemList.map((item, index)=>{
        return(
                <div key={index}>
                    <Link to={item.path} className={classes.listItem}>
                    <ListItem
                        button
                        onClick={()=>{setDrawerOpen(false)}}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <Typography variant="inherit"> {item.text}</Typography>
                    </ListItem >
                    </Link>
                    <Divider />
                </div>
        )
    });
  return (

          <Drawer
              open={open}
              onClose ={()=>setDrawerOpen(false)}
          >
              <List style={{width:'250px'}}>
                 {list}
              </List>
          </Drawer>
  );
};

export default AppDrawer;
