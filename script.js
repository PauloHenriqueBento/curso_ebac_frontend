$('document').ready(() => {

    // Adicionar nova Tarefa
    $('#form').submit(e => {
        e.preventDefault();

        let name = $('#name').val();
        let ul = $('ul');

        ul.append(`<li>${name}</li>`).click((e) => {
            $(e.target).css('text-decoration', 'line-through')
        });

        $('#name').val('')
    });
})
