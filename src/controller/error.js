exports.client = (req, res) => {
    res.render('error', {
      status: 404,
      errormsg: 'Page Not Found',
    });
  };
  exports.server = (err, req, res, next) => {
    res.render('error', {
      status: 500,
      errormsg: err.msg,
    });
  };
  