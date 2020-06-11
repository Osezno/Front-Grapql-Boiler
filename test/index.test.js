//var assert = require('assert');

import { shallow, mount, render } from 'enzyme'
import { ApolloProvider } from "@apollo/client"
import React from 'react'
import expect from 'expect.js'
import client from "../config/apollo"
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import '../mocha.setup';

import App from '../pages/index.js'


describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ApolloProvider>)

    expect(app.render().find('h2').text()).to.equal('HELLO WORLD')
  })
})