import swal from 'sweetalert';

const swalFunc = (text) => {
    swal({
        title: text,
        text: " ",
        icon: "success",
        button: false,
        timer: 1000,
    });
}

export default swalFunc