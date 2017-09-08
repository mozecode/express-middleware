'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./chickens'));
// router.use(require('./eggs'));


router.get('/', (req, res)=>{//if homepage, show this
    res.json({
        "chickens":"/see-our-chickens",
        "eggs":"/see-our-eggs"
    });
});
module.exports = router;