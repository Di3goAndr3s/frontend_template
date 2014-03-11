'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var prompts = [{
  type: 'confirm',
  name: 'someOption',
  message: 'Would you like to enable this option?',
  default: true
}];

