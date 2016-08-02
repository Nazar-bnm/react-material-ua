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
  underlineStyle: {
    borderColor: '#f85252'
  },
  focusStyle: {
    borderColor: deepOrange500,
    color: deepOrange500
  },
  labelStyle: {
    color: deepOrange500
  }
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
    const buttonStyle = {
      marginRight: 16
    }

    const buttonLabel = {
      color: 'white'
    }

    const cancelLabel = {
      color: '#f85252'
    }

    const actions = [
      <FlatButton
        label="Cancel"
        labelStyle={cancelLabel}
        style={buttonStyle}
        hoverColor="#d4d4d4"
        onTouchTap={this.handleRequestClose}
      />,
      <FlatButton
        label="Sign In"
        backgroundColor= '#35cd76'
        hoverColor="#5db181"
        labelStyle={buttonLabel}
        style={buttonStyle}
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
              fullWidth={true}
              style={textFieldStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.focusStyle}
              floatingLabelStyle={styles.labelStyle}
              floatingLabelFocusStyle={styles.focusStyle}
            />

            <TextField
              floatingLabelText="Password"
              type="password"
              ref="password"
              fullWidth={true}
              style={textFieldStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.focusStyle}
              floatingLabelStyle={styles.labelStyle}
              floatingLabelFocusStyle={styles.focusStyle}
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
