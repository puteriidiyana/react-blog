import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <>
      <div className="grid-container">
        <div className="item1 about-bg"></div>
        <div className="about-text">
          <h4>A Solo Traveler's Chronicle</h4>
          <p>
            A travel blogger based in Malaysia. Embarking on the journey of a lifetime, I have embraced the world as my playground, traversing landscapes, cultures, and emotions. As a solo traveler, I've come to realize that the true
            essence of a place is best discovered when one is unburdened by schedules and expectations.
          </p>
          <p>In this blog, I invite you to join me on my adventures, as I share tales of self-discovery, unexpected encounters, and the sheer joy of wandering.</p>
        </div>
        <div className="about-text">
          <Row>
            <Col>
              <h4>Personal Info</h4>
              <p>📝 Puteri Diyana Syazwani</p>
              <p>📌 Bangsar, Kuala Lumpur</p>
              <p>👶🏻 Hospital Kluang, Johor</p>
            </Col>
            <Col>
              <h4>Fun Fact</h4>
              <p>✨ The bravest I have ever done is riding a cable car.</p>
              <p>✨ One of my favorite places to go is island.</p>
              <p>✨ Tortoise is my pet.</p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
