const express = require('express');
const router = express.router();


const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {
  BlogPosts
} = require('./models');

BlogPosts.create(
  '10 things -- you won\'t believe #4', lorem(), 'Billy Bob');
BlogPosts.create(
  'Lions and tigers and bears oh my', lorem(), 'Lefty Lil');