let page_list = ["index", "contact", "manufacturing", "solar_generation", "login"]
// strip away all URL information except the filename, minus .html
let currentpage = document.location.href.split("/").pop().split(".")[0];
console.log(currentpage);

let header = document.getElementById("header");
header.innerHTML = `
<div>
  <nav class="navbar navbar-expand navbar-default fixed-top navbar-dark">
      <a class="navbar-brand" href="../index.html">
        <img class="brand-img" src="/images/sole-zon-solis.png" width="60" height="60" class="d-inline-block align-top" alt="">
      </a>                                      
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><a id="contact" class="nav-item nav-link" href="./contact.html">Contact Us</a></li>
          <li><a id="manufacturing" class="nav-item nav-link" href="./manufacturing.html">Manufacturing</a></li>
          <li><a id="solar_generation" class="nav-item nav-link" href="./solar_generation.html">Solar Generation</a></li>
          <li><a id="login" class="nav-item nav-link" href="./login.html">Login</a></li>
        </ul>
      </div>
  </nav>
</div> 
`
// Index.html path
if (currentpage === "index" || currentpage === '') {
    for (let i = 1; i < page_list.length; i++) {
        let nav_item = document.getElementById(page_list[i])
        nav_item.href = "./pages/" + page_list[i] + ".html";
    }
}
else {
    for (let i = 1; i < page_list.length; i++) {
        let nav_item = document.getElementById(page_list[i])
        if (currentpage === page_list[i]) {
            nav_item.classList.add("active");
            nav_item.ariaCurrent = "page";
        }
    }
}


{/* <div class="icon">
<a class="btn navbar-icon" href="https://github.com/d-kohn">
  <i class="fa fa-github fa-2x"></i>
  <span class="visually-hidden">Github</span>
</a>                                    
<a class="btn navbar-icon" href="https://www.linkedin.com/in/darin-kohn-895296239/">
  <i class="fa fa-linkedin fa-2x"></i>
  <span class="visually-hidden">Linkedin</span>
</a>
</div> */}
