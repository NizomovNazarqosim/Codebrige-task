const db = require('../models');

const Dogs = db.dogs;

    const allDogs = async(req, res) =>{
        try {
            const {attribute, order, pageNumber, limit} = req.query;
            if(attribute && order){
                const allDogs = await Dogs.findAll({
                    attributes: ['name', 'color', 'tail_length', 'weight'],
                    order: [[attribute, order]]
                });
                return res.status(200).send(allDogs);
            }else if(pageNumber && limit){
                const limitNum = String(limit).split('=')[1]
                console.log(pageNumber, limitNum, 'limit')
                const allDogs = await Dogs.findAll({
                    attributes: ['name', 'color', 'tail_length', 'weight'],
                    offset: (pageNumber-1)*limitNum,
                    limit: limitNum
                })
                return res.status(200).send(allDogs);
            }else{
                const allDogs = await Dogs.findAll({attributes: ['name', 'color', 'tail_length', 'weight']})
                return res.status(200).send(allDogs);
            }
        } catch (error) {
            res.status(401).send(error.errors[0] || error);
        }
    }

const addNewDog = async (req, res) => {
    try {
        const {name, color, tail_length, weight} = req.body;
        const newDog = await Dogs.create({name, color, tail_length, weight});
        res.status(201).send(newDog);
    } catch (error) {
        res.status(400).send(error.errors[0] || error);
    }
}

module.exports = {
    allDogs,
    addNewDog,
}