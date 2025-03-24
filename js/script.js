function calculatePerimeter() {
    const input = document.getElementById('perimeter-input');
    const output = document.getElementById('perimeter-output');
    const s = parseInt(input.value);
    const perimeter = s * 4;

    output.value = perimeter.toString();

    return false;
}

function calculateArea() {
    const input = document.getElementById('area-input');
    const output = document.getElementById('area-output');
    const s = parseInt(input.value);
    const area = s * s;
    
    output.value = area.toString();
    
    return false;
}