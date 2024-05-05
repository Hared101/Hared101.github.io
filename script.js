document.getElementById('navbar-toggler').addEventListener('click', function() {
    var navbarCollapse = document.getElementById('navbar-collapse');
    if (navbarCollapse.style.display === 'none' || navbarCollapse.style.display === '') {
      navbarCollapse.style.display = 'block';
    } else {
      navbarCollapse.style.display = 'none';
    }
  });

  
