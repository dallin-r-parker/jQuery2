$(document).ready(function () {

    //placed at the top to hide when document loads.
    $('#newTaskForm').hide();
    //this saves input field and creates an object and push to array and prevents user creating blank list.
    var addTask = function(task) {
        if(task) {
            task = new Task(task);
            listo.push(task);

            $('#newItemInput').val('');

            $('#newList').append(
                '<a href="#finish" class="" id="item">' +
                '<li class="list-group-item">' +
                '<h3>' + task.task + '</h3>' +
                '<span class="arrow pull-right">' +
                '<i class="glyphicon glyphicon-arrow-right">' +
                '</span>' +
                '</li>' +
                '</a>'
            );

        }
        $('#newTaskForm').slideToggle('fast', 'linear');

    };

    var advanceTask = function(task) {
        var modified = task.innerText.trim()
        for (var i = 0; i < listo.length; i++) {
            if (listo[i].task === modified) {
                if (listo[i].id === 'new') {
                    listo[i].id = 'inProgress';
                } else if (listo[i].id === 'inProgress') {
                    listo[i].id = 'archived';
                } else {
                    listo.splice(i, 1);
                }
                break;
            }
        }
        task.remove();
    };

        // main array that for creating a todo list
    var listo=[];
        //
    var Task = function(task) {
        this.task = task;
        this.id = 'new';
    };

    $('#saveNewItem').on('click', function (e) {
        e.preventDefault();
        var task = $('#newItemInput').val().trim();
        addTask(task);
    });

    //Opens form
    $('#add-todo').on('click', function () {
        $('#newTaskForm').fadeToggle('fast', 'linear');
    });
    //closes form
    $('#cancel').on('click', function (e) {
        e.preventDefault();
        $('#newTaskForm').fadeToggle('fast', 'linear');
    });

    $(document).on('click', '#item', function(e) {
        e.preventDefault();  //<-- this is similar to a CSS reset
        var task = this;
        advanceTask(task);
        this.id = 'inProgress';
        $('#currentList').append(this.outerHTML);
    });

    $(document).on('click', '#inProgress', function (e) {
        e.preventDefault();
        var task = this;
        task.id = "archived";
        var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
        advanceTask(task);
        $('#archivedList').append(changeIcon);
    });

    $(document).on('click', '#archived', function (e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
    });

    <!doctype html>
    <html lang="en">
        <head>

        <meta charset="UTF-8">
        <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        //Add CSS Links Here
        <title>Document</title>
        </head>
        <body>











        <!--jQuery-->
        <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <!--INclude your script file here -->
    </body>
    </html> //<--- this is the end of document.ready