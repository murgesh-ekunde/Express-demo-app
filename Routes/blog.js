const express = require("express");
const path = require("path");
const router = express.Router()
const blogs = require('../data/blogs')

router.get('/', (req,res)=>{
    // res.sendFile(path.join(__dirname, '../Templates/index.html'))
    res.render('home')
})

router.get('/blog', (req,res)=>{
    // res.sendFile(path.join(__dirname, '../Templates/blogHome.html'))
    res.render('blogHome', {
        blogs: blogs
    });
})

router.get('/blogpost/:slug', (req,res)=>{
    const myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    res.render('blogPage', {
        title : myBlog[0].title,
        content: myBlog[0].content
    });
    // res.sendFile(path.join(__dirname, '../Templates/blogPage.html'))
})

module.exports = router