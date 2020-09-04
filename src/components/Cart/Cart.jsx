// // import React from 'react';
//
//
// // const Cart = ({cartItems, addToCart}) => {
// //     return(
// //         <div>
// //             {cartItems.length === 0
// //                 ? <div>Cart is empty</div>
// //                 : <div> <pre>{JSON.stringify(cartItems, null, 4)}</pre></div>
// //             }
// //         </div>
// //     )
// // };
//
// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
// import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
// import Badge from '@material-ui/core/Badge';
//
// const styles = (theme) => ({
//     root: {
//         minWidth: '768px',
//         margin: 0,
//         padding: theme.spacing(2),
//     },
//     closeButton: {
//         position: 'absolute',
//         right: theme.spacing(1),
//         top: theme.spacing(1),
//         color: theme.palette.grey[500],
//     },
// });
//
// const DialogTitle = withStyles(styles)((props) => {
//     const { children, classes, onClose, ...other } = props;
//     return (
//         <MuiDialogTitle disableTypography className={classes.root} {...other}>
//             <Typography variant="h6">{children}</Typography>
//             {onClose ? (
//                 <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//                     <CloseIcon />
//                 </IconButton>
//             ) : null}
//         </MuiDialogTitle>
//     );
// });
//
// const DialogContent = withStyles((theme) => ({
//     root: {
//         padding: theme.spacing(2),
//     },
// }))(MuiDialogContent);
//
// const DialogActions = withStyles((theme) => ({
//     root: {
//         margin: 0,
//         padding: theme.spacing(1),
//     },
// }))(MuiDialogActions);
//
// export default function Cart({cartItems, addToCart}) {
//     const [open, setOpen] = React.useState(false);
//
//     const handleClickOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//     return (
//         <div>
//             <Button style={{color: "white"}} onClick={handleClickOpen}>
//                     <Badge color="secondary" badgeContent={cartItems.length}>
//                         <CartIcon style={{ fontSize: "2.5rem" }}/>
//                     </Badge>
//             </Button>
//             <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//                 <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//                     Корзина
//                 </DialogTitle>
//                 <DialogContent dividers>
//                     {cartItems.length === 0
//                         ? <div>Cart is empty</div>
//                         : <div> <pre>{JSON.stringify(cartItems, null, 4)}</pre></div>
//                     }
//                 </DialogContent>
//                 <DialogActions>
//                     <Button color="secondary">
//                         Оформити замовлення
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }

////////////////////////////////////////////////////
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import CartItem from "./CartItem";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    container:{
        justifyContent: 'space-between'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Cart({cartItems, addToCart}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="secondary" onClick={handleClickOpen}>
                <Badge color="secondary" badgeContent={cartItems.length}>
                    <CartIcon style={{ fontSize: "2.5rem" }}/>
                </Badge>
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Корзина
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            закрити
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem className={classes.container}>
                    <div>photo</div>
                    <div>name</div>
                    <div>count</div>
                    <div>price</div>
                    </ListItem>
                    {cartItems.length === 0
                        ? <div>Cart is empty</div>
                        : cartItems.map((item)=> <CartItem cartData={item} addToCart={addToCart}/>)
                    }

                </List>
            </Dialog>
        </div>
    );
}