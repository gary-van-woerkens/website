// navbar area JS v.2022 start
const navItems = document.querySelectorAll(".navbar-appscode .nav-item");

navItems.forEach(navItem => {
  const item = navItem.querySelector('.link');
  item.addEventListener('click', function (el) {

    // to remove active class from previously selected navItem
    const selectedNav = document.querySelector(".nav-item.is-active");
    if (selectedNav && selectedNav !== item.parentElement) {
      selectedNav.classList.toggle('is-active')
    }

    // handle selected navItem class
    const hasActiveClass = navItem.classList.contains("is-active");
    navItem.classList.toggle('is-active')

    // handle background dark-shadow of navItem
    const darkBodyEl = document.querySelector(".modal-backdrop");

    function handleDarkBodyClickEvent(el) {
      el.target.classList.remove('is-show')
      const selectedNavItem = document.querySelector(".nav-item.is-active");
      selectedNavItem ? selectedNavItem.classList.toggle('is-active') : null;
    }

    if (hasActiveClass && darkBodyEl.classList.contains("is-show")) {
      darkBodyEl.classList.toggle("is-show");
      darkBodyEl.removeEventListener('click', handleDarkBodyClickEvent);
    } else if (!hasActiveClass && !darkBodyEl.classList.contains("is-show") && !!navItem.querySelector('.mega-menu-wrapper')) {
      darkBodyEl.classList.toggle("is-show");
      darkBodyEl.addEventListener('click', handleDarkBodyClickEvent);
    }
  })
})

// Responsive menu back button
const backButtonAll = document.querySelectorAll(".back-button");	
// create click event for all back button	
Array.from(backButtonAll).forEach((el) => {	
  el.addEventListener("click", () => {	
    // closeset nav item ancestor	
    const activeNavElement = el.closest(".nav-item.is-active");	
    if (activeNavElement) activeNavElement.classList.remove("is-active");	
  })	
});
// navbar area JS v.2022 end

// responsive navbar area
// elements selector where toggle class will be added
const selctorsForResponsiveMenu = [
  ".left-sidebar-wrapper",
  ".navbar-appscode.documentation-menu > .navbar-right",
  ".right-sidebar",
  ".sidebar-search-area"
];
// toggle classes for responsive buttons
const toggleClassesForResponsiveMenu = ["is-block", "is-visible", "is-block", "right-0"];
// All responsive menu buttons
const responsiveMenus = document.querySelectorAll(".responsive-menu > .is-flex.is-justify-content-space-between > .button");
// iterate thorugh the menus to handle click event
Array.from(responsiveMenus).forEach((menu, idx) => {
  menu.addEventListener("click", function () {
    const toggleElement = document.querySelector(selctorsForResponsiveMenu[idx]);
    if (toggleElement) {
      // toggle active menu class
      toggleElement.classList.toggle(toggleClassesForResponsiveMenu[idx]);
      if (toggleElement.classList.contains(toggleClassesForResponsiveMenu[idx])) {
        const backButtonElement = toggleElement.querySelector(".back-button");

        function handleClick() {
          toggleElement.classList.remove(toggleClassesForResponsiveMenu[idx]);
          // remove event listener on back button click
          backButtonElement.removeEventListener("click", handleClick);
        }

        backButtonElement.addEventListener("click", handleClick);

      }
    }

    const modalBackdropElement = document.querySelector(".modal-backdrop.is-show");
    // if modal backdrop element is visible then hide it
    if (modalBackdropElement) {
      modalBackdropElement.classList.remove("is-show")
    }

    const navItem = document.querySelector(".nav-item.is-active");
    // if modal backdrop element is visible then hide it
    if (navItem) {
      navItem.classList.remove("is-active")
    }

    // remove previous active menu
    selctorsForResponsiveMenu.forEach((el, selectorIdx) => {
      if (selectorIdx !== idx) {
        const selectorElement = document.querySelector(selctorsForResponsiveMenu[selectorIdx]);
        if (selectorElement.classList.contains(toggleClassesForResponsiveMenu[selectorIdx])) {
          selectorElement.classList.remove(toggleClassesForResponsiveMenu[selectorIdx])
        }
      }
    });
  });
});


$('.grid').masonry({
  itemSelector: '.grid-item'
});


// docs page codeblock copy button 
document.querySelectorAll(".code-block-wrapper").forEach(codeBlockWrapper => {
  let heading = codeBlockWrapper.querySelector(".code-block-title")
  let downloadBtn = heading.querySelector(".download-here")
  let copyBtn = heading.querySelector(".copy-here")

  // for download button 
  const highlight = heading.nextElementSibling;
  const code = highlight.querySelector("code");
  const codeContent = code.textContent;
  let fileType = code.getAttribute("class");
  if (fileType) {
    fileType = fileType.replace("language-", "");
  } else {
    fileType = "txt";
  }
  let fileName = heading.querySelector("h4").textContent.replace(" ", "_");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      return download(codeContent, `${fileName}.${fileType}`, "text/plain");
    });
  }

  // for copy button 
  new ClipboardJS(copyBtn, {
    target: function (trigger) {
      trigger.title = "Copied";
      return heading.nextElementSibling;
    }
  });

});

// scroll to top start
//Get the button
const goToTopBtn = document.querySelector(".go-to-top");
if (goToTopBtn) {
  goToTopBtn.addEventListener('click', topFunction)
}


// When the user scrolls down 20px from the top of the document, show the button
document.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.classList.add('is-visible');
  } else {
    goToTopBtn.classList.remove('is-visible');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// scroll to top end


// close modal start
function closeModal() {
  document.querySelectorAll('.modal').forEach((modal) => {
    if (modal.classList.contains('is-active')) {
      modal.classList.remove('is-active')
    }
  })

}
// close modal end
// adds modal JS 
// setTimeout(() => {
//   document.querySelector('.modal-1')?.querySelector('.modal')?.classList.add('is-active')
// }, 1500);

var h_editor = document.querySelector('.hero-area-code-editor');
document.addEventListener("DOMContentLoaded", () => {
  // highligh js initilization start
  if (h_editor) {
    h_editor.classList.add('is-visible')
  }

  // hljs.highlightAll();
  // highligh js initilization end

  // AOS Animation
  AOS.init({
    once: true,
  });

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.toggle("is-active");
      });
    });
  }
});

// menu sticky
// Not a ton of code, but hard to

// mega menu active class
var navbarItems = document.querySelectorAll(".navbar-item");
navbarItems.forEach((navbarItem) => {
  navbarItem.addEventListener("click", function () {
    var megamenues = document.querySelectorAll(
      ".navbar-item > .ac-megamenu , .navbar-item > .ac-dropdown"
    );
    // remove is-active class from all the megamenus except the navbar item that was clicked
    megamenues.forEach((megamenu) => {
      // toggle classes
      if (megamenu.parentElement === navbarItem)
        megamenu.classList.toggle("is-active");
      else megamenu.classList.remove("is-active");
    });
  });
});

// owl owlCarousel JS 
var owl = $('.testimonial-carousel');
owl.owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  nav: false,
  dots: false,
  smartSpeed: 2000,
  responsiveClass: true,
  autoplayHoverPause: true,
  fluidSpeed: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1400: {
      items: 2,
    }
  }
});
// Go to the next item
$('.customNextBtn').click(function () {
  owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function () {
  owl.trigger('prev.owl.carousel');
})

// for social prove owlCarousel 
// owl owlCarousel JS 
var owlSocialProve = $('.brand-image-wrapper');
owlSocialProve.owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  nav: false,
  dots: false,
  fluidSpeed: true,
  smartSpeed: 3000,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  rewindNav:false,
  rewindSpeed: 0,
  // autoHeight:true,
  autoWidth:true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 4,
    },
    600: {
      items: 5,
    },
    1400: {
      items: 9,
    }
  }
});

// Modal js video init plugin
$(".yt-video").magnificPopup({
  type: 'iframe'
});


// headroomjs start
var myElement = document.querySelector(".active-headroom");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(myElement);
// initialise
headroom.init();
// headroomjs end


// For FAQ Collaps Page
const accordionItem = document.querySelectorAll(".accordion-item");
const onClickAccordionHeader = (e) => {
  if (e.currentTarget.parentNode.classList.contains("active")) {
    e.currentTarget.parentNode.classList.remove("active");
  } else {
    Array.prototype.forEach.call(accordionItem, (e) => {
      e.classList.remove("active");
    });
    e.currentTarget.parentNode.classList.add("active");
  }
};
const init = () => {
  Array.prototype.forEach.call(accordionItem, (e) => {
    e.querySelector(".accordion-header").addEventListener(
      "click",
      onClickAccordionHeader,
      false
    );
  });
};
document.addEventListener("DOMContentLoaded", init);

// Table Of Content
// go the the section smoothly when click on a table-of-content item
const goToASectionSmoothly = () => {
  const tocItems = document.querySelectorAll("#TableOfContents a");
  tocItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      // go to the target section smoothly
      const targetEl = document.querySelector(e.currentTarget.hash);
      const pos = targetEl.offsetTop;
      console.log(pos);
      window.scrollTo({
        top: pos,
        behavior: "smooth",
      });
    });
  });
};

// add .active dynamically to TOC
const spyScrolling = () => {
  const allHeaders = document.querySelectorAll("h1, h2, h3, h4");

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;
    for (let s in allHeaders) {
      if (
        allHeaders.hasOwnProperty(s) &&
        allHeaders[s].offsetTop <= scrollPos + 100
      ) {
        const id = allHeaders[s].id;
        if (id) {
          document.querySelectorAll("#TableOfContents a").forEach((a) => {
            if (`#${id}` === a.hash) {
              a.classList.add("active");
            } else {
              a.classList.remove("active");
            }
          });
        }
      }
    }
  };
};

goToASectionSmoothly();
spyScrolling();

// docs page left sidebar first item font-size
document.addEventListener("DOMContentLoaded", () => {
  // left sidebar menu fontSize
  const sidebarMenu = document.querySelector(".product-sidebar-menu");
  if (sidebarMenu) {
    sidebarMenu.children[0].children[1].children[0].style.fontSize = "22px";
    sidebarMenu.children[0].children[1].children[0].style.fontWeight = "600";
  }
  // docs-page -> right sidebar (content > 20) then show a scroll
  const allHeaders = document.querySelectorAll(
    ".full-info > h2,.full-info > h3,.full-info > h4"
  );
  if (allHeaders.length > 20) {
    let rightSidebarArea = document.querySelector(".right-sidebar-area");
    rightSidebarArea.style.position = "inherit";
  }

  // docs page header link create
  Array.from(allHeaders).forEach((el) => {
    const id = el.id;
    const anchorTag = document.createElement("a");
    anchorTag.setAttribute("href", "#" + id);
    anchorTag.innerHTML = `<svg width="25" height="13" viewBox="0 0 52.965 52.973">
    <g id="broken-link" transform="translate(-0.004)">
      <path id="Path_16124" data-name="Path 16124" d="M49.467,3.51a12.011,12.011,0,0,0-16.97,0L23.305,12.7a1,1,0,0,0,1.414,1.414l9.192-9.192A10,10,0,0,1,48.052,19.066L36.033,31.088a10.014,10.014,0,0,1-14.143,0A1,1,0,0,0,20.476,32.5a12.013,12.013,0,0,0,16.97,0L49.467,20.48a12.03,12.03,0,0,0,0-16.97Z" fill="#4a4a4a"/>
      <path id="Path_16125" data-name="Path 16125" d="M26.84,40.279l-7.778,7.778A10,10,0,1,1,4.92,33.915L16.234,22.6a10.015,10.015,0,0,1,14.142,0,1,1,0,0,0,1.414-1.414,12.011,12.011,0,0,0-16.97,0L3.505,32.5A11.987,11.987,0,0,0,11.99,52.973a11.911,11.911,0,0,0,8.485-3.5l7.778-7.778a1,1,0,1,0-1.413-1.414Z" fill="#4a4a4a"/>
      <path id="Path_16126" data-name="Path 16126" d="M33.969,44.009a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0v-6A1,1,0,0,0,33.969,44.009Z" fill="#4a4a4a"/>
      <path id="Path_16127" data-name="Path 16127" d="M38.433,42.3a1,1,0,0,0-1.414,1.414l4.243,4.242a1,1,0,0,0,1.414-1.414Z" fill="#4a4a4a"/>
      <path id="Path_16128" data-name="Path 16128" d="M44.969,38.009h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" fill="#4a4a4a"/>
      <path id="Path_16129" data-name="Path 16129" d="M15.969,11.009a1,1,0,0,0,1-1v-6a1,1,0,1,0-2,0v6A1,1,0,0,0,15.969,11.009Z" fill="#4a4a4a"/>
      <path id="Path_16130" data-name="Path 16130" d="M11.5,12.716A1,1,0,0,0,12.918,11.3L8.676,7.06A1,1,0,0,0,7.262,8.474Z" fill="#4a4a4a"/>
      <path id="Path_16131" data-name="Path 16131" d="M4.969,17.009h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Z" fill="#4a4a4a"/>
    </g>
   </svg>`;
    el.appendChild(anchorTag);

    //insert hash tag when click anchorTag
    anchorTag.addEventListener("click", (e) => {
      e.preventDefault();
      const targetEl = document.querySelector(e.currentTarget.hash);
      window.history.pushState(id, "title", "#" + id);
      const pos1 = targetEl.offsetTop - 35;
      window.scrollTo({
        top: pos1,
        behavior: "smooth",
      });
    });
  });

  //docs page heading content on reload
  setTimeout(function () {
    let getHash = location.hash;
    if (getHash) {
      const targetE2 = document.querySelector(getHash);
      const pos2 = targetE2.offsetTop - 35;
      scrollTo({
        top: pos2,
        behavior: "smooth",
      });
    }
  }, 0);
});

// tabs active class add script - setup | install page
const tabItems = document.querySelectorAll(".nav-item .nav-link");
tabItems.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    const el = e.currentTarget;

    // add .active class to the clicked item, remove .active from others
    document.querySelectorAll(".nav-item .nav-link").forEach((navLink) => {
      navLink === el ?
        navLink.classList.add("active") :
        navLink.classList.remove("active");
    });

    // add .show class to the target tab-pane, remove from others
    const elHref = el.getAttribute("href");
    const tabPaneTarget = document.querySelector(elHref);

    document.querySelectorAll(".tab-pane").forEach((tabPane) => {
      tabPane === tabPaneTarget ?
        tabPane.classList.add("show") :
        tabPane.classList.remove("show");
    });
  });
});

// custom accordion
function acAccordion(actionBtn) {
  let accordionHeadingAll = document.querySelectorAll(actionBtn);
  // Create event listeners for each accordion heading
  Array.from(accordionHeadingAll).forEach((accordionHeading) => {
    accordionHeading.addEventListener("click", function () {
      let singleAcc = accordionHeading.closest(".single-accordion-item");

      let isOpen = singleAcc.classList.contains("open");

      // select all accordion
      let accordionItems = document.querySelectorAll(".single-accordion-item");
      Array.from(accordionItems).forEach((accordionItem) => {
        // close all item
        accordionItem.className = "single-accordion-item closed";
        let icon = accordionItem.querySelector(".icon .fa");
        if (icon) {
          icon.classList.replace("fa-minus", "fa-plus");
        }
        let accordionBody = accordionItem.querySelector(".accordion-body");
        accordionBody.style.maxHeight = null;
      });

      // get single element icon
      let icon = singleAcc.querySelector(".icon .fa");
      if (isOpen) {
        singleAcc.className = "single-accordion-item closed";
        let accordionBody = singleAcc.querySelector(".accordion-body");
        accordionBody.style.maxHeight = null;
        if (icon) {
          icon.classList.replace("fa-minus", "fa-plus");
        }
      } else {
        singleAcc.className = "single-accordion-item open";
        let accordionBody = singleAcc.querySelector(".accordion-body");
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        if (icon) {
          icon.classList.replace("fa-plus", "fa-minus");
        }
      }
    });
  });
}

acAccordion(".accordion-heading h3");
acAccordion(".accordion-heading .icon");
// accordion end