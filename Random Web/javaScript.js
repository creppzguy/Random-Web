var randomlinks = [];
randomlinks[0]="https://www.youtube.com/watch?v=uFJHdT_ie9U";
randomlinks[1]="https://www.youtube.com/watch?v=LYI3eegIJlI";
randomlinks[2]="https://www.youtube.com/watch?v=2SVDVhzzzSY";
randomlinks[3]="https://www.youtube.com/watch?v=9TjXanLjpTU";
randomlinks[4]="https://www.youtube.com/watch?v=7hZS3N_FWPI";
randomlinks[5]="https://www.youtube.com/watch?v=Lq9eqHDKJPE";
randomlinks[6]="https://www.youtube.com/watch?v=dQw4w9WgXcQ0";
randomlinks[7]="https://www.youtube.com/watch?v=3cqV5BKJHyk";
randomlinks[8]="https://www.youtube.com/watch?v=goXDAFtkJLw";
randomlinks[9]="https://www.youtube.com/watch?v=PTn23s0BjEo";
randomlinks[10]="https://www.youtube.com/watch?v=RunM5a7otLA";
randomlinks[11]="https://www.youtube.com/watch?v=-GqahEAOhfU";


function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}