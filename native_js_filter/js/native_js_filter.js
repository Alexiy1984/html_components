window.addEventListener('load', function() {
  let filters = document.getElementsByClassName('filter');

  [].forEach.call(filters, function(filter) {
    filter.onclick = function() {
      var filter_target = document.querySelector(filter.getAttribute('data-target'));
      var filtered_items = filter_target.children;

      switch (filter.getAttribute('data-type')) {
        case 'by_name':
          [].slice.call(filtered_items).sort(function(a, b) {
            if (filter.getAttribute('data-dir') == 'flth') {
              return a.textContent.localeCompare(b.textContent);
            } else {
              return b.textContent.localeCompare(a.textContent);
            }
          }).forEach(function(val) {
            filter_target.appendChild(val);
          });
          if (filter.getAttribute('data-dir') == 'flth') {
            filter.setAttribute('data-dir', 'fhtl');
          } else {
            filter.setAttribute('data-dir', 'flth');
          }
          break;
        case 'by_date':
          [].slice.call(filtered_items).sort(function(a, b) {
            var first = new Date(a.getAttribute('data-date'));
            var second = new Date(b.getAttribute('data-date'));

            if (filter.getAttribute('data-dir') == 'flth') {
              return first - second;
            } else {
              return second - first;
            }
          }).forEach(function(val) {
            filter_target.appendChild(val);
          });
          if (filter.getAttribute('data-dir') == 'flth') {
            filter.setAttribute('data-dir', 'fhtl');
          } else {
            filter.setAttribute('data-dir', 'flth');
          }
          break;
        case 'clear':
          [].slice.call(filtered_items).sort(function(a, b) {
            var first = a.getAttribute('data-index');
            var second = b.getAttribute('data-index');

            return first - second;
          }).forEach(function(val) {
            filter_target.appendChild(val);
          });
          break;    
      
        default:
          break;
      }
      
      
        
      

      // filtered_items.sort(function(a, b){
      //   var first = console.log(a);
      //   var second = console.log(b);
  
      //   return first - second;
      // }).forEach(function(){
      //   filter_target .prepend(this);
      // });
    }
  });
});
