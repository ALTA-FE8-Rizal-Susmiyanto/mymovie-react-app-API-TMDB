import axios from "axios";
import React, { Component } from "react";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";

// Deklarasi
export class Trending extends Component {
  state = {
    myFilm: [],
    gambar: "https://image.tmdb.org/t/p/original/",
  };

  //   Nembak API TMDB
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=d009c42a6eb810eaee17a3f92c5f0cf9&language=en-US&page=1"
      )
      .then((response) => {
        console.log(response.data.results);
        //   API ke state
        this.setState({
          myFilm: response.data.results,
        });
      });
  }
  render() {
    return (
      <div className="myTrending">
        <Container>
          <Row md={4}>
            {/* myFilm data dari state */}
            {this.state.myFilm.map((value, index) => {
              return (
                <Col key={index}>
                  <Card className="mb-4" style={{ width: "15rem" }}>
                    <Card.Img
                      variant="top"
                      src={this.state.gambar + value.backdrop_path}
                    />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        Rating : {value.vote_average}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Release : {value.release_date}
                      </ListGroup.Item>
                    </ListGroup>
                    <button className="button"> Details </button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Trending;
