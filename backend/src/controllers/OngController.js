const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async create(request, response) {
        const { name, email, phone, city, county } = request.body;
        
            const id = crypto.randomBytes(4).toString('HEX');
        
            await connection('ongs').insert({
                id,
                name, 
                email, 
                phone, 
                city, 
                county,
            })
        
            return response.json({ id });
        },
        async index(request, response) {
            const ongs = await connection('ongs').select('*');
            return response.json(ongs);
        }
};
