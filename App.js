/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';

import { MainApp } from './src/Main';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://b6284b54ab804316870234b0c1f02d58@sentry.io/1264733').install();


class App extends Component {
  render() {
    return <MainApp />
  }
}

export { App };
