import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExtensionIcon from "@material-ui/icons/Extension";
import CheckIcon from "@material-ui/icons/Check";
import WorkIcon from "@material-ui/icons/Work";
import ReportIcon from "@material-ui/icons/Report";
import HelpIcon from "@material-ui/icons/Help";
import { optionsMenu, helpMenu } from "./lateralMenu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ListItem, Input, Button } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  FormControl:{
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button:{
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },
  "appBarShift-right": {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },
  "content-right": {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  },

});

class PersistentDrawer extends React.Component {
  state = {
    open: false,
    anchor: "left",
    gasto: "",
    saldo: "",
    name: "",
    lastname: ""
  };
  //function that open menu
  openMenu = () => {
    this.setState({ open: true });
  };
  //function that close menu
  closeMenu = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value
    });
  };
  listenerValues = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  getValues = () => {
    if (
      this.state.name === "" ||
      this.state.lastname === "" ||
      this.state.gasto === "" ||
      this.saldo === ""
    ) {
      alert("Llena todos los campos antes de enviar");
    } else {
      const { name, lastname, gasto, saldo } = this.state;
      let total = 0;
      console.log("saldo: ",saldo)
      console.log("name: ",name);
      console.log("lastname: ", lastname);
      console.log("gasto: ",gasto);
      total = saldo - gasto;
      console.log(total);
    }
  };
  //function for on enter event
  enterEvent = (event) => {            
    event.preventDefault();
    if (event.keyCode===13){
        this.getValues();
    }
    else{
    }
  }
  ctrlEvent = (event) => {

      if (event.ctrlKey){
          alert("ctrl "+event.which+" fue presionada keyCode"+event.keyCode)
          
      }
      
      
  }

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          {/*icon that close onClick*/}
          <IconButton onClick={this.closeMenu}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <Divider />

        <List>{optionsMenu}</List>

        <Divider />

        <List>{helpMenu}</List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === "left") {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.openMenu}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Caja V 0.0.0.1
              </Typography>
            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(
              classes.content,
              classes[`content-${anchor}`],
              {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open
              }
            )}
          >
            <div className={classes.drawerHeader} />

            <Typography>{"Welcome to the ..."}</Typography>

            <form className={classes.container} onKeyUp={this.ctrlEvent}>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.listenerValues("name")}
                margin="normal"
              />
              <TextField
                id="lastname"
                label="LastName"
                className={classes.textField}
                value={this.state.lastname}
                onChange={this.listenerValues("lastname")}
                margin="normal"
              />

              <br />

              <FormControl className={classes.margin}>
                <InputLabel htmlFor="adornment-gasto">Saldo</InputLabel>
                <Input
                  id="Saldo"
                  value={this.state.saldo}
                  type="number"
                  onChange={this.listenerValues("saldo")}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>
              <br />
              <br />
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="adornment-gasto">Gasto</InputLabel>
                <Input
                  id="gasto"
                  value={this.state.gasto}
                  type="number"
                  onChange={this.listenerValues("gasto")}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }                  
                />
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                classes={classes.button}
                onClick={this.getValues}
              >
                Send
              </Button>
            </form>

            {/* <Input
              id="money"
              value={this.state.gasto}
              saldo: "",
              label="Monto"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            /> */}
          </main>
          {after}
        </div>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
