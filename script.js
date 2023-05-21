//Create Browser Bookmark and place the code bellow as the URL

javascript: {
  const params = new URLSearchParams(window.location.search);
  const videoId = params.get('v');

  if (videoId == undefined) {
    alert('Not Valid')
  }
  else
    window.open(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, "_blank");
}


