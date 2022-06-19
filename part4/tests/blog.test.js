const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []  
  const result = listHelper.dummy(blogs)
  expect(result).toBe()
})

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]
  
    test('when list has only one blog, equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })
  })


describe('favorite blog', () => {
    const mostLikedBlog = {
        _id: "62af83fa49bdd2e8ba5f3089",
        title: "Y's Another Blog Title",
        author: "YW",
        url: "https://www.yw.blog.com",
        likes: 546,
        __v: 0
        }
    const listWithTwoBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      },
      mostLikedBlog
    ]
  
    test('when list has two blog, returns the most liked vote', () => {
      const result = listHelper.favoriteBlog(listWithTwoBlog)
      expect(result).toBe(mostLikedBlog)
    })
  })

  describe('author with most blogs', () => {
    const listOfBlogs = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      },
      {
        _id: "62af83fa49bdd2e8ba5f3089",
        title: "Y's Another Blog Title",
        author: "YW",
        url: "https://www.yw.blog.com",
        likes: 546,
        __v: 0
      }
    ]
  
    test('show return name and blog numbers of the author with the most blogs', () => {
      const result = listHelper.mostBlogs(listOfBlogs)
      expect(result).toBe("Edsger W. Dijkstra,2")
    })
  })


  describe('author with most likes', () => {
    const listOfBlogs = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      },
      {
        _id: "62af83fa49bdd2e8ba5f3089",
        title: "Y's Another Blog Title",
        author: "YW",
        url: "https://www.yw.blog.com",
        likes: 546,
        __v: 0
      }
    ]
  
    test('show return name and like number of the author with the most likes', () => {
      const result = listHelper.mostLikes(listOfBlogs)
      expect(result).toBe("YW,546")
    })
  })