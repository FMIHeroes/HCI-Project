(function() {  
    var dialog = document.getElementById('window');  
    document.getElementById('reg').onclick = function() {  
        dialog.show();  
    };  
    document.getElementById('exit').onclick = function() {  
        dialog.close();  
    };  
})();
