import React, { Component } from "react";
import ls from "local-storage";
class Designform extends Component {
  constructor(props) {
    super(props);
    const getProducts = ls.get("products");
    this.state = {
      designName: "",
      designId: "",
      designCategory: "",
      designType: "",
      img: [],
      products: getProducts || []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      designName: this.state.designName,
      designId: this.state.designId,
      designCategory: this.state.designCategory,
      designType: this.state.designType,
      img: this.state.img
    });

    const currentState = this.state.products;
    const newStateProducts = [
      ...currentState,
      [
        { designName: this.state.designName },
        { designId: this.state.designId },
        { designCategory: this.state.designCategory },
        { designType: this.state.designType },
        { img: this.state.img },
        { status: "sampling" }
      ]
    ];
    this.setState({ products: newStateProducts }, () =>
      ls.set("products", this.state.products)
    );

    this.setState({
      designName: "",
      designId: "",
      designCategory: "",
      designType: "",
      img: ""
    });
    window.location.reload();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ img: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  render() {
    return (
      <div className="product-Form">
        <div className="product-Image">
          <img src={this.state.img} id="bannerImg" />
          <img
            src={this.props.item[4].img}
            alt=""
            style={this.props.item ? { display: "block" } : { display: "none" }}
          />
        </div>
        <div className="input-Fields">
          <form>
            <label>Design Name*</label>
            <br />
            <input
              type="text"
              value={this.props.item[0].designName}
              size="50"
              name="designName"
              onChange={this.handleChange}
            />
            <br />
            <label>Design Id*</label>
            <br />
            <input
              type="text"
              value={this.props.item[1].designId}
              name="designId"
              size="20"
              onChange={this.handleChange}
            />
            <br />
            <label> Design Category*</label>
            <br />
            <select
              name="designCategory"
              onChange={this.handleChange}
              style={{
                marginLeft: "1rem",
                backgroundColor: "white",
                padding: "0.5rem 0.5rem"
              }}
            >
              <option value="Men">Men</option>
              <option value="Kids">Kids</option>I
              <option value="Women">Women</option>
              <option value="Decor">Decor</option>
              <option defaultValue={this.props.item[2].designCategory} />
            </select>
            <select
              name="designType"
              onChange={this.handleChange}
              style={{
                marginLeft: "1rem",
                backgroundColor: "white",
                padding: "0.5rem 0.5rem",
                marginTop: "0.5rem"
              }}
            >
              <option value="Westernwear">Western Wear</option>
              <option value="Ethnic">Ethnic</option>
              <option value="Footwear">Footwear</option>
              <option value="Watch">Watches and Wearables</option>
              <option defaultValue={this.props.item[3].designType} />
            </select>
            <input
              type="file"
              onChange={this.onImageChange}
              className="filetype"
              id="group_image"
            />

            <br />
            <input
              type="submit"
              value="Add design"
              id="submitBtn"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Designform;
