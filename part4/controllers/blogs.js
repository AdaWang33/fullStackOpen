const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
    Blog.find({}).then(blogs => {
    response.json(blogs)
  })
})

blogsRouter.post('/', (request, response, next) => {
  const blog = new Blog ({
    title: request.body.title,
    author: request.body.author,
    url: request.body.url,
    likes: request.body.likes,
    id: Math.floor(Math.random() * 10000)
  })
  blog
    .save()
    .then(savedBlog => {
      response.status(201).json(savedBlog)
    })
    .catch(error => next(error))
})

module.exports = blogsRouter