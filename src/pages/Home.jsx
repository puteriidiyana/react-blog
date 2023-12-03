import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <>
      <div className="home-bg"></div>
      <div className="home-bg-text">
        <h1>Explore . Dream . Discover</h1>
        <Button variant="outline-light" size="sm" href="/blog">
          Start Exploring
        </Button>{" "}
      </div>
    </>
  );
}
