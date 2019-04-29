$(function () {
    var results = 0;
    var unidad;
    var mayor = 0;
    var calculos = new Array();
    var tipoC = new Array();
    $('#yellow').on('click', function () {
        $("#elec").show();
        $("#agua").hide();
        $("#paper").hide();
        $("#refri410").hide();
        $("#refri404").hide();
        $("#aguares").hide();
        $("#diesell").hide();
        $("#gaso").hide();
        $("#fueloil").hide();
        $("#dqo").hide();
        $('#propano').hide();
        $("#num").focus();
    });
    $('#bluesky').on('click', function () {
        $("#elec").hide();
        $("#agua").show();
        $("#paper").hide();
        $("#refri410").hide();
        $("#refri404").hide();
        $("#aguares").hide();
        $("#diesell").hide();
        $("#gaso").hide();
        $("#fueloil").hide();
        $("#dqo").hide();
        $('#propano').hide();
        $("#num").focus();
    });
    $('#coffee').on('click', function () {
        $("#elec").hide();
        $("#agua").hide();
        $("#paper").show();
        $("#refri410").hide();
        $("#refri404").hide();
        $("#aguares").hide();
        $("#diesell").hide();
        $("#gaso").hide();
        $("#fueloil").hide();
        $("#dqo").hide();
        $('#propano').hide();
        $("#num").focus();
    });
    $('#red').on('click', function () {
        $("#elec").hide();
        $("#agua").hide();
        $("#paper").hide();
        $("#refri410").hide();
        $("#refri404").hide();
        $("#aguares").hide();
        $("#diesell").hide();
        $("#gaso").show();
        $("#fueloil").hide();
        $("#dqo").hide();
        $('#propano').hide();
        $("#num").focus();
    });
    $('#blue').on('click', function () {
        $("#elec").hide();
        $("#agua").hide();
        $("#paper").hide();
        $("#refri410").hide();
        $("#refri404").hide();
        $("#aguares").show();
        $("#dqo").show();
        $("#diesell").hide();
        $("#gaso").hide();
        $("#fueloil").hide();
        $('#propano').hide();
        $("#num").focus();
    });
    $('#wine').on('click', function () {
        $("#elec").hide();
        $("#agua").hide();
        $("#paper").hide();
        $("#refri410").hide();
        $("#refri404").hide();
        $("#aguares").hide();
        $("#diesell").show();
        $("#gaso").hide();
        $("#fueloil").hide();
        $("#dqo").hide();
        $('#propano').hide();
        $("#num").focus();
    });
    $('#orange').on('click', function () {
        $("#elec").hide();
        $("#agua").hide();
        $("#paper").hide();
        $("#refri410").hide();
        $("#refri404").hide();
        $("#aguares").hide();
        $("#diesell").hide();
        $("#gaso").hide();
        $("#fueloil").show();
        $("#dqo").hide();
        $('#propano').hide();
        $("#num").focus();
    });
    $('#purple').on('click', function () {
        $("#elec").hide();
        $("#agua").hide();
        $("#paper").hide();
        $("#refri410").show();
        $("#refri404").hide();
        $("#aguares").hide();
        $("#diesell").hide();
        $("#gaso").hide();
        $("#fueloil").hide();
        $("#dqo").hide();
        $('#propano').hide();
        $("#num").focus();
    });
    $('#black').on('click', function () {
        $("#elec").hide();
        $("#agua").hide();
        $("#paper").hide();
        $("#refri410").hide();
        $("#refri404").show();
        $("#aguares").hide();
        $("#diesell").hide();
        $("#gaso").hide();
        $("#fueloil").hide();
        $("#dqo").hide();
        $('#propano').hide();
        $("#num").focus();
    });
    $('#grey').on('click', function () {
        $("#elec").hide();
        $("#agua").hide();
        $("#paper").hide();
        $("#refri410").hide();
        $("#refri404").hide();
        $("#aguares").hide();
        $("#diesell").hide();
        $("#gaso").hide();
        $("#fueloil").hide();
        $("#dqo").hide();
        $('#propano').show();
        $("#num").focus();
    });

    $('#elec').on('change', function () {
        unidad = $(this).val();
    });
    $('#agua').on('change', function () {
        unidad = $(this).val();
    });
    $('#paper').on('change', function () {
        unidad = $(this).val();
    });
    $('#refri410').on('change', function () {
        unidad = $(this).val();
    });
    $('#refri404').on('change', function () {
        unidad = $(this).val();
    });
    $('#aguares').on('change', function () {
        unidad = $(this).val();
    });
    $('#diesell').on('change', function () {
        unidad = $(this).val();
    });
    $('#gaso').on('change', function () {
        unidad = $(this).val();
    });
    $('#fueloil').on('change', function () {
        unidad = $(this).val();
    });
    $('#propano').on('change', function () {
        unidad = $(this).val();
    });

    $("#calcu").on('click', function () {
        limpiar();
        var num = $("#num").val();
        var ppm = $("#dqo").val();
        var co2;
        var tonco2;
        //Electricidad
        if ((unidad === "kWh/Año" || unidad === "kWh/Mes" || unidad === "kWh/Día") && num > 0) {

            $("#error").hide();
            $('#valorIni').text("Dato Inicial: " + num);
            if (unidad === "kWh/Año") {
                co2 = num * 0.6798 * (1 / 1000);
                $('#UeleA').show();
                $('#proeleA').show();
            } else if (unidad === "kWh/Mes") {
                co2 = num * 12 * 0.6798 * (1 / 1000);
                $('#UeleM').show();
                $('#proeleM').show();
            } else if (unidad === "kWh/Día") {
                co2 = num * 365 * 0.6798 * (1 / 1000);
                $('#UeleD').show();
                $('#proeleD').show();
            } else {
                $("#error").show();
            }
            $('#valorFin').text("Dato Final: " + parseFloat(co2).toFixed(2));
            $('#unidadF1').show();
            //lo metemos al array
            calculos.push(parseFloat(co2));
            tipoC.push("Electricidad");

            $("#elec").val('0');
            //Para calcular el resultado
            results = parseFloat(results) + parseFloat(co2);
            //Para añadir el texto
            $("#resultados").append("Electricidad: " + parseFloat(co2).toFixed(2) + " Ton CO2/año<br>");
            unidad = "";
            $("#num").val("");
        }//Papel
        else if ((unidad === "Resmas/Año" || unidad === "Resmas/Mes" || unidad === "Resmas/Día") && num > 0) {

            $("#error").hide();
            $('#valorIni').text("Dato Inicial: " + num);
            if (unidad === "Resmas/Año") {
                co2 = num * 2.3 * 3 * (1 / 1000);
                $('#UpapA').show();
                $('#propapA').show();
            } else if (unidad === "Resmas/Mes") {
                co2 = num * 12 * 2.3 * 3 * (1 / 1000);
                $('#UpapM').show();
                $('#propapM').show();
            } else if (unidad === "Resmas/Día") {
                co2 = num * 365 * 2.3 * 3 * (1 / 1000);
                $('#UpapD').show();
                $('#propapD').show();
            } else {
                $("#error").show();
            }
            $('#valorFin').text("Dato Final: " + parseFloat(co2).toFixed(2));
            $('#unidadF1').show();
            //lo metemos al array
            calculos.push(parseFloat(co2));
            tipoC.push("Papel");

            $("#paper").val('0');
            //Para calcular el resultado
            results = parseFloat(results) + parseFloat(co2);
            //Para añadir el texto
            $("#resultados").append("Papel: " + parseFloat(co2).toFixed(2) + " Ton CO2/año<br>");
            unidad = "";
            $("#num").val("");
        }//Gasolina
        else if ((unidad === "Galones de gasolina/Año" || unidad === "Galones de gasolina/Mes" || unidad === "Galones de gasolina/Día") && num > 0) {

            $("#error").hide();
            $('#valorIni').text("Dato Inicial: " + num);
            if (unidad === "Galones de gasolina/Año") {
                co2 = num * 3.78 * 0.748 * 44.3 * (1 / 1000000) * 69.3;
                $('#UgasA').show();
                $('#progasA').show();
            } else if (unidad === "Galones de gasolina/Mes") {
                co2 = num * 12 * 3.78 * 0.748 * 44.3 * (1 / 1000000) * 69.3;
                $('#UgasM').show();
                $('#progasM').show();
            } else if (unidad === "Galones de gasolina/Día") {
                co2 = num * 365 * 3.78 * 0.748 * 44.3 * (1 / 1000000) * 69.3;
                $('#UgasD').show();
                $('#progasD').show();
            } else {
                $("#error").show();
            }
            $('#valorFin').text("Dato Final: " + parseFloat(co2).toFixed(2));
            $('#unidadF1').show();
            //lo metemos al array
            calculos.push(parseFloat(co2));
            tipoC.push("Gasolina");

            $("#gaso").val('0');
            //Para calcular el resultado
            results = parseFloat(results) + parseFloat(co2);
            //Para añadir el texto
            $("#resultados").append("Gasolina: " + parseFloat(co2).toFixed(2) + " Ton CO2/año<br>");
            unidad = "";
            $("#num").val("");
        }//Agua residual
        else if ((unidad === "m³ Agua residual/Año" || unidad === "m³ Agua residual/Mes" || unidad === "m³ Agua residual/Día") && num > 0 && ppm > 0) {

            $("#error").hide();
            $('#valorIni').text("Dato Inicial: " + num);
            if (unidad === "m³ Agua residual/Año") {
                co2 = num * (ppm / 1000) * 0.25 * 25 * (1 / 1000);
                $('#UresA').show();
                $('#proresA').show();
            } else if (unidad === "m³ Agua residual/Mes") {
                co2 = num * 12 * (ppm / 1000) * 0.25 * 25 * (1 / 1000);
                $('#UresM').show();
                $('#proresM').show();
            } else if (unidad === "m³ Agua residual/Día") {
                co2 = num * 365 * (ppm / 1000) * 0.25 * 25 * (1 / 1000);
                $('#UresD').show();
                $('#proresD').show();
            } else {
                $("#error").show();
            }
            $('#valorFin').text("Dato Final: " + parseFloat(co2).toFixed(2));
            $('#unidadF1').show();
            //lo metemos al array
            calculos.push(parseFloat(co2));
            tipoC.push("Agua Residual");

            $("#aguares").val('0');
            $("#dqo").val(0);
            //Para calcular el resultado
            results = parseFloat(results) + parseFloat(co2);
            //Para añadir el texto
            $("#resultados").append("Agua Residual: " + parseFloat(co2).toFixed(2) + " Ton CO2/año<br>");
            unidad = "";
            $("#num").val("");
        }//Agua
        else if ((unidad === "m³ Agua/Año" || unidad === "m³ Agua/Mes" || unidad === "m³ Agua/Día") && num > 0) {

            $("#error").hide();
            $('#valorIni').text("Dato Inicial: " + num);
            if (unidad === "m³ Agua/Año") {
                co2 = num * 0.788 * (1 / 1000);
                $('#UaguA').show();
                $('#proaguA').show();
            } else if (unidad === "m³ Agua/Mes") {
                co2 = num * 12 * 0.788 * (1 / 1000);
                $('#UaguM').show();
                $('#proaguM').show();
            } else if (unidad === "m³ Agua/Día") {
                co2 = num * 365 * 0.788 * (1 / 1000);
                $('#UaguD').show();
                $('#proaguD').show();
            } else {
                $("#error").show();
            }
            $('#valorFin').text("Dato Final: " + parseFloat(co2).toFixed(2));
            $('#unidadF1').show();
            //lo metemos al array
            calculos.push(parseFloat(co2));
            tipoC.push("Agua");

            $("#agua").val('0');
            //Para calcular el resultado
            results = parseFloat(results) + parseFloat(co2);
            //Para añadir el texto
            $("#resultados").append("Agua: " + parseFloat(co2).toFixed(2) + " Ton CO2/año<br>");
            unidad = "";
            $("#num").val("");
        }//Diesel
        else if ((unidad === "Galones de diésel/Año" || unidad === "Galones de diésel/Mes" || unidad === "Galones de diésel/Día") && num > 0) {

            $("#error").hide();
            $('#valorIni').text("Dato Inicial: " + num);
            if (unidad === "Galones de diésel/Año") {
                co2 = num * 3.78 * 0.85 * 43 * (1 / 1000000) * 72.6;
                $('#UdieA').show();
                $('#prodieA').show();
            } else if (unidad === "Galones de diésel/Mes") {
                co2 = num * 12 * 3.78 * 0.85 * 43 * (1 / 1000000) * 72.6;
                $('#UdieM').show();
                $('#prodieM').show();
            } else if (unidad === "Galones de diésel/Día") {
                co2 = num * 365 * 3.78 * 0.85 * 43 * (1 / 1000000) * 72.6;
                $('#UdieD').show();
                $('#prodieD').show();
            } else {
                $("#error").show();
            }
            $('#valorFin').text("Dato Final: " + parseFloat(co2).toFixed(2));
            $('#unidadF1').show();
            //lo metemos al array
            calculos.push(parseFloat(co2));
            tipoC.push("Diésel");

            $("#diesell").val('0');
            //Para calcular el resultado
            results = parseFloat(results) + parseFloat(co2);
            //Para añadir el texto
            $("#resultados").append("Diesel: " + parseFloat(co2).toFixed(2) + " Ton CO2/año<br>");
            unidad = "";
            $("#num").val("");
        }//Fuel Oil
        else if ((unidad === "Galones de fuel oil/Año" || unidad === "Galones de fuel oil/Mes" || unidad === "Galones de fuel oil/Día") && num > 0) {

            $("#error").hide();
            $('#valorIni').text("Dato Inicial: " + num);
            if (unidad === "Galones de fuel oil/Año") {
                co2 = num * 3.78 * 0.965 * 40.1 * (1 / 1000000) * 75.6;
                $('#UoilA').show();
                $('#prooilA').show();
            } else if (unidad === "Galones de fuel oil/Mes") {
                co2 = num * 12 * 3.78 * 0.965 * 40.1 * (1 / 1000000) * 75.6;
                $('#UoilM').show();
                $('#prooilM').show();
            } else if (unidad === "Galones de fuel oil/Día") {
                co2 = num * 365 * 3.78 * 0.965 * 40.1 * (1 / 1000000) * 75.6;
                $('#UoilD').show();
                $('#prooilD').show();
            } else {
                $("#error").show();
            }
            $('#valorFin').text("Dato Final: " + parseFloat(co2).toFixed(2));
            $('#unidadF1').show();
            //lo metemos al array
            calculos.push(parseFloat(co2));
            tipoC.push("Fuel Oil");

            $("#fueloil").val('0');
            //Para calcular el resultado
            results = parseFloat(results) + parseFloat(co2);
            //Para añadir el texto
            $("#resultados").append("Fuel Oil: " + parseFloat(co2).toFixed(2) + " Ton CO2/año<br>");
            unidad = "";
            $("#num").val("");
        }//Gas Propano
        else if ((unidad === "Galones de gas propano/Año" || unidad === "Galones de gas propano/Mes" || unidad === "Galones de gas propano/Día") && num > 0) {

            $("#error").hide();
            $('#valorIni').text("Dato Inicial: " + num);
            if (unidad === "Galones de gas propano/Año") {
                co2 = num * 3.78 * 0.519 * 46.2 * (1 / 1000000) * 63.6;
                $('#UproA').show();
                $('#proproA').show();
            } else if (unidad === "Galones de gas propano/Mes") {
                co2 = num * 12 * 3.78 * 0.519 * 46.2 * (1 / 1000000) * 63.6;
                $('#UproM').show();
                $('#proproM').show();
            } else if (unidad === "Galones de gas propano/Día") {
                co2 = num * 365 * 3.78 * 0.519 * 46.2 * (1 / 1000000) * 63.6;
                $('#UproD').show();
                $('#proproD').show();
            } else {
                $("#error").show();
            }
            $('#valorFin').text("Dato Final: " + parseFloat(co2).toFixed(2));
            $('#unidadF1').show();
            //lo metemos al array
            calculos.push(parseFloat(co2));
            tipoC.push("Gas Propano");

            $("#propano").val('0');
            //Para calcular el resultado
            results = parseFloat(results) + parseFloat(co2);
            //Para añadir el texto
            $("#resultados").append("Gas propano: " + parseFloat(co2).toFixed(2) + " Ton CO2/año<br>");
            unidad = "";
            $("#num").val("");
        }//R404 a
        else if ((unidad === "Kg R404 a/Año" || unidad === "Kg R404 a/Mes" || unidad === "Kg R404 a/Día") && num > 0) {

            $("#error").hide();
            $('#valorIni').text("Dato Inicial: " + num);
            if (unidad === "Kg R404 a/Año") {
                co2 = num * 3922 * (1 / 1000);
                $('#U404A').show();
                $('#pro404A').show();
            } else if (unidad === "Kg R404 a/Mes") {
                co2 = num * 12 * 3922 * (1 / 1000);
                $('#U404M').show();
                $('#pro404M').show();
            } else if (unidad === "Kg R404 a/Día") {
                co2 = num * 365 * 3922 * (1 / 1000);
                $('#U404D').show();
                $('#pro404D').show();
            } else {
                $("#error").show();
            }
            $('#valorFin').text("Dato Final: " + parseFloat(co2).toFixed(2));
            $('#unidadF1').show();
            //lo metemos al array
            calculos.push(parseFloat(co2));
            tipoC.push("Refrigerante R404 a");

            $("#refri404").val('0');
            //Para calcular el resultado
            results = parseFloat(results) + parseFloat(co2);
            //Para añadir el texto
            $("#resultados").append("Refrigerante R404 a: " + parseFloat(co2).toFixed(2) + " Ton CO2/año<br>");
            unidad = "";
            $("#num").val("");
        }//R410 a
        else if ((unidad === "Kg R410 a/Año" || unidad === "Kg R410 a/Mes" || unidad === "Kg R410 a/Día") && num > 0) {

            $("#error").hide();
            $('#valorIni').text("Dato Inicial: " + num);
            if (unidad === "Kg R410 a/Año") {
                co2 = num * 2088 * (1 / 1000);
                $('#U410A').show();
                $('#pro410A').show();
            } else if (unidad === "Kg R410 a/Mes") {
                co2 = num * 12 * 2088 * (1 / 1000);
                $('#U410M').show();
                $('#pro410M').show();
            } else if (unidad === "Kg R410 a/Día") {
                co2 = num * 365 * 2088 * (1 / 1000);
                $('#U410D').show();
                $('#pro410D').show();
            } else {
                $("#error").show();
            }

            $('#valorFin').text("Dato Final: " + parseFloat(co2).toFixed(2));
            $('#unidadF1').show();
            //lo metemos al array
            calculos.push(parseFloat(co2));
            tipoC.push("Refrigerante R410 a");

            $("#refri410").val('0');
            //Para calcular el resultado
            results = parseFloat(results) + parseFloat(co2);
            //Para añadir el texto
            $("#resultados").append("Refrigerante R410 a: " + parseFloat(co2).toFixed(2) + " Ton CO2/año<br>");
            unidad = "";
            $("#num").val("");
        } else {
            $("#error").show(results);
        }
    });

    $('#finalizar').on('click', function () {
        var suggest;
        $("#total").show();
        $("#unidadF").show();
        $("#total").prepend("Valor Final: " + results.toFixed(2));

        mayor = getMaxOfArray(calculos);

        for (i = 0; i < calculos.length; i++) {
            if (calculos[i] == mayor) {
                suggest = tipoC[i];
            }
        }
        $(".suggest-div").show();
        $("#reduccion").css("display","block");
        $("#suggest").show();
        $("#reduccion").show();
        switch (suggest) {
            case 'Electricidad':
                $("#suggest").text("Hemos detectado que el mayor de tus consumos esta en la electricidad!");
                break;
            case 'Papel':
                $("#suggest").text("Hemos detectado que el mayor de tus consumos esta en el papel!");
                break;
            case 'Gasolina':
                $("#suggest").text("Hemos detectado que el mayor de tus consumos esta en la gasolina!");
                break;
            case 'Agua Residual':
                $("#suggest").text("Hemos detectado que el mayor de tus consumos esta en el agua residual!");
                break;
            case 'Agua':
                $("#suggest").text("Hemos detectado que el mayor de tus consumos esta en el agua!");
                break;
            case 'Diésel':
                $("#suggest").text("Hemos detectado que el mayor de tus consumos esta en el diésel!");
                break;
            case 'Fuel Oil':
                $("#suggest").text("Hemos detectado que el mayor de tus consumos esta en el fuel oil!");
                break;
            case 'Gas Propano':
                $("#suggest").text("Hemos detectado que el mayor de tus consumos esta en el gas propano!");
                break;
            case 'Refrigerante R404 a':
                $("#suggest").text("Hemos detectado que el mayor de tus consumos esta en el refrigerante 404 a!");
                break;
            case 'Refrigerante R410 a':
                $("#suggest").text("Hemos detectado que el mayor de tus consumos esta en el refrigerante 410 a!;");
                break;
            default:
                $("suggest").text("Algo ha ido mal");
                $("#suggest").show();
                $("#reduccion").hide();
        }

    });

    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }

    function limpiar() {
        $(".section-mini").hide();
        $(".dat-ini").hide();
        $("#process").show();
        $("#valorIni").show();
        $("#valorFin").show();
    }

    $("#delete").on('click', function () {
        $("#total").text(" ");
        $("#total").hide();
        $("#unidadF").hide();
        $("#resultados").text(" ");
        $("#conversion").text(" ");
        $("#elec").hide();
        $("#agua").hide();
        $("#paper").hide();
        $("#refri410").hide();
        $("#refri404").hide();
        $("#aguares").hide();
        $("#diesell").hide();
        $("#gaso").hide();
        $("#fueloil").hide();
        $("#dqo").hide();
        $('#propano').hide();
        $("#elec").val('0');
        $("#agua").val('0');
        $("#paper").val('0');
        $("#refri410").val('0');
        $("#refri404").val('0');
        $("#aguares").val('0');
        $("#diesell").val('0');
        $("#gaso").val('0');
        $("#fueloil").val('0');
        $("#dqo").val('0');
        $('#propano').val('0');
        $("#error").hide();
        $("#num").val("");
        $(".section-mini").hide();
        $(".dat-ini").hide();
        $("#process").show();
        $("#valorIni").text("");
        $("#valorFin").text("");
        $("#suggest").text("");
        $("#suggest").hide("");
        $("#reduccion").hide();
        $(".suggest-div").hide();
        results = 0;
        unidad = "";
    });
});