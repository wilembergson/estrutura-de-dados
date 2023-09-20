import Swal from 'sweetalert2';

const showErrorAlert = async (message: string) => {
    Swal.fire(message);
};

const alerts = {
    showErrorAlert    
}

export default alerts