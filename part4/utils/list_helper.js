const dummy = (blogs) => {
    // ...
}

// returns the total sum of likes in all of the blog posts
const totalLikes = (blogList) => {
    const reducer = (sum, item) => {
      return sum + item.likes
    }
    return blogList.reduce(reducer, 0)
}

// finds out which blog has most likes
const favoriteBlog = (blogList) => {
    const voteList = blogList.map(blog => blog.likes)
    const maxVoteIndex = new Array(...voteList).indexOf(Math.max(...voteList))
    return blogList[maxVoteIndex]
}

// the author who has the largest amount of blogs
const mostBlogs = (blogList) => {
    const authurBlogs = new Map()
    blogList.map(blog => {
        const blogNumbers = authurBlogs.has(blog.author) ? authurBlogs.get(blog.author) : 0
        authurBlogs.set(blog.author, blogNumbers + 1)
    })
    const mostBlogAuthor = [...authurBlogs.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)
    return mostBlogAuthor.join(',')
}

// the author, whose blog posts have the largest amount of likes
const mostLikes = (blogList) => {
    const authurLikes = new Map()
    blogList.map(blog => {
        const blogNumbers = authurLikes.has(blog.author) ? authurLikes.get(blog.author) : 0
        authurLikes.set(blog.author, blogNumbers + blog.likes)
    })
    const mostLikeAuthor = [...authurLikes.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)
    return mostLikeAuthor.join(',')
}


module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}