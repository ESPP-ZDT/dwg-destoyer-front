import axios from 'axios';

export const createFile = (file) => async (dispatch) => {
    let formData = new FormData();
    formData.append("file", file);
    const response = await axios.post('http://localhost:5000/api/upload', formData);
    dispatch({
        type: 'CREATE_FILE',
        payload: response.data
    });
};