$(document).ready(function(){

  var pdf_url = $('#book').data('url');

  var bookOptions = {
    height   : 500,
    width    : 800,
    // maxWidth : 800,
    maxHeight : 600,

    centeredWhenClosed : true,
    hardcovers : true,
    pageNumbers: false,
    toolbar : "lastLeft, left, right, lastRight, toc, zoomin, zoomout, slideshow, flipsound, fullscreen, thumbnails, download",
    thumbnailsPosition : 'left',
    responsiveHandleWidth : 50,

    flipSound : false,

    container: true,
    containerPadding: "20px",
    // toolbarContainerPosition: "top" // default "bottom"

    // The pdf and your webpage must be on the same domain
    pdf: pdf_url,

    // Uncomment the option toc to create a Table of Contents
    // toc: [                    // table of contents in the format
    // 	[ "Introduction", 2 ],  // [ "title", page number ]
    // 	[ "First chapter", 5 ],
    // 	[ "Go to codecanyon.net", "http://codecanyon.net" ] // or [ "title", "url" ]
    // ]
  };

  $('#book').wowBook( bookOptions ); // create the book
});