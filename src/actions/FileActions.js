import axios from 'axios';

export const createFile = (file) => async (dispatch) => {
    let formData = new FormData();
    formData.append("file", file);
    try {
        const response = await axios.post('http://localhost:5000/api/upload', formData);
        console.log(response.data);
        dispatch({
            type: 'CREATE_FILE',
            payload: response.data
        });
    } catch(err) {
        console.log(err);
    }
};


export const getFile = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/file/${name}`);
        dispatch({
            type: 'GET_FILE',
            payload: response.data
        });
    } catch(err) {
        console.log(err);
    }
};
