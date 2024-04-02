document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.photo-container');
    const scrollDistance = 100; // Расстояние, на которое должен перемещаться элемент в пикселях
    
    document.querySelector('.scroll-left').addEventListener('click', function() {
      container.scrollBy({
        left: -scrollDistance,
        behavior: 'smooth' // Добавляет плавность прокрутке
      });
    });
    
    document.querySelector('.scroll-right').addEventListener('click', function() {
      container.scrollBy({
        left: scrollDistance,
        behavior: 'smooth' // Добавляет плавность прокрутке
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.photo-container');
    let scrollDistance = 50; // Параметр для настройки расстояния прокрутки
  
    document.querySelector('.scroll-left').addEventListener('click', function() {
      container.scrollLeft -= scrollDistance;
    });
    
    document.querySelector('.scroll-right').addEventListener('click', function() {
      container.scrollLeft += scrollDistance;
    });
  });