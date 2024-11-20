const express = require('express')
const passport = require('passport')
const router = express.Router()


// @desc   Auth with Google
// @route  GET / auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc   Google auth callback
// @route  GET /auth/google/callback
router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash: true
    })
)

// @desc   Logout user
// @route  GET /auth/logout
router.get('/logout', (req, res, cb) => {
    req.logOut((err) => {
        if (err) { return cb(err) }
        res.redirect('/')
    }
    )
})


module.exports = router