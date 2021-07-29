/** @format */
let video_div = document.getElementById("mainVideoes");
async function showVideoes() {
  let q = "swanand kadam";
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyC7DLjrFfkeFkFJn5ITjrlKTIzI-d3nFmc&maxResults=25`
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
    div.style.marginTop = "40px";
    div.style.margin = "auto";
    div.style.marginTop = "40px";
    div.innerHTML = `<iframe width="280" height="160" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    video_div.appendChild(div);
  });
}
showVideoes();

// let mainDivVideo = document.getElementById("mainVideoes");

// async function findVideoes() {
//   mainDivVideo.innerHTML = null;
//   let q = document.getElementById("search").value;
//   let res = await fetch(
//     `https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyBdXe5uB4AZ3-tUWvlRayH4rvgNgMbY1cg&maxResults=15`
//   );
//   let data = await res.json();
//   let { items } = data;
//   items = items.filter((el) => {
//     return el.id.videoId != undefined;
//   });
//   items.forEach(({ id: { videoId } }) => {
//     console.log(videoId);

//     let div = document.createElement("div");
//     div.setAttribute("id", "divVideoes");
//     div.style.marginTop = "40px";
//     div.style.margin = "auto";
//     div.style.marginTop = "40px";
//     div.innerHTML = `<iframe width="280" height="160" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

//     mainDivVideo.appendChild(div);
//   });
// }
