// menu 
let mFather = document.getElementById("mFather");
let menu = document.getElementById("menu");

function openMenu() {
  mFather.style.display = "block";
  menu.style.display = "block";
  menu.style.transform = "scale(0)";
  menu.style.borderRadius = "50%";
  setTimeout(function() {
    menu.style.transitionDuration = '.3s';
    menu.style.transform = "scale(1)";
    menu.style.borderRadius = "0";
  },1)
}

function closeMenu() {
  setTimeout(function() {
    mFather.style.display = "none";
    menu.style.display = "none";
    menu.style.opacity = "1";
  },300)
  menu.style.opacity = "1";
  setTimeout(function() {
    menu.style.transitionDuration = '.3s';
    menu.style.opacity = "0";
  },1)
}

// search 
let search = document.getElementById("search");
let inputS = document.querySelector("#inputS");

function openSearch() {
  search.style.display = "block";
  inputS.focus();
  search.style.transform = "scale(0)";
  search.style.borderRadius = "50%";
  setTimeout(function() {
    search.style.transitionDuration = ".3s";
    search.style.transform = "scale(1)";
    search.style.borderRadius = "0";
  },1)
}

function closeSearch() {
  setTimeout(function() {
    search.style.display = "none";
  },300)
  search.style.transform = "scale(1)";
  search.style.borderRadius = "0";
  setTimeout(function() {
    search.style.transitionDuration = ".3s";
    search.style.transform = "scale(0)";
    search.style.borderRadius = "50%";
  },1)
}


// end-to-end
let pe = document.getElementById("pe");
let end_to_end = document.getElementById("end-to-end");

function openETE() {
  pe.style.display = "block";
  end_to_end.style.height = "0";
  end_to_end.style.opacity = "0";
  setTimeout(function() {
    end_to_end.style.transitionDuration = ".5s";
    end_to_end.style.height = "75%";
    end_to_end.style.opacity = "1";
  },1)
}

function closeETE() {
  setTimeout(function() {
    pe.style.display = "none";
  },200)
  end_to_end.style.height = "75%";
  end_to_end.style.opacity = "1";
  setTimeout(function() {
    end_to_end.style.transitionDuration = ".5s";
    end_to_end.style.height = "0";
    end_to_end.style.opacity = "0";
  },1)
}


// menu2
let menu2 = document.getElementById("menu2");

function openMenu2() {
  mFather.style.display = "block";
  menu2.style.display = "block";
  menu2.style.transform = "scale(0)";
  menu2.style.borderRadius = "50%";
  setTimeout(function() {
    menu2.style.transitionDuration = '.3s';
    menu2.style.transform = "scale(1)";
    menu2.style.borderRadius = "0";
  },1)
}

function closeMenu2_3() {
  if (menu3.style.display == "block") {
    setTimeout(function() {
      mFather.style.display = "none";
      menu3.style.display = "none";
      menu3.style.opacity = "1";
    },300)
    menu3.style.opacity = "1";
    setTimeout(function() {
      menu3.style.transitionDuration = '.3s';
      menu3.style.opacity = "0";
    },1)
  } else {
    setTimeout(function() {
      mFather.style.display = "none";
      menu2.style.display = "none";
      menu2.style.opacity = "1";
    },300)
    menu2.style.opacity = "1";
    setTimeout(function() {
      menu2.style.transitionDuration = '.3s';
      menu2.style.opacity = "0";
    },1)
  }
}
// menu2

// menu3
let menu3 = document.getElementById("menu3");

function openMenu3() {
  menu2.style.display = "none";
  menu3.style.display = "block";
  menu3.style.transform = "scale(0)";
  menu3.style.borderRadius = "50%";
  setTimeout(function() {
    menu3.style.transitionDuration = '.3s';
    menu3.style.transform = "scale(1)";
    menu3.style.borderRadius = "0";
  },1)
}
// menu3

// share
let share = document.getElementById("share");
let sFather = document.getElementById("sFather");

function openShare() {
  sFather.style.display = "block";
  share.style.display = "grid";
  share.style.transform = "scale(0)";
  share.style.borderRadius = "50%";
  setTimeout(function() {
    share.style.transitionDuration = '.3s';
    share.style.transform = "scale(1)";
    share.style.borderRadius = "0";
  },1)
}

function closeShare() {
  setTimeout(function() {
    share.style.display = "none";
  },300)
  share.style.transform = "scale(1)";
  share.style.borderRadius = "0";
  setTimeout(function() {
    sFather.style.display = "none";
    share.style.transitionDuration = ".3s";
    share.style.transform = "scale(0)";
    share.style.borderRadius = "50%";
  },1)
}
// share