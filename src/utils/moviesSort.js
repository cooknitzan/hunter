function moviesSort(movies) {
  let temp = movies.reduce((enc, elm) => {
    elm?.genres.forEach((genre) => {
      if (!enc[genre]) {
        enc[genre] = [elm];
      } else {
        const movieIndex = enc[genre].findIndex(
          (movie) => movie.rating.average < elm.rating.average
        );
        if (movieIndex != -1) {
          enc[genre].splice(movieIndex, 0, elm);
          if (enc[genre].length > 10) {
            enc[genre].splice(enc[genre].length - 1, 1);
          }
        }
      }
    });
    return enc;
  }, {});
  return temp;
}
export default moviesSort;
