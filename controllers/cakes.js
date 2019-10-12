exports.listAll = (req, res) => {
    return res.status(200).json(`list all`);
}

exports.listById = (req, res) => {
    return res.status(200).json(`list by id ${req.params.id}`);
}

exports.create = (req, res) => {
    return res.status(200).json(`create`);
}

exports.update = (req, res) => {
    return res.status(200).json(`Update ${req.params.id}`);
}

exports.delete = (req, res) => {
    return res.status(200).json(`Delete ${req.params.id}`);
}
