function showView(viewId) {
    const views = document.querySelectorAll('.viewContainer');
    views.forEach(view => {
      view.style.display = 'none';
    });

    document.getElementById(viewId).style.display = 'block';
  }




  


