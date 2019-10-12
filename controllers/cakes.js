const axios = require('axios'),
    config = require('../config/properties.json'); // file to handle environment configurations

const getCakes = (id) => {
    try {
        return axios.get(`${config.api}/cakes/${id || ''}`)
    } catch (error) {
        console.error(error)
    }
}

const createCakes = (data) => {
    try {
        console.log(data)
        return axios.post(`${config.api}/cakes/`, { ...data } )
    } catch (error) {
        console.error(error)
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

    return res.status(200).json(setCake.statusText);
}

exports.update = (req, res) => {
    return res.status(200).json(`Update ${req.params.id}`);
}

exports.delete = (req, res) => {
    return res.status(200).json(`Delete ${req.params.id}`);
}
