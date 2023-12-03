import React from "react";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Blog() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        // try to fetch data
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = (await response.json()) as Post[];
        // if it's successful, it will set the post
        setPosts(posts);

        // Find the post with ID 2
        const postWithId2 = posts.find((post) => post.id === 2);
        setSelectedPost(postWithId2);
      } catch (e: any) {
        // if there's an error it's going to handle the error
        setError(e);
      } finally {
        // error or not, it will always set is loading to true
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <Container>Something went wrong! Please try again.</Container>;
  }

  // Display only the latest 3 posts in the right column
  const latestFivePosts = posts.slice(0, 3);

  // Function to truncate text to a specified number of words
  const truncateText = (text: string, numWords: number) => {
    const words = text.split(" ");
    return words.slice(0, numWords).join(" ");
  };

  const alertClicked = () => {
    alert("Sorry, we are down for maintenance😢");
  };

  return (
    <div className="space-top">
      <Row>
        <p className="post-info">This data is for display purposes only**</p>
        <Col className="mb-2">
          {selectedPost && (
            <Card>
              <Card.Body>
                <h5>Title: {selectedPost.title}</h5>
                <p>{selectedPost.body}</p>
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col xs lg="3">
          <Card>
            <Card.Header>Popular Posts</Card.Header>
            <ListGroup variant="flush">
              {latestFivePosts.map((post) => {
                return (
                  <ListGroup.Item key={post.id} className="custom-list-group-item" onClick={alertClicked}>
                    <h5>{truncateText(post.title, 4)}</h5>
                    <p>{truncateText(post.body, 8)}..</p>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
