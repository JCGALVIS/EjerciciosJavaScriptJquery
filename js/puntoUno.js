$(document).ready(function () {
    $('input.timepicker').timepicker({});

    $('#txtSalario').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $('#txtHoraEntrada').focus(function () {
        if (this.value != '') {
            return;
        }
        var instancia = M.Timepicker.getInstance(this);
        instancia.open();
    });

    $('#txtHoraSalida').focus(function () {
        if (this.value != '') {
            return;
        }
        var instancia = M.Timepicker.getInstance(this);
        instancia.open();
    });
});

function CalcularSalario() {
    var salario = $('#txtSalario').val();
    var horaEntrada = $('#txtHoraEntrada').val();
    var horaSalida = $('#txtHoraSalida').val();

    if(horaEntrada === '08:00 AM' && horaSalida === '10:00 PM'){
        alert('Horas estras del 10%.');
    }
}