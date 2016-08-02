import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  }
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />,
      <FlatButton
        label="Login"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    ];

    const dialogStyle = {
      maxWidth: 450
    }

    const textFieldStyle = {
      display: 'block',
      margin: 'auto auto'
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Sign in"
            actions={actions}
            onRequestClose={this.handleRequestClose}
            contentStyle={dialogStyle}
            className="dialog"
          >

            <TextField
              floatingLabelText="Email"
              type="email"
              ref="email"
              style={textFieldStyle}
            />

            <TextField
              floatingLabelText="Password"
              type="password"
              ref="password"
              style={textFieldStyle}
            />

          </Dialog>
          <h1>You are not authenticated</h1>
          <RaisedButton
            label="Sign in"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
