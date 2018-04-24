angular.module("umbraco.directives")
    .directive('umbAutoFocus', function($timeout) {

        return function(scope, element, attr){
            var update = function() {
                //if it uses its default naming
                if(element.val() === "" || attr.focusOnFilled){
                    element.focus();
                }
            };

            $timeout(function() {
                update();
            });
    };
});
