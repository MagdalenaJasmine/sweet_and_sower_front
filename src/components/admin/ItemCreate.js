import React from "react";
import { Container, Card } from "react-bootstrap";

const API_ROOT = "http://localhost:3000";
const token = localStorage.getItem("token");

class ItemCreate extends React.Component {
  state = {
    file: null,
  };

  handleFile(e) {
    let file = e.target.files[0];
    this.setState({ file: file });
  }

  handleUpload(e) {
    let file = this.state.file;
    const formData = new FormData();
    formData.append("file", file);

    let options = {
      method: "POST",
      headers: { Authorization: token },
      body: formData,
    };

    fetch(`${API_ROOT}/items`, options).then((resp) => {
      this.props.history.push("/menues");
    });
  }

  render() {
    return (
      <Container>
        <Card>
          <div className="upload">
            <h1 className="card_title">Upload Menu Items</h1>

            <form>
              <div className="">
                <div>
                  <label className="card_text">Please Select a File:</label>
                </div>
                <input
                  className="card_text"
                  type="file"
                  name="file"
                  onChange={(e) => this.handleFile(e)}
                />
              </div>
              <br />
              <button
                type="button"
                className="button"
                onClick={(e) => this.handleUpload(e)}
              >
                {" "}
                Upload File{" "}
              </button>
            </form>
          </div>
        </Card>
      </Container>
    );
  }
}

export default ItemCreate;
