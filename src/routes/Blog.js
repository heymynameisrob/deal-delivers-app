import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from "react-markdown";

import {Nav, Header} from '../components/Headers';
import { LoadingSpinner } from '../components/Helpers';
import { Container, Grid, PostContainer } from '../components/Layout';
import { useData } from '../context/DataProvider';
import { BlogCard } from '../components/Cards';

export const Blog = () => {

  const {getPosts, blogPosts} = useData();

  useEffect(() => {
    getPosts();
  }, []);

  if (blogPosts.length < 1) {
    return <LoadingSpinner fixed={true} />
  }

  return(
    <>
      <Nav />
      <Header>
        <h1>Blog</h1>
      </Header>
      <Container style={{ marginTop: '-3rem', paddingBottom: '6rem' }}>
       <Grid cols={3}>
        {blogPosts.map(post => {
            const {title, date, id, cover} = post;
            return(
              <Link to={`/blog/${id}`} key={id} style={{ textDecoration: 'none'}}>
                <BlogCard                
                  title={title}
                  date={date}
                  cover={cover || "https://placehold.it/400x400"}
                />
              </Link>
            )
          })}
       </Grid>
      </Container>
    </>
  )
}

export const Post = (props) => {
  const {id} = useParams();  
  const [post, setPost] = useState({});
  const [postExists, setPostExists] = useState(null);
  const {getPosts, blogPosts} = useData();

  useEffect(() => {
    getPosts();
  }, []);

  if (blogPosts.length < 1) {
    return <LoadingSpinner fixed={true} />
  }

  const thisPost = blogPosts.find(x => x.id === id);
  const {title, date, content} = thisPost;
  
  return(
    <>
      <Nav />
      <Header>
        <Link to="/blog" style={{ color: '#fff', marginBottom:'1.5rem' }}>← Go Back</Link>
        <h1>{title}</h1>
        <p>{date}</p>
      </Header>
     <PostContainer>
      <Markdown source={content} escapeHtml={false} />
     </PostContainer>
    </>
  )
}
