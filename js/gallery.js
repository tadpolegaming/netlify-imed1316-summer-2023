// A $( document ).ready() block.
$(document).ready(function () {
  //console.log("ready!");

  $("#imed1316-gallery").nanogallery2({
    //nanogallery
    thumbnailWidth: "300",
    thumbnailHeight: "auto",
    thumbnailBorderVertical: 0,
    thumbnailBorderHoriizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom",
      display: false
    },
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,
    thumbnailAlignment: "center",
    thumbnailOpenImage: true
  });
});
