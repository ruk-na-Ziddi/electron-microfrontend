
window.addEventListener('load', function(){
    var button_angular = document.getElementById("btn-react");
    button_angular.addEventListener("click", function(e) {
        e.preventDefault();
        var container = document.getElementById('container');
        container.innerHTML = '';
        var react_app = document.createElement('react-app');
        container.appendChild(react_app);
    });

    var button_angular = document.getElementById("btn-angular");
    button_angular.addEventListener("click", function(e) {
        e.preventDefault();
        var container = document.getElementById('container');
        container.innerHTML = '';
        var react_app = document.createElement('demo-angular-app-root');
        container.appendChild(react_app);
    });
});

