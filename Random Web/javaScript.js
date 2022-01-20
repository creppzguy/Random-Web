var randomlinks = [];
randomlinks[0]="https://www.youtube.com/watch?v=uFJHdT_ie9U";
randomlinks[1]="https://www.youtube.com/watch?v=LYI3eegIJlI";
randomlinks[2]="https://www.youtube.com/watch?v=2SVDVhzzzSY";
randomlinks[3]="https://www.youtube.com/watch?v=9TjXanLjpTU";
randomlinks[4]="https://www.youtube.com/watch?v=7hZS3N_FWPI";
randomlinks[5]="https://www.youtube.com/watch?v=Lq9eqHDKJPE";


function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}