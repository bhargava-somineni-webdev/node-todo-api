jQuery("#btnTodo").on("click", function () {
    $.ajax({
        url: '/todos',
        headers: {
            'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTQ5YWIzNDhlMzIzZjBhNDAzODU3ZDciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk4MzE3NzQ2fQ.8ed3JSnjWFJAe3EALj_nehn7XXJ69JmkP9H5M1nl3S4'
        },
        method: 'GET',
        dataType: 'json',
        data: {},
        success: function (data) {
            var todos = data.todos;
            //     var ol = jQuery('<ol></ol>');
            //     todos.forEach(function (todo) {
            //         ol.append(jQuery('<li></li>').text(todo.text));
            //     });            
            //     jQuery('#todos').html(ol);
            var template = "<h4>Your Todos</h4>" +
                "<ul>" +
                "{{#todos}}" +
                "<li>" +
                "<p>Title: {{text}} || Completed: {{completed}}</p>" +
                "</li>" +
                "{{/todos}}" +
                "</ul>";
            var html = Mustache.to_html(template, { todos: todos });
            jQuery('#todos').html(html);

        },
        error: function (xhr) {
            alert('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        }
    });
});

