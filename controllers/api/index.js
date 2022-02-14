const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
// const dashboardRoutes = require('./dashboardRoutes');
const userRoutes = require('./userRoutes');


router.use('/blog_post', blogRoutes);
//router.use('./dashboard', dashboardRoutes);
router.use('./users', userRoutes)

module.exports = router;