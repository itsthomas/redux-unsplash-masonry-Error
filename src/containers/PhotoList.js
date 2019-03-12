import React, { Component } from "react";
import { connect } from "react-redux";
// import Masonry from "react-masonry-css";
import { fetchPhotos } from "../actions/photoActions";
import Masonry from "react-masonry-component";
import SinglePhoto from "../components/SinglePhoto";

const masonryOptions = {
  transitionDuration: 1
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

// const breakpointColumnsObj = {
//   default: 3,
//   // 1100: 3,
//   800: 2,
//   500: 1
// };

class PhotoList extends Component {
  renderPhotos() {
    console.log("From PhotoList: ", this.props);

    // Destructuring. we put this.props.photos in photos
    const { photos } = this.props;

    if (this.props.hasError) {
      return <div className="error">There was an error loading the items</div>;
    }

    if (this.props.isLoading) {
      return <div className="loader" />;
    }

    return photos.map(photo => {
      const url = photo.urls.full;
      const id = photo.id;
      const alt = photo.description;
      return <SinglePhoto url={url} key={id} alt={alt} />;
    });
  }

  render() {
    return (
      // <Masonry
      //   breakpointCols={breakpointColumnsObj}
      //   className="masonry-grid"
      //   columnClassName="masonry-grid_column"
      // >
      //   {this.renderPhotos()}
      // </Masonry>

      <Masonry
        className={"masonry"} // default ''
        elementType={"ul"} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {this.renderPhotos()}
      </Masonry>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    hasError: state.hasError,
    isLoading: state.isLoading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchPhotos)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);
