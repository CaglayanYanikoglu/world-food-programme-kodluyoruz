import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '',
      tempData: []
    };
  }

  addPost = () => {
    this.setState({
      posts: [...this.state.posts, {
        title: 'New post',
        body: 'This is a new post'
      }]
    });
  }

  getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({ posts: json}));
  }

/*   componentDidMount() {
    this.getPosts();
  } */

  filterPosts = (e) => {
    console.log(e);
    this.setState({
      search: e.target.value
      // tempData: filteredData
    })
  };


  render() {
    const filteredData = this.state.posts.filter(post => post.title.toLowerCase().includes(this.state.search.toLowerCase()));
    return (
      <div>
        <h1>Posts</h1>
        <button onClick={this.addPost}>Add new post</button>
        <button onClick={this.getPosts}>Get all posts</button>
        <div>
          <input type="text" value={this.state.search} onChange={this.filterPosts} placeholder="Search" style={{ marginTop: '20px', fontSize: '30px' }} />
        </div>
        <ul>
          {filteredData.map(post => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default Home;
