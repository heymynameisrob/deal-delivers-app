import React, {useState, useEffect} from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Markdown from "react-markdown";

import {Nav, Header} from '../components/Headers';
import { LoadingSpinner } from '../components/Helpers';
import { Container, PostContainer } from '../components/Layout';
import { useData } from '../context/DataProvider';

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
      <Container>
        {blogPosts.map(post => {
          const {title, id} = post;
          return(
            <a href={`/blog/${id}`}>{title}</a>
          )
        })}
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
        <h1>{title}</h1>
        <p>{date}</p>
      </Header>
     <PostContainer>
      <Markdown source={content} escapeHtml={false} />
     </PostContainer>
    </>
  )
}
