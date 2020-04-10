module.exports = (app, db) => {

    app.get('/reserves', (req, res) => {
        db.reserve.findAll().then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(400).json(err)
        })
    })


    app.post('/reserve', async (req, res) => {
        try {
            const boatId = req.body.boatId
            const sailorId = req.body.sailorId
            const date = req.body.date
            const boat = await db.boat.findByPk(boatId)
            const sailor = await db.sailor.findByPk(sailorId)
            const result = await boat.addSailor(sailor, { through: { date: date } })
            res.status(201).json(result)
        } catch (err) {
            console.log(err)
            res.status(400).json(err.massage)

        }


    })

}