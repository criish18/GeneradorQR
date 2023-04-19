$('#contacto').submit(function(event){
    event.preventDefault();

    const nombre = $('#nombre').val();
    const apellido = $('#apellido').val();
    const telefono = $('#telefono').val();
    const email = $('#email').val();

    const contactUrl = `BEGIN:VCARD\nVERSION:3.0\nN:${apellido};${nombre};;;\nTEL;TYPE=CELL:${telefono}\nEND:VCARD`;

    const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(contactUrl)}`;

    $('#qr-code').html(`<img src="${qrUrl}" alt="QR code">`);

});
