import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import Markdown from "react-markdown";

import {Nav, Header} from '../components/Headers';
import { LoadingSpinner } from '../components/Helpers';
import { Container, Grid, PostContainer } from '../components/Layout';
import { useData } from '../context/DataProvider';
import { BlogCard } from '../components/Cards';
import {CustomForm, MailchimpForm} from '../components/Forms';

export const Blog = () => {
  const {getPosts, blogPosts} = useData();

  useEffect(() => {
    getPosts();
  }, []);

  if (blogPosts == null) {
    return <LoadingSpinner fixed={true} />
  }

  return(
    <>
      <Nav />
      <Header>
        <h1>Blog</h1>
      </Header>
      <Container style={{ marginTop: '-3rem', paddingBottom: '6rem' }}>
       {blogPosts.length > 0 ? <PostsGrid posts={blogPosts} /> : <NoPosts />}       
      </Container>
    </>
  )
}

const NoPosts = () => (
  <StyledEmptyState>
    <div>
      <p>📝</p>
      <p>No blog posts...yet</p>
    </div>
  </StyledEmptyState>
)

const PostsGrid = ({posts}) => (
  <Grid cols={3}>
    {posts.map(post => {
        const {title, date, id, cover} = post;
        return(
          <Link to={`/blog/${id}`} key={id} style={{ textDecoration: 'none'}}>
            <BlogCard                
              title={title}
              date={dayjs(date).format('D MMM YYYY')}
              cover={cover || "https://placehold.it/400x400"}
            />
          </Link>
        )
      })}
    </Grid>
)

export const Post = (props) => {
  const {id} = useParams();  
  const [post, setPost] = useState({});
  const [postExists, setPostExists] = useState(null);
  const {getPosts, blogPosts} = useData();

  useEffect(() => {
    getPosts();
  }, []);

  if (blogPosts === null) {
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
        <p>{dayjs(date).format('D MMM YYYY')}</p>
      </Header>
     <PostContainer className="blog-post">
      <Markdown source={content} escapeHtml={false} />      
     </PostContainer>
     <Container style={{paddingTop: '3rem', paddingBottom: '6rem'}}>
      <MailchimpForm />
     </Container>
    </>
  )
}

const StyledEmptyState = styled.div`
  display:grid;
  place-items:center;
  text-align:center;
  height:50vh;
`