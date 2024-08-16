const getPosts = async () => {
  let lista = "";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    data.forEach((element) => {
      lista += `<li><p>${element.body}</p></li>`;
    });
    document.querySelector("#post-data").innerHTML = `<ul>${lista}</ul>`;
  } catch (error) {
    console.log(error);
    console.log("Error al traer los posts");
    document.querySelector(
      "#post-data"
    ).innerHTML = `<p>Error al traer los posts</p>`;
  }
};