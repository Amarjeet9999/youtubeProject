/** @format */
let video_div = document.getElementById("videoesYoutube");
async function showVideoes() {
  let q = "google";
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyC7DLjrFfkeFkFJn5ITjrlKTIzI-d3nFmc&maxResults=25&order=viewcount`
  );
  let data = await res.json();
  //

  let { items } = data;
  items = items.filter((el) => {
    return el.id.videoId != undefined;
  });
  items.forEach(({ id: { videoId } }) => {
    let div = document.createElement("div");
    div.setAttribute("id", "divVideoes");
    div.style.margin = "auto";
    div.style.marginTop = "15px";
    div.innerHTML = `<iframe width="280" height="160" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    video_div.appendChild(div);
  });
}
showVideoes();

//For search bar
let video = document.getElementById("videoesYoutube");
async function findVideoes() {
  video.innerHTML = null;
  let q = document.getElementById("search").value;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyC7DLjrFfkeFkFJn5ITjrlKTIzI-d3nFmc&maxResults=20`
  );
  let data = await res.json();
  let { items } = data;
  items = items.filter((el) => {
    return el.id.videoId != undefined;
  });
  items.forEach(({ id: { videoId } }) => {
    console.log(videoId);

    let div = document.createElement("div");
    div.style.margin = "auto";
    div.style.marginTop = "15px";
    div.innerHTML = `<iframe width="280" height="160" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    video.appendChild(div);
  });
}

//For selector
// let videoOnSelector = document.getElementById("videoesYoutube");
// async function findVideoesOnSelector() {
//   video.innerHTML = null;
//   let q = document.getElementById("search").value;
//   let res = await fetch(
//     `https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyCMwhDVtzPB9hBVEusVhzudOQIynX8iOuI&maxResults=20`
//   );
//   let data = await res.json();
//   let { items } = data;
//   items = items.filter((el) => {
//     return el.id.videoId != undefined;
//   });
//   items.forEach(({ id: { videoId } }) => {
//     console.log(videoId);

//     let div = document.createElement("div");
//     div.style.margin = "auto";
//     div.style.marginTop = "15px";
//     div.innerHTML = `<iframe width="280" height="160" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

//     videoOnSelector.appendChild(div);
//   });
// }

function home() {
  window.location.href = "index.html";
}
