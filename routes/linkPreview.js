var qs = require('querystring');
var express = require('express');
var router = express.Router();
var request = require('request');
var moment = require('moment');
var cors = require('cors');
var cheerio = require('cheerio');


var config = require('../config');


router.route('/linkPreview')
  .post(function (req, res, next) {
    console.log(req);
  request.get(req.body.link, function (err, response, html) {
    if(err) {return next(err); }

    var $ = cheerio.load(html);
    var description = $('meta[name="description"]').attr('content');
    var photo = $('body img').first().attr('src');
    var preview = {
      description: description,
      photo: /^(http|https)?(:\/\/)?(www)?.?[a-z0-9-]+(.|:)([a-z0-9-]+)+([\/?].*)?$/.test(photo)
        ? req.body.link + photo
        : photo
    };

    res.status(200).json(preview);
  });
});



module.exports = router;
