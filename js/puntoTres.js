/**
 * Evento asociado al elemento con id btnCalcularValores
 */
$('#btnCalcularValores').click(function(){
    var valorInicial = $('#txtValorInicial').val();
    var valorFinal = $('#txtValorFinal').val();

    if(valorInicial === ''){
        alert('Debe ingresar un valor inical.');
        $('#txtValorInicial').focus();
        return;
    }else if (!/^[0-9]+$/g.test(valorInicial)) {
        alert('Debe ingresar un valor inical numerico.');
        $('#txtValorInicial').focus();
        return;
    }

    if(valorFinal === ''){
        alert('Debe ingresar un valor final.');
        $('#txtValorFinal').focus();
        return;
    }else if (!/^[0-9]+$/g.test(valorFinal)) {
        alert('Debe ingresar un valor final numerico.');
        $('#txtValorFinal').focus();
        return;
    }

    calcularValoresYConstruirTabla(valorInicial, valorFinal);
});

/**
 * Funcion que se encarga de clcular y construir la tabla
 * @param {*} valorInicial 
 * @param {*} valorFinal 
 */
function calcularValoresYConstruirTabla(valorInicial, valorFinal){
    var tablaResultado;
    var trTabla;
    var tdSecuencia = '<td>Secuencia</td>';
    var tdVariableX = '<td>Variable de X</td>';
    var tdVariableY = '<td>Variable de Y</td>';
    var tdVariableZ = '<td>Variable de Z</td>';

    for(var contador = valorInicial; contador <= valorFinal; contador ++){
        var resultadoVariableX = (2 * contador) / 5;
        var resultadoVariableY = (Math.pow(contador, 3) + 1/3 * (contador * Math.sqrt(contador)));
        var resultadoVariableZ = 1/2 * (contador) + Math.sqrt(Math.log(contador + 1 / contador));

        tdSecuencia = tdSecuencia + '<td>' + contador + '</td>';
        tdVariableX = tdVariableX +  '<td>' + resultadoVariableX + '</td>';
        tdVariableY = tdVariableY +  '<td>' + resultadoVariableY + '</td>';
        tdVariableZ = tdVariableZ +  '<td>' + resultadoVariableZ + '</td>';
    }

    trTabla = '<tr>' + tdSecuencia + '</tr>' + '<tr>' + tdVariableX + '</tr>' + '<tr>' + tdVariableY + '</tr>' + '<tr>' + tdVariableZ + '</tr>';
    tablaResultado = '<table>' + trTabla + '</table>';

    $('#divResultado').html(tablaResultado);

}