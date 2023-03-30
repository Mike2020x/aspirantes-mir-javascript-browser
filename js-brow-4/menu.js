const menu = [
  {
    name: "Home",
    link: "/",
    items: [],
  },
  {
    name: "About",
    link: "/about",
    items: [],
  },
  {
    name: "Products",
    link: "/products",
    items: [
      {
        name: "Product 1",
        link: "/products/1",
        items: [],
      },
      {
        name: "Product 2",
        link: "/products/2",
        items: [
          {
            name: "Product 2.1",
            link: "/products/2/1",
            items: [],
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    link: "/services",
    items: [
      {
        name: "Service 1",
        link: "/services/1",
        items: [
          {
            name: "Service 1.1",
            link: "/services/1/1",
            items: [],
          },
        ],
      },
      {
        name: "Service 2",
        link: "/services/2",
        items: [
          {
            name: "Service 2.1",
            link: "/services/2/1",
            items: [],
          },
          {
            name: "Service 2.2",
            link: "/services/2/2",
            items: [],
          },
        ],
      },
    ],
  },
];

function crearMenu(items, elemento) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = item.link;
    a.innerText = item.name;
    li.appendChild(a);

    if (item.items.length > 0) {
      var ul = document.createElement("ul");
      li.appendChild(ul);
      crearMenu(item.items, ul);
      li.className = "tiene-submenu";
      li.onclick = function () {
        this.getElementsByTagName("ul")[0].classList.toggle("visible");
        this.getElementsByTagName("ul")[0].classList.add("active");

        return false;
      };
    }

    elemento.appendChild(li);
  }
}
crearMenu(menu, document.getElementById("menu"));
