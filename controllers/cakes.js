const axios = require('axios'),
    config = require('../config/properties.json'); // file to handle environment configurations

const getCakes = (id) => {
    try {
        return axios.get(`${config.api}/cakes/${id || ''}`);
    } catch (error) {
        console.error(error);
    }
}

const createCakes = (data) => {
    try {
        return axios.post(`${config.api}/cakes/`, { ...data } );
    } catch (error) {
        console.error(error);
    }
}

const updateCakes = (id, data) => {
    try {
        return axios.put(`${config.api}/cakes/${id}`, { ...data } );
    } catch (error) {
        console.error(error)
    }
}

const deleteCakes = (id) => {
    try {
        return axios.delete(`${config.api}/cakes/${id}`);
    } catch (error) {
        console.error(error);
    }
}

exports.listCakes = async (req, res) => {
    const id = req.params.id || '';
    const cakes = await getCakes(id);

    return res.status(200).json(cakes.data);
}

exports.create = async (req, res) => {
    const data = { name, comment, imageUrl, yumFactor } = req.body;
    const setCake = await createCakes(data);

    return res.status(200).json(`${setCake.statusText}`);
}

exports.update = async (req, res) => {
    const id = req.params.id;
    const data = { name, comment, imageUrl, yumFactor } = req.body;
    const updateCake = await updateCakes(id, data);

    return res.status(200).json(`Updated ${updateCake.statusText}`);
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    const deleteCake = await deleteCakes(id);

    return res.status(200).json(`Delete ${deleteCake.statusText}`);
}
