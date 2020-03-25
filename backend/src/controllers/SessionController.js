const connection = require('../database/connection');

module.exports = {
async create(request, response) {
    const { id } = request.body;

    const ong = await connection('ongs')
    .where('id', id)
    .select('name')
    .first();

    if (!ong) {
        return response.status(400).json({ error: 'There Is Not ONG With This ID'});
    }
    return response.json(ong);
}
};